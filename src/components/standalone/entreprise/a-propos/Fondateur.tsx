"use client";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { LuAward, LuCrown, LuLightbulb, LuSchool } from "react-icons/lu";

export default function Fondateur() {
  const t = useTranslations("à propos.fondateur");

  return (
    // biome-ignore lint/correctness/useUniqueElementIds: React Component
    <div
      className="container mx-auto my-32 flex flex-col items-center gap-8 overflow-hidden px-4 lg:flex-row"
      id="dg">
      {/* Image */}
      <div className="founder-image relative w-max opacity-0">
        <div className="w-max overflow-hidden rounded-xl shadow-xl">
          <Image
            alt={t("nom")}
            className="object-cover"
            height={361}
            src="/team/fondateur.png"
            width={296}
          />
        </div>
        <div className="-top-4 absolute right-3 flex items-center justify-center gap-2 rounded-full bg-kya-orange px-4 py-2 font-bold text-white">
          <p className="text-xl">
            <LuCrown />
          </p>
          <p>{t("titre")}</p>
        </div>
      </div>
      {/* Description */}
      <div className="flex flex-col gap-8">
        <h2 className="founder-content text-center font-bold text-4xl opacity-0 lg:text-left">
          {t("nom")}
        </h2>
        <p className="founder-content text-center font-medium text-2xl text-kya-green opacity-0 lg:text-left">
          {t("fonction")}
        </p>
        <p className="founder-content text-xl opacity-0">{t("description")}</p>
        <div className="space-y-8">
          {/** biome-ignore lint/performance/useSolidForComponent: React Component */}
          {[
            {
              desc: "Expert reconnu en énergies renouvelables",
              icon: <LuSchool />,
              title: "Professeur d'université",
            },
            {
              desc: "Pionnier des solutions solaires africaines",
              icon: <LuLightbulb />,
              title: "Innovateur",
            },
            {
              desc: "Architecte de l'avenir énergétique",
              icon: <LuAward />,
              title: "Leader Visionnaire",
            },
          ].map((value) => (
            <div
              className="founder-content opacity-0"
              key={value.title}>
              <div className="flex items-center gap-4 rounded-xl bg-linear-to-r from-[#87CEEB7f] to-[#7BF1A87F] p-8 shadow transition-all duration-300 hover:shadow-xl">
                <div className="w-max rounded-full bg-kya-green p-4 text-2xl text-kya-white">
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
