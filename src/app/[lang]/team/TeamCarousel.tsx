"use client";

import { motion, useMotionValue, useSpring, PanInfo } from "framer-motion";
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

    const handlePan = (e: PointerEvent, info: PanInfo) => {
        // Adjust sensitivity of the drag
        rotateY.set(rotateY.get() + info.delta.x * 0.1);
    };

    const handlePanEnd = (e: PointerEvent, info: PanInfo) => {
        // Add inertia to the rotation
        springRotateY.set(rotateY.get() + info.velocity.x * 0.1, true);
    };

    const radius = 350;
    const angleIncrement = 360 / teamMembers.length;

    return (
        <motion.div
            onPan={handlePan}
            onPanEnd={handlePanEnd}
            className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden cursor-grab py-48"
            whileTap={{ cursor: "grabbing" }}
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
                                className="absolute w-64 md:w-72 text-center select-none"
                                style={{
                                    transform: `rotateY(${angle}deg) translateZ(${radius}px)`,
                                    top: "50%",
                                    left: "50%",
                                    margin: "-160px 0 0 -144px",
                                }}
                            >
                                <div className="relative w-[296px] h-[361px] scale-75 bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg pointer-events-none">
                                    <Image
                                        src={`/team/${member.image}`}
                                        alt={member.name}
                                        width={296}
                                        height={361}
                                        className="object-cover"
                                    />
                                </div>
                                <h3 className="text-xl font-semibold mt-4">{member.name}</h3>
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