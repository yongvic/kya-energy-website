"use client";
import { useTranslations } from "next-intl";
import {
  FaCheckCircle,
  FaGlobeAfrica,
  FaHandshake,
  FaLeaf,
  FaLightbulb,
  FaTrophy,
} from "react-icons/fa";

export default function DomainesExcellence() {
  const t = useTranslations("récompenses.domaines d'excellence");

  const categories = [
    {
      awards: [
        "Prix de l'idée lumineuse 2024",
        "Palme internationale innovation 2022",
        "Prix valorisation recherche 2022",
        "Prix transition énergétique 2020",
      ],
      count: 4,
      icon: FaLightbulb,
      titleKey: "Innovation Technologique",
    },
    {
      awards: [
        "Mini-centrales propres 2024",
        "Prix PADEV Excellence 2022",
        "Électrification solaire USAID 2019",
      ],
      count: 3,
      icon: FaLeaf,
      titleKey: "Impact Environnemental",
    },
    {
      awards: [
        "Meilleur partenaire HITECH 2024",
        "Prix BOAD StartUp 2019",
      ],
      count: 2,
      icon: FaHandshake,
      titleKey: "Partenariats & Collaboration",
    },
    {
      awards: [
        "Global entrepreneur awards 2024",
        "Bâtisseurs économie africaine 2023",
        "Grand Prix Mathieu Kérékou 2023",
      ],
      count: 3,
      icon: FaGlobeAfrica,
      titleKey: "Leadership Africain",
    },
  ];

  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        {/* En-tête de section repensé pour plus de clarté */}
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

        {/* Grille des catégories */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((category, index) => (
            <div
              className="animate-fade-in-up group flex flex-col overflow-hidden rounded-2xl bg-kya-white shadow-md transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
              // --- Animation en cascade ---
              key={category.titleKey}
              style={{
                animationDelay: `${150 * index}ms`,
              }}>
              {/* L'indicateur animé en haut de la carte */}
              <div className="h-1.5 w-0 bg-gradient-to-r from-kya-green to-kya-orange transition-all duration-500 group-hover:w-full" />

              <div className="flex flex-grow flex-col space-y-4 p-8">
                {/* Icône et Titre */}
                <div className="flex size-14 items-center justify-center rounded-full bg-kya-green/10">
                  <category.icon className="text-3xl text-kya-green" />
                </div>
                <h3 className="text-2xl font-bold text-kya-coffee">
                  {category.titleKey}
                </h3>

                {/* Badge du nombre de prix */}
                <p className="inline-flex w-max items-center gap-2 rounded-full bg-kya-orange/10 px-4 py-1.5 text-sm font-bold text-kya-orange">
                  <FaTrophy />
                  <span>{category.count} Prix</span>
                </p>

                {/* Liste des prix */}
                <ul className="flex-grow space-y-3 border-t border-gray-100 pt-6">
                  {category.awards.map((award) => (
                    <li
                      className="flex items-start gap-3"
                      key={award}>
                      <FaCheckCircle className="mt-1 flex-shrink-0 text-kya-green" />
                      <span className="text-black/80">{award}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
