"use client";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { LuAward, LuCrown, LuLightbulb, LuSchool } from "react-icons/lu";

export default function Fondateur() {
  const t = useTranslations("à propos.fondateur");
  const keyPoints = [
    {
      descKey: "Expert reconnu en énergies renouvelables",
      icon: LuSchool,
      titleKey: "Professeur d'université",
    },
    {
      descKey: "Pionnier des solutions solaires africaines",
      icon: LuLightbulb,
      titleKey: "Innovateur",
    },
    {
      descKey: "Architecte de l'avenir énergétique",
      icon: LuAward,
      titleKey: "Leader Visionnaire",
    },
  ];

  return (
    <section className="bg-slate-50/70 py-24 sm:py-32">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-5 lg:gap-20">
          {/* --- Colonne de l'Image (prend 2/5 de la largeur sur desktop) --- */}
          <div className="animate-fade-in-up relative lg:col-span-2">
            <div className="relative mx-auto w-fit">
              <div className="overflow-hidden rounded-2xl shadow-2xl">
                <Image
                  alt={t("nom")}
                  className="object-cover"
                  height={430}
                  src="/team/azoumah.avif"
                  width={350}
                />
              </div>
              {/* Badge "Fondateur" redessiné, plus subtil */}
              <div className="absolute -bottom-4 -right-4 flex items-center gap-2 rounded-full border-4 border-slate-50 bg-kya-orange px-4 py-2 font-bold text-kya-white shadow-lg">
                <LuCrown />
                <span>{t("titre")}</span>
              </div>
            </div>
          </div>

          {/* --- Colonne du Contenu (prend 3/5 de la largeur sur desktop) --- */}
          <div
            className="animate-fade-in-up lg:col-span-3"
            style={{
              animationDelay: "150ms",
            }}>
            {/* Nom et fonction */}
            <div>
              <h2 className="text-4xl font-extrabold text-kya-coffee sm:text-5xl">
                {t("nom")}
              </h2>
              <p className="mt-2 text-2xl font-semibold text-kya-green">
                {t("fonction")}
              </p>
            </div>

            {/* Description principale */}
            <p className="prose prose-xl mt-8 max-w-none text-kya-coffee/80">
              {t("description")}
            </p>

            {/* Liste des points clés, plus épurée */}
            <div className="mt-10 space-y-6 border-t border-gray-200 pt-8">
              {keyPoints.map((point) => (
                <div
                  className="flex items-start gap-4"
                  key={point.titleKey}>
                  <div className="flex size-10 flex-shrink-0 items-center justify-center rounded-full bg-kya-green/10 text-kya-green">
                    <point.icon className="text-xl" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-kya-coffee">
                      {point.titleKey}
                    </h4>
                    <p className="mt-1 text-kya-coffee/70">{point.descKey}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
