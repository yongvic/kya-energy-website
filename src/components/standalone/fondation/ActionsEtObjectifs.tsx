import { useTranslations } from "next-intl";
import { FaCheckCircle } from "react-icons/fa";
import { FaRocket } from "react-icons/fa6";
import { FiTarget } from "react-icons/fi";

export default function ActionsEtObjectifs() {
  const t = useTranslations("fondation.actions et objectifs");
  const actions = [
    "L'octroi de bourses et subventions de formation",
    "L'organisation des concours d'innovation",
    "L'organisation des cours de formation, conférences, seminaires",
    "L'appui aux entrepreneurs",
    "Le soutien à l'autonomisation des femmes et des jeunes filles",
    "L'appui à l'insertion socio-professionnelle des jeunes diplômés",
  ];

  const objectifs = [
    "Accroître l'accès aux services énergétiques durables en milieu rural",
    "Promouvoir la science et la technologie chez les femmes",
    "Promouvoir l'employabilité des jeunes en énergies renouvelables",
    "Contribuer à l'amélioration de la qualité de l'éducation",
    "Contribuer à l'autonomisation économique des femmes",
    "Contribuer à la lutte contre les changements climatiques",
  ];

  return (
    <section className="bg-white py-24 sm:py-32">
      <div className="container mx-auto px-4">
        {/* 1. En-tête de la section */}
        <div className="animate-fade-in-up mb-16 text-center">
          <h2 className="text-4xl font-extrabold text-kya-coffee sm:text-5xl">
            {t("titre")}
          </h2>
          <div className="mx-auto mt-4 h-1.5 w-24 rounded-full bg-gradient-to-r from-kya-green to-kya-orange" />
          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-600">
            {t("description")}
          </p>
        </div>

        {/* 2. Grille des deux cartes */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          {/* --- CARTE ACTIONS (Thème Clair) --- */}
          <div
            className="animate-fade-in-up rounded-2xl border border-slate-200 bg-slate-50 p-8 shadow-sm"
            style={{
              animationDelay: "150ms",
            }}>
            {/* Header de la carte */}
            <div className="mb-8 flex items-center gap-4">
              <div className="flex size-14 items-center justify-center rounded-full bg-kya-green/10">
                <FaRocket className="text-3xl text-kya-green" />
              </div>
              <h3 className="text-3xl font-bold text-kya-coffee">
                {t("actions.titre")}
              </h3>
            </div>
            {/* Liste des actions */}
            <ul className="space-y-4">
              {actions.map((item) => (
                <li
                  className="flex items-start gap-3"
                  key={item}>
                  <FaCheckCircle className="mt-1 flex-shrink-0 text-kya-green" />
                  <span className="text-slate-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* --- CARTE OBJECTIFS (Thème Sombre / Marque) --- */}
          <div
            className="animate-fade-in-up rounded-2xl bg-kya-coffee p-8 text-kya-white shadow-xl"
            style={{
              animationDelay: "300ms",
            }}>
            {/* Header de la carte */}
            <div className="mb-8 flex items-center gap-4">
              <div className="flex size-14 items-center justify-center rounded-full bg-kya-orange/20">
                <FiTarget className="text-3xl text-kya-orange" />
              </div>
              <h3 className="text-3xl font-bold text-kya-white">
                {t("objectifs.titre")}
              </h3>
            </div>
            {/* Liste des objectifs */}
            <ul className="space-y-4">
              {objectifs.map((item) => (
                <li
                  className="flex items-start gap-3"
                  key={item}>
                  <FaCheckCircle className="mt-1 flex-shrink-0 text-kya-orange" />
                  <span className="text-kya-white/80">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
