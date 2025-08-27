"use client";
import { stagger, useAnimate, useInView } from "framer-motion";
import { useTranslations } from "next-intl";
import { useEffect } from "react";
import {
  FaLightbulb,
  FaLeaf,
  FaHandshake,
  FaGlobeAfrica,
} from "react-icons/fa";

export default function DomainesDExcellence() {
  const [domainesScope, animateDomaines] = useAnimate();
  const isDomainesInView = useInView(domainesScope, {
    once: true,
    amount: 0.1,
  });
  useEffect(() => {
    if (isDomainesInView)
      animateDomaines([
        [
          ".section-title",
          {
            opacity: [
              0,
              1,
            ],
            y: [
              20,
              0,
            ],
          },
          {
            duration: 0.6,
          },
        ],
        [
          ".category-card",
          {
            opacity: [
              0,
              1,
            ],
            y: [
              30,
              0,
            ],
          },
          {
            duration: 0.5,
            delay: stagger(0.1),
            at: "-0.2",
          },
        ],
      ]);
  }, [
    isDomainesInView,
    animateDomaines,
  ]);
  const t = useTranslations("récompenses.domaines d'excellence");

  return (
    <section
      ref={domainesScope}
      className="container mx-auto px-4 my-32">
      <div className="section-title opacity-0 px-4 lg:px-48">
        <div className="flex items-center justify-center my-4">
          <p className="w-max rounded-full px-4 py-2 bg-kya-green text-white font-bold text-sm">
            {t("titre")}
          </p>
        </div>
        <h2 className="text-center text-4xl font-bold w-full">
          {t("sous titre")}
        </h2>
        <div className="flex justify-center items-center my-4">
          <div className="h-1 w-32 bg-green-300"></div>
        </div>
        <p className="text-center text-xl">{t("description")}</p>
      </div>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
        {[
          {
            icon: <FaLightbulb />,
            title: "Innovation Technologique",
            count: "4",
            awards: [
              "Prix de l'idée lumineuse 2024",
              "Palme internationale innovation 2022",
              "Prix valorisation recherche 2022",
              "Prix transition énergétique 2020",
            ],
          },
          {
            icon: <FaLeaf />,
            title: "Impact Environnemental",
            count: "3",
            awards: [
              "Mini-centrales propres 2024",
              "Prix PADEV Excellence 2022",
              "Électrification solaire USAID 2019",
            ],
          },
          {
            icon: <FaHandshake />,
            title: "Partenariats & Collaboration",
            count: "2",
            awards: [
              "Meilleur partenaire HITECH 2024",
              "Prix BOAD StartUp 2019",
            ],
          },
          {
            icon: <FaGlobeAfrica />,
            title: "Leadership Africain",
            count: "3",
            awards: [
              "Global entrepreneur awards 2024",
              "Bâtisseurs économie africaine 2023",
              "Grand Prix Mathieu Kérékou 2023",
            ],
          },
        ].map((value, index) => (
          <div
            key={index}
            className="category-card opacity-0 group bg-white rounded-xl overflow-hidden shadow hover:shadow-xl transition-shadow">
            <div className="h-1 bg-kya-green w-0 group-hover:w-full transition-all duration-500"></div>
            <div className="space-y-4 p-8">
              <div className="text-3xl p-4 rounded-full bg-kya-green w-max text-white">
                {value.icon}
              </div>
              <h3 className="font-bold text-2xl">{value.title}</h3>
              <p className="text-sm px-4 py-1.5 rounded-full bg-orange-200 w-max text-kya-orange font-bold">
                {value.count} Prix
              </p>
              <ul className="list-disc text-kya-green pl-5 space-y-2 pt-2">
                {value.awards.map((_value, _index) => (
                  <li key={_index}>
                    <span className="text-gray-700">{_value}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
