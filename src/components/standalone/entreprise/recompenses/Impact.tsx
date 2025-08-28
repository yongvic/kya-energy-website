"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";
import {
  FaCalendarAlt,
  FaGlobeAfrica,
  FaTrophy,
  FaUsers,
} from "react-icons/fa";
import { strapiUrl } from "@/data/strapi";

interface Award {
  titre: string;
  description: string;
  image: string;
  date: string;
}

async function fetchAwards(): Promise<Award[]> {
  const request = await fetch(`${strapiUrl}/api/recompenses?populate=*`);
  const response = await request.json();
  const returnData = response.data.map(
    (data: {
      titre: string;
      description: string;
      date: string;
      image: {
        url: string;
      };
    }) => ({
      date: data.date,
      description: data.description,
      image: `${strapiUrl}${data.image.url}`,
      titre: data.titre,
    }),
  );
  return returnData;
}

export default function Impact() {
  const [length, setLength] = useState(0);
  useEffect(() => {
    fetchAwards().then((data) => {
      setLength(data.length);
    });
  }, []);

  const t = useTranslations("récompenses.impact");

  const stats = [
    {
      descriptionKey: "Reconnaissances nationales et internationales",
      icon: FaTrophy,
      stat: length, // Supposons que 'length' vient des props ou d'un état
      titleKey: "Prix et distinctions",
    },

    {
      descriptionKey: "Depuis 2015, une croissance constante",
      icon: FaCalendarAlt,
      stat: new Date().getFullYear() - 2015,
      titleKey: "Années d'Excellence",
    },
    {
      descriptionKey: "Impact régional en Afrique de l'Ouest",
      icon: FaGlobeAfrica,
      stat: 4,
      titleKey: "Pays Reconnaissants",
    },
    {
      descriptionKey: "Clients et partenaires satisfaits",
      icon: FaUsers,
      stat: "100%",
      titleKey: "Satisfaction",
    },
  ];

  return (
    <section className="relative py-24 sm:py-32">
      {/* Image de fond */}
      <div className="absolute inset-0">
        <Image
          alt="Impact background" // EX: une image d'équipe, de projet...
          className="object-cover"
          fill
          src="/certification/back-certif.avif"
        />
      </div>
      {/* Overlay pour la lisibilité */}
      <div className="absolute inset-0 bg-gradient-to-t from-kya-coffee/90 to-kya-coffee/70" />

      {/* Conteneur principal */}
      <div className="relative container mx-auto px-4">
        {/* En-tête de section, adapté pour le fond sombre */}
        <div className="animate-fade-in-up mb-16 text-center text-kya-white">
          <p className="font-semibold text-kya-green">{t("titre")}</p>
          <h2 className="mt-2 text-4xl font-extrabold sm:text-5xl">
            {t("sous titre")}
          </h2>
          <div className="mx-auto mt-4 h-1.5 w-24 rounded-full bg-gradient-to-r from-kya-green to-kya-orange" />
          <p className="mx-auto mt-6 max-w-2xl text-lg text-kya-white/80">
            {t("description")}
          </p>
        </div>

        {/* Grille des statistiques */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <div
              className="animate-fade-in-up flex flex-col items-center gap-4 rounded-2xl border border-kya-white/10 bg-kya-white/10 p-8 text-center text-kya-white shadow-lg backdrop-blur-lg"
              // --- Animation en cascade ---
              key={stat.titleKey}
              style={{
                animationDelay: `${150 * index}ms`,
              }}>
              {/* Icône */}
              <div className="flex size-16 items-center justify-center rounded-full bg-kya-green text-3xl">
                <stat.icon />
              </div>

              {/* Statistique */}
              <p className="font-extrabold text-6xl text-kya-orange">
                {stat.stat}
              </p>

              {/* Titre */}
              <h3 className="text-xl font-bold">{stat.titleKey}</h3>

              {/* Description */}
              <p className="text-kya-white/70">{stat.descriptionKey}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
