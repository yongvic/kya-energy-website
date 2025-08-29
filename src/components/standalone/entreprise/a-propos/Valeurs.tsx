"use client";

import { useTranslations } from "next-intl";
// Icônes
import {
  LuAward,
  LuShield,
  LuRocket,
  LuUsers, // Remplacé LuGroup pour une meilleure consistance de style
  LuLeaf,
  LuScale,
} from "react-icons/lu";

// --- Données pour l'exemple ---
const values = [
  {
    icon: LuAward,
    titre: "excellence.titre",
    description: "excellence.description",
  },
  {
    icon: LuShield,
    titre: "integrite.titre",
    description: "integrite.description",
  },
  {
    icon: LuRocket,
    titre: "innovation.titre",
    description: "innovation.description",
  },
  {
    icon: LuUsers,
    titre: "collaboration.titre",
    description: "collaboration.description",
  },
  {
    icon: LuLeaf,
    titre: "durabilite.titre",
    description: "durabilite.description",
  },
  {
    icon: LuScale,
    titre: "equite.titre",
    description: "equite.description",
  },
];

export default function Values() {
  const t = useTranslations("à propos.valeurs");

  return (
    <section className="bg-white py-24 sm:py-32">
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

        {/* 2. Grille des Valeurs (2 colonnes sur desktop) */}
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-x-12 gap-y-16 lg:grid-cols-2">
          {values.map((value, index) => (
            <div
              key={value.titre}
              className="animate-fade-in-up flex items-start gap-6"
              style={{
                animationDelay: `${150 * index}ms`,
              }}>
              {/* Icône */}
              <div className="flex size-12 flex-shrink-0 items-center justify-center rounded-full bg-kya-green/10">
                <value.icon className="text-2xl text-kya-green" />
              </div>

              {/* Contenu textuel */}
              <div>
                <h3 className="text-xl font-bold text-kya-coffee">
                  {t(`${value.titre}`)}
                </h3>
                <p className="mt-2 text-slate-600">
                  {t(`${value.description}`)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
