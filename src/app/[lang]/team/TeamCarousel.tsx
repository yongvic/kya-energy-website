"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import Image from "next/image";
import TranslationsType from "@/translations/translations.definition";

export default function TeamCarousel(
    { teamMembers }: {
        teamMembers: TranslationsType["team"];
    }
) {
    const rotateY = useMotionValue(0);
    const springRotateY = useSpring(rotateY, {
        damping: 30,
        stiffness: 100,
        mass: 0.5,
    });

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        const { clientX, currentTarget } = e;
        const { left, width } = currentTarget.getBoundingClientRect();
        const mouseX = clientX - left;
        const percentage = (mouseX / width - 0.5) * 2; // Normalize to -1 to 1
        rotateY.set(percentage * 180); // Rotate 180 degrees in each direction
    };

    const handleMouseLeave = () => {
        springRotateY.set(0, true);
    };

    const radius = 350;
    const angleIncrement = 360 / teamMembers.length;

    return (
        <motion.div
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden py-48"
        >
            <h2 className="text-3xl md:text-5xl font-bold mb-16 text-center select-none">
                Meet Our Team
            </h2>
            <motion.div
                className="relative flex items-center justify-center"
                style={{
                    width: "100%",
                    height: "500px",
                    perspective: "1000px",
                    transformStyle: "preserve-3d",
                }}
            >
                <motion.div
                    className="absolute w-full h-full"
                    style={{
                        transformStyle: "preserve-3d",
                        rotateY: springRotateY,
                    }}
                >
                    {teamMembers.map((member, i) => {
                        const angle = i * angleIncrement;
                        return (
                            <div
                                key={member.name}
                                className="absolute text-center select-none"
                                style={{
                                    transform: `rotateY(${angle}deg) translateZ(${radius}px)`,
                                    top: "50%",
                                    left: "50%",
                                    margin: "-160px 0 0 -144px",
                                }}
                            >
                                <div className="scale-50 relative w-[296px] h-[361px] bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg pointer-events-none">
                                    <Image
                                        src={`/team/${member.image}`}
                                        alt={member.name}
                                        width={296}
                                        height={361}
                                        className="object-cover"
                                    />
                                </div>
                                <h3 className="text-xl font-semibold -mt-8">{member.name}</h3>
                                <p className="text-md text-gray-600 dark:text-gray-400">
                                    {member.role}
                                </p>
                            </div>
                        );
                    })}
                </motion.div>
            </motion.div>
        </motion.div>
    );
}