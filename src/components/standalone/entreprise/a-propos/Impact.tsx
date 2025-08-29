"use client";

import { useTranslations } from "next-intl";
// Icônes
import {
  FaSolarPanel,
  FaLeaf,
  FaGlobeAfrica,
  FaHome, // Remplacé FaHouse pour une meilleure consistance de style
} from "react-icons/fa";

// --- Données pour l'exemple ---
const stats = [
  {
    icon: FaSolarPanel,
    stat: "1,000+",
    titre: "installations.titre",
    description: "installations.description",
  },
  {
    icon: FaHome,
    stat: "50,000+",
    titre: "foyers.titre",
    description: "foyers.description",
  },
  {
    icon: FaLeaf,
    stat: "25,000T",
    titre: "co2.titre",
    description: "co2.description",
  },
  {
    icon: FaGlobeAfrica,
    stat: "15",
    titre: "pays.titre",
    description: "pays.description",
  },
];

export default function ImpactStats() {
  const t = useTranslations("à propos.impact");

  return (
    <section className="bg-slate-50 py-24 sm:py-32">
      <div className="container mx-auto px-4">
        {/* 1. En-tête de la section */}
        <div className="animate-fade-in-up mb-20 max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-extrabold tracking-tight text-kya-coffee sm:text-5xl">
            {t("titre")}
          </h2>
          <div className="mx-auto mt-4 h-1.5 w-24 rounded-full bg-gradient-to-r from-kya-green to-kya-orange" />
          <p className="mt-6 text-lg leading-8 text-slate-600">
            {t("sous titre")}
          </p>
        </div>

        {/* 2. La Frise d'Impact */}
        <div className="grid grid-cols-2 gap-px rounded-2xl border border-slate-200 bg-slate-200 shadow-sm md:grid-cols-4">
          {stats.map((stat, index) => (
            <div
              key={stat.titre}
              className="animate-fade-in-up relative overflow-hidden bg-white p-8 text-center first:rounded-tl-2xl last:rounded-br-2xl nth-[2]:rounded-tr-2xl nth-[3]:rounded-bl-2xl md:first:rounded-l-2xl md:last:rounded-r-2xl md:nth-[2]:rounded-none md:nth-[3]:rounded-none"
              style={{
                animationDelay: `${150 * index}ms`,
              }}>
              {/* Icône en filigrane (arrière-plan) */}
              <div className="absolute -right-8 -top-8 z-0">
                <stat.icon className="text-[10rem] text-slate-100/80" />
              </div>

              {/* Contenu principal */}
              <div className="relative z-10 flex flex-col items-center">
                {/* La Statistique */}
                <p className="text-5xl font-extrabold tracking-tighter text-kya-orange sm:text-6xl">
                  {stat.stat}
                </p>
                {/* Le Titre */}
                <h3 className="mt-2 text-lg font-semibold text-kya-coffee">
                  {t(`${stat.titre}`)}
                </h3>
                {/* La Description */}
                <p className="mt-1 text-sm text-slate-500">
                  {t(`${stat.description}`)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
