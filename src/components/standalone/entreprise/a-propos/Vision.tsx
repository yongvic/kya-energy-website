"use client";
import { useTranslations } from "next-intl";
import { LuGlobe, LuTabletSmartphone, LuTrophy } from "react-icons/lu";

export default function Vision() {
  const t = useTranslations("à propos.vision");
  return (
    <div className="container mx-auto my-32 px-4">
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
      <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-3">
        {[
          {
            desc: "Ambition de figurer parmi les 10 leaders de l'industrie énergétique en Afrique",
            icon: <LuGlobe />,
            title: "Leadership Continental",
          },
          {
            desc: "Développement de solutions solaires de pointe adaptées au contexte africain",
            icon: <LuTabletSmartphone />,
            title: "Innovation Technologique",
          },
          {
            desc: "Extension de notre influence pour un avenir énergétique durable en Afrique",
            icon: <LuTrophy />,
            title: "Impact Durable",
          },
        ].map((value) => (
          <div
            className="vision-card flex flex-col items-center gap-4 rounded-xl bg-white p-8 text-center opacity-0 shadow transition-all duration-300 hover:scale-105 hover:shadow-xl"
            key={value.title}>
            <div className="w-max rounded-full bg-green-200 p-4 text-3xl text-kya-green">
              {value.icon}
            </div>
            <h3 className="font-bold text-2xl">{value.title}</h3>
            <p className="text-gray-500 text-xl">{value.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
