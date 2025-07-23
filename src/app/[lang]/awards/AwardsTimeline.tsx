"use client";
import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  MotionValue,
} from "framer-motion";
import Image from "next/image";
import TranslationsType from "@/translations/translations.definition";

type Award = TranslationsType["awards"][0];

function AwardSection({
  award,
  scrollYProgress,
  index,
}: {
  award: Award;
  scrollYProgress: MotionValue<number>;
  index: number;
}) {
  const isEven = index % 2 === 0;
  const scale = useTransform(scrollYProgress, [0, 1], [0.85, 1]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0.7, 1]);

  return (
    <motion.div
      style={{ scale, opacity }}
      className={`relative h-screen w-full flex flex-col ${
        isEven ? "md:flex-row" : "md:flex-row-reverse"
      } items-center justify-center snap-start pt-24`}
    >
      {/* Timeline Line */}
      <div
        className={`absolute top-0 ${
          isEven ? "right-8 md:right-16" : "left-8 md:left-16"
        } w-0.5 h-full bg-gray-300 dark:bg-gray-700`}
      />

      {/* Timeline Bullet */}
      <div
        className={`absolute top-1/2 -translate-y-1/2 ${
          isEven
            ? "right-8 md:right-16 translate-x-1/2"
            : "left-8 md:left-16 -translate-x-1/2"
        } w-8 h-8 rounded-full bg-green-500 border-4 border-white dark:border-gray-900`}
      />

      {/* Image Container */}
      <div className="w-full md:w-1/2 h-1/2 md:h-full relative p-4 md:p-8">
        <Image
          src={`/awards/${award.image}`}
          alt={award.title}
          layout="fill"
          objectFit="contain"
        />
      </div>

      {/* Text Container */}
      <div
        className={`w-full md:w-1/2 h-1/2 md:h-full flex flex-col justify-center items-center text-center p-8 ${
          isEven ? "md:pr-24" : "md:pl-24"
        }`}
      >
        <p className="text-6xl md:text-8xl font-bold text-gray-300 dark:text-gray-700">
          {award.year}
        </p>
        <h2 className="text-2xl md:text-4xl font-semibold mt-4">
          {award.title}
        </h2>
        <p className="mt-4 max-w-md">{award.description}</p>
      </div>
    </motion.div>
  );
}

export default function AwardsTimeline({ awards }: { awards: Award[] }) {
  return (
    <div className="h-screen w-full snap-y snap-mandatory overflow-y-scroll">
      {awards.map((award, i) => {
        const targetRef = useRef(null);
        const { scrollYProgress: sectionScrollYProgress } = useScroll({
          target: targetRef,
          offset: ["start end", "end start"],
        });

        return (
          <div ref={targetRef} key={award.order}>
            <AwardSection
              award={award}
              scrollYProgress={sectionScrollYProgress}
              index={i}
            />
          </div>
        );
      })}
    </div>
  );
}
