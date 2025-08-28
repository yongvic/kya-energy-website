"use client";
import { useTranslations } from "next-intl";
import {
  LuAward,
  LuGroup,
  LuLeaf,
  LuRocket,
  LuScale,
  LuShield,
} from "react-icons/lu";

export default function Valeurs() {
  const t = useTranslations("à propos.valeurs");

  return (
    <section className="container mx-auto my-32 px-4">
      <div className="section-title px-4 opacity-0 lg:px-48">
        <div className="my-4 flex items-center justify-center">
          <p className="w-max rounded-full bg-kya-green px-4 py-2 font-bold text-sm text-white">
            {t("titre")}
          </p>
        </div>
        <h2 className="w-full text-center font-bold text-4xl">
          {t("sous titre")}
        </h2>
        <div className="my-4 flex items-center justify-center">
          <div className="h-1 w-32 bg-green-300" />
        </div>
        <p className="text-center text-xl">{t("description")}</p>
      </div>
      <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {/** biome-ignore lint/performance/useSolidForComponent: React Component */}
        {[
          {
            // biome-ignore lint/nursery/noSecrets: string litteral
            desc: "Professionnalisme et rigueur dans chaque projet",
            icon: <LuAward />,
            title: "Excellence",
          },
          {
            desc: "Transparence et honnêteté en toutes circonstances",
            icon: <LuShield />,
            title: "Intégrité",
          },
          {
            desc: "Créativité et solutions avant-gardistes",
            icon: <LuRocket />,
            title: "Innovation",
          },
          {
            desc: "Esprit d'équipe et synergie collective",
            icon: <LuGroup />,
            // biome-ignore lint/nursery/noSecrets: string litteral
            title: "Collaboration",
          },
          {
            // biome-ignore lint/nursery/noSecrets: Just string litteral
            desc: "Responsabilité environnementale et sociale",
            icon: <LuLeaf />,
            title: "Durabilité",
          },
          {
            desc: "Justice et fairness dans toutes nos relations",
            icon: <LuScale />,
            title: "Équité",
          },
        ].map((value) => (
          <div
            className="value-card hover:-translate-y-1 flex flex-col items-center gap-4 rounded-xl bg-white p-8 text-center opacity-0 shadow transition-all duration-300 hover:shadow-xl"
            key={value.title}>
            <div className="w-max rounded-full bg-green-200 p-4 text-3xl text-kya-green">
              {value.icon}
            </div>
            <h3 className="font-bold text-2xl">{value.title}</h3>
            <p className="text-gray-500 text-xl">{value.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
