"use client";
import { stagger, useAnimate, useInView } from "framer-motion";
import { useTranslations } from "next-intl";
import { useEffect } from "react";
import { LuGlobe, LuTabletSmartphone, LuTrophy } from "react-icons/lu";

export default function Vision() {
  const t = useTranslations("à propos.vision");
  const [visionScope, animateVision] = useAnimate();
  const isVisionInView = useInView(visionScope, {
    once: true,
    amount: 0.2,
  });
  useEffect(() => {
    if (isVisionInView) {
      animateVision([
        [
          ".section-title",
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
            duration: 0.6,
          },
        ],
        [
          ".vision-card",
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
            duration: 0.5,
            delay: stagger(0.15),
            at: "-0.2",
          },
        ],
      ]);
    }
  }, [
    isVisionInView,
    animateVision,
  ]);

  return (
    <div
      ref={visionScope}
      className="container mx-auto px-4 my-32">
      <div className="section-title opacity-0 px-4 lg:px-48">
        <div className="flex items-center justify-center my-4">
          <p className="w-max rounded-full px-4 py-2 bg-kya-green text-white font-bold text-sm">
            {t("titre")}
          </p>
        </div>
        <h2 className="text-center text-4xl font-bold w-full">
          {t("sous titre")}
        </h2>
        <div className="flex justify-center items-center my-4">
          <div className="h-1 w-32 bg-green-300" />
        </div>
        <p className="text-center text-xl">{t("description")}</p>
      </div>
      <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
        {[
          {
            icon: <LuGlobe />,
            title: "Leadership Continental",
            desc: "Ambition de figurer parmi les 10 leaders de l'industrie énergétique en Afrique",
          },
          {
            icon: <LuTabletSmartphone />,
            title: "Innovation Technologique",
            desc: "Développement de solutions solaires de pointe adaptées au contexte africain",
          },
          {
            icon: <LuTrophy />,
            title: "Impact Durable",
            desc: "Extension de notre influence pour un avenir énergétique durable en Afrique",
          },
        ].map((value) => (
          <div
            key={value.title}
            className="vision-card opacity-0 text-center flex flex-col items-center gap-4 p-8 bg-white rounded-xl shadow hover:shadow-xl hover:scale-105 transition-all duration-300">
            <div className="w-max p-4 bg-green-200 text-kya-green rounded-full text-3xl">
              {value.icon}
            </div>
            <h3 className="font-bold text-2xl">{value.title}</h3>
            <p className="text-xl text-gray-500">{value.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
