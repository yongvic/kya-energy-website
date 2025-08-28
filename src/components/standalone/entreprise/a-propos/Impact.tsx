"use client";
import { useTranslations } from "next-intl";
import { FaGlobeAfrica, FaLeaf, FaSolarPanel } from "react-icons/fa";
import { FaHouse } from "react-icons/fa6";

export default function Impact() {
  const t = useTranslations("à propos.impact");

  return (
    <div className="bg-gray-200 py-32">
      <div className="container mx-auto px-4">
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
        <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/** biome-ignore lint/performance/useSolidForComponent: React Component */}
          {[
            {
              desc: "Systèmes déployés avec succès",
              icon: <FaSolarPanel />,
              stat: "1,000+",
              title: "Installations Solaires",
            },
            {
              desc: "Familles bénéficiant d'énergie propre",
              icon: <FaHouse />,
              stat: "50,000+",
              title: "Foyers Alimentés",
            },
            {
              desc: "Impact environnemental positif",
              icon: <FaLeaf />,
              stat: "25,000T",
              title: "CO₂ Évitées",
            },
            {
              desc: "Présence continentale active",
              icon: <FaGlobeAfrica />,
              stat: "15",
              // biome-ignore lint/nursery/noSecrets: Just simple litteral
              title: "Pays d'Intervention",
            },
          ].map((value) => (
            <div
              className="impact-card hover:-translate-y-1 flex flex-col items-center gap-2 rounded-xl bg-white p-8 text-center opacity-0 shadow transition-all duration-300 hover:shadow-xl"
              key={value.title}>
              <div className="w-max rounded-full bg-green-200 p-4 text-3xl text-kya-green">
                {value.icon}
              </div>
              <p className="py-2 font-bold text-4xl">{value.stat}</p>
              <h3 className="font-semibold text-lg">{value.title}</h3>
              <p className="text-kya-coffee text-sm">{value.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
