"use client";
import { stagger, useAnimate, useInView } from "framer-motion";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { useEffect } from "react";
import { LuCrown, LuSchool, LuLightbulb, LuAward } from "react-icons/lu";

export default function Fondateur() {
  const t = useTranslations("à propos.fondateur");
  const [founderScope, animateFounder] = useAnimate();
  const isFounderInView = useInView(founderScope, { once: true, amount: 0.2 });
  useEffect(() => {
    if (isFounderInView)
      animateFounder([
        [".founder-image", { opacity: [0, 1], x: [-30, 0] }, { duration: 0.7 }],
        [
          ".founder-content",
          { opacity: [0, 1], x: [30, 0] },
          { duration: 0.7, at: "<", delay: stagger(0.1) },
        ],
      ]);
  }, [isFounderInView, animateFounder]);
  return (
    <div
      ref={founderScope}
      id="dg"
      className="container mx-auto px-4 my-32 flex flex-col lg:flex-row gap-8 items-center overflow-hidden"
    >
      {/* Image */}
      <div className="founder-image opacity-0 w-max relative">
        <div className="w-max rounded-xl overflow-hidden shadow-xl">
          <Image
            width={296}
            height={361}
            src={`/team/fondateur.png`}
            alt={t("nom")}
            className="object-cover"
          />
        </div>
        <div className="flex items-center justify-center gap-2 absolute -top-4 right-3 px-4 py-2 rounded-full font-bold text-white bg-kya-orange">
          <p className="text-xl">
            <LuCrown />
          </p>
          <p>{t("titre")}</p>
        </div>
      </div>
      {/* Description */}
      <div className="flex flex-col gap-8">
        <h2 className="founder-content opacity-0 font-bold text-4xl text-center lg:text-left">
          {t("nom")}
        </h2>
        <p className="founder-content opacity-0 text-kya-green text-2xl text-center lg:text-left font-medium">
          {t("fonction")}
        </p>
        <p className="founder-content opacity-0 text-xl">{t("description")}</p>
        <div className="space-y-8">
          {[
            {
              icon: <LuSchool />,
              title: "Professeur d'université",
              desc: "Expert reconnu en énergies renouvelables",
            },
            {
              icon: <LuLightbulb />,
              title: "Innovateur",
              desc: "Pionnier des solutions solaires africaines",
            },
            {
              icon: <LuAward />,
              title: "Leader Visionnaire",
              desc: "Architecte de l'avenir énergétique",
            },
          ].map((value, index) => (
            <div key={index} className="founder-content opacity-0">
              <div className="flex items-center gap-4 p-8 bg-linear-to-r from-[#87CEEB7f] to-[#7BF1A87F] shadow hover:shadow-xl transition-all duration-300 rounded-xl">
                <div className="text-2xl text-kya-white w-max p-4 bg-kya-green rounded-full">
                  {value.icon}
                </div>
                <div className="space-y-2">
                  <h3 className="font-bold text-2xl text-kya-green">
                    {value.title}
                  </h3>
                  <p className="text-xl">{value.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
