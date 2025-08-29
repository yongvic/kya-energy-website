"use client";
import { useTranslations } from "next-intl";
import Link from "next/link";
import {
  LuArrowRight,
  LuGlobe,
  LuTabletSmartphone,
  LuTrophy,
} from "react-icons/lu";

export default function Vision() {
  const t = useTranslations("à propos.vision");
  const visions = [
    {
      descKey:
        "Ambition de figurer parmi les 10 leaders de l'industrie énergétique en Afrique",
      href: "/notre-vision/leadership",
      icon: LuGlobe,
      titleKey: "Leadership Continental",
    },
    {
      descKey:
        "Développement de solutions solaires de pointe adaptées au contexte africain",
      href: "/notre-vision/innovation",
      icon: LuTabletSmartphone,
      titleKey: "Innovation Technologique",
    },
    {
      descKey:
        "Extension de notre influence pour un avenir énergétique durable en Afrique",
      href: "/notre-vision/impact",
      icon: LuTrophy,
      titleKey: "Impact Durable",
    },
  ];
  return (
    <section className="relative overflow-hidden bg-slate-50 py-24 sm:py-32">
      {/* Aura de couleur en arrière-plan pour donner de la profondeur */}
      <div className="absolute left-1/2 top-0 -z-0 h-[40rem] w-[80rem] -translate-x-1/2 rounded-full bg-gradient-to-br from-kya-green/10 to-kya-orange/10 blur-3xl" />

      <div className="container relative z-10 mx-auto px-4">
        {/* En-tête de section */}
        <div className="animate-fade-in-up mb-16 text-center">
          <p className="font-semibold text-kya-green">{t("titre")}</p>
          <h2 className="mt-2 text-4xl font-extrabold text-kya-coffee sm:text-5xl">
            {t("sous titre")}
          </h2>
          <div className="mx-auto mt-4 h-1.5 w-24 rounded-full bg-gradient-to-r from-kya-green to-kya-orange" />
          <p className="mx-auto mt-6 max-w-2xl text-lg text-kya-coffee/70">
            {t("description")}
          </p>
        </div>

        {/* Grille des cartes de vision */}
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 md:grid-cols-3">
          {visions.map((vision, index) => (
            <div
              key={vision.titleKey}
              // --- Animation en cascade ---
              className="animate-fade-in-up group relative flex flex-col rounded-2xl border border-kya-white bg-kya-white/70 p-8 text-center shadow-lg backdrop-blur-lg transition-all duration-300 hover:shadow-2xl"
              style={{
                animationDelay: `${150 * index}ms`,
              }}>
              {/* Effet de bordure "glow" au survol */}
              <div className="absolute inset-0 z-0 rounded-2xl border-2 border-kya-green opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              <div className="relative z-10 flex flex-grow flex-col items-center">
                {/* Icône */}
                <div className="mb-6 flex size-16 items-center justify-center rounded-full bg-gradient-to-br from-kya-green to-teal-400 text-3xl text-kya-white shadow-md">
                  <vision.icon />
                </div>

                {/* Titre */}
                <h3 className="text-2xl font-bold text-kya-coffee">
                  {vision.titleKey}
                </h3>

                {/* Description */}
                <p className="mt-4 flex-grow text-kya-coffee/70">
                  {vision.descKey}
                </p>

                {/* Lien "En savoir plus" qui apparaît au survol. Remplacement de flex par hidden */}
                <Link
                  href={vision.href}
                  className="hidden mt-8 items-center gap-2 font-semibold text-kya-green opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <span>En savoir plus</span>
                  <LuArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
