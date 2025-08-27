"use client";
import { stagger, useAnimate, useInView } from "framer-motion";
import { useTranslations } from "next-intl";
import { useEffect } from "react";
import {
  LuAward,
  LuGroup,
  LuLeaf,
  LuRocket,
  LuScale,
  LuShield,
} from "react-icons/lu";

export default function Valeurs() {
  const [valuesScope, animateValues] = useAnimate();
  const isValuesInView = useInView(valuesScope, { once: true, amount: 0.2 });
  useEffect(() => {
    if (isValuesInView)
      animateValues([
        [".section-title", { opacity: [0, 1], y: [20, 0] }, { duration: 0.6 }],
        [
          ".value-card",
          { opacity: [0, 1], y: [30, 0] },
          { duration: 0.5, delay: stagger(0.1), at: "-0.2" },
        ],
      ]);
  }, [isValuesInView, animateValues]);

  const t = useTranslations("à propos.valeurs");

  return (
    <section ref={valuesScope} className="container mx-auto px-4 my-32">
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
          <div className="h-1 w-32 bg-green-300"></div>
        </div>
        <p className="text-center text-xl">{t("description")}</p>
      </div>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[
          {
            icon: <LuAward />,
            title: "Excellence",
            desc: "Professionnalisme et rigueur dans chaque projet",
          },
          {
            icon: <LuShield />,
            title: "Intégrité",
            desc: "Transparence et honnêteté en toutes circonstances",
          },
          {
            icon: <LuRocket />,
            title: "Innovation",
            desc: "Créativité et solutions avant-gardistes",
          },
          {
            icon: <LuGroup />,
            title: "Collaboration",
            desc: "Esprit d'équipe et synergie collective",
          },
          {
            icon: <LuLeaf />,
            title: "Durabilité",
            desc: "Responsabilité environnementale et sociale",
          },
          {
            icon: <LuScale />,
            title: "Équité",
            desc: "Justice et fairness dans toutes nos relations",
          },
        ].map((value, index) => (
          <div
            key={index}
            className="value-card opacity-0 text-center flex flex-col items-center gap-4 p-8 bg-white rounded-xl shadow hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
          >
            <div className="w-max p-4 bg-green-200 text-kya-green rounded-full text-3xl">
              {value.icon}
            </div>
            <h3 className="font-bold text-2xl">{value.title}</h3>
            <p className="text-xl text-gray-500">{value.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
