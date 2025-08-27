"use client";
import { motion, useAnimate } from "framer-motion";
import { FaTrophy } from "react-icons/fa";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { useEffect } from "react";

export default function Introduction() {
  const [heroScope, animateHero] = useAnimate();
  useEffect(() => {
    animateHero([
      [
        ".hero-badge",
        {
          opacity: [
            0,
            1,
          ],
          scale: [
            0.8,
            1,
          ],
        },
        {
          duration: 0.6,
          delay: 0.2,
        },
      ],
      [
        ".hero-title",
        {
          opacity: [
            0,
            1,
          ],
          y: [
            30,
            0,
          ],
        },
        {
          duration: 0.7,
          at: "-0.3",
        },
      ],
      [
        ".hero-subtitle",
        {
          opacity: [
            0,
            1,
          ],
          y: [
            20,
            0,
          ],
        },
        {
          duration: 0.7,
          at: "-0.4",
        },
      ],
    ]);
  }, [
    animateHero,
  ]);
  const t = useTranslations("récompenses.introduction");

  return (
    <section>
      <div className="relative h-[calc(100vh-6rem)]">
        {/* Image */}
        <div className="w-full h-full overflow-hidden">
          <Image
            width={500}
            height={500}
            src="/awards/group.avif"
            alt="Awards background"
            className="w-full h-full object-cover"
          />
        </div>
        {/* Text Overlay */}
        <div
          ref={heroScope}
          className="absolute top-0 left-0 z-10 w-full h-full bg-black/70 flex flex-col items-center justify-center p-4">
          <div className="text-white w-[90%] md:w-[70%] lg:w-1/2 space-y-8">
            <div className="hero-badge opacity-0 flex justify-center items-center">
              <div className="w-max py-4 px-8 flex items-center gap-2 bg-kya-orange/75 rounded-full backdrop-blur-sm">
                <p className="text-2xl">
                  <FaTrophy />
                </p>
                <p>{t("excellence")}</p>
              </div>
            </div>
            <h1 className="hero-title opacity-0 text-4xl md:text-6xl lg:text-8xl text-center font-bold">
              {/* Using Tailwind CSS classes for gradient text */}
              <motion.span
                initial={{
                  backgroundSize: "0% 100%",
                }}
                animate={{
                  backgroundSize: "100% 100%",
                }}
                transition={{
                  duration: 1.5,
                  delay: 0.8,
                  ease: "easeInOut",
                }}
                className="bg-gradient-to-r from-kya-green to-kya-green/75 bg-no-repeat bg-clip-text text-transparent">
                {t("nos prix")}
              </motion.span>{" "}
              {t("et")}{" "}
              <motion.span
                initial={{
                  backgroundSize: "0% 100%",
                }}
                animate={{
                  backgroundSize: "100% 100%",
                }}
                transition={{
                  duration: 1.5,
                  delay: 1,
                  ease: "easeInOut",
                }}
                className="bg-gradient-to-r from-kya-orange to-kya-orange/75 bg-no-repeat bg-clip-text text-transparent">
                {t("distinctions")}
              </motion.span>
            </h1>
            <p className="hero-subtitle opacity-0 text-lg md:text-xl lg:text-2xl text-center text-slate-200">
              {t("reconnaissance")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
