"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";
import { FaAward } from "react-icons/fa";
import { strapiUrl } from "@/data/strapi";

interface Award {
  titre: string;
  description: string;
  photo: string;
  date: string;
}

async function fetchAwards() {
  const request = await fetch(`${strapiUrl}/api/recompenses?populate=*`);
  const response = await request.json();
  const returnData = response.data.map(
    (data: {
      titre: string;
      description: string;
      date: string;
      photo: {
        url: string;
      };
    }) => ({
      date: data.date,
      description: data.description,
      photo: `${strapiUrl}${data.photo.url}`,
      titre: data.titre,
    }),
  );
  return returnData;
}

export default function PrixEtDistinctions() {
  const t = useTranslations("récompenses.prix et distinctions");
  const [awards, setAwards] = useState<Award[]>([]);
  useEffect(() => {
    fetchAwards().then((data) => {
      setAwards(data);
    });
  });

  return (
    <section>
      {/* 
        En-tête de la section. Un fond subtil en dégradé,
        un padding généreux et un titre impactant.
      */}
      <div className="bg-gradient-to-b from-kya-white to-gray-50/50 py-20 text-center">
        <h2 className="text-4xl font-extrabold text-kya-coffee md:text-5xl">
          {t("titre")}
        </h2>
        <div className="mx-auto mt-4 h-1.5 w-24 rounded-full bg-gradient-to-r from-kya-green to-kya-orange" />
        <p className="mx-auto mt-6 max-w-2xl text-lg text-kya-coffee/70">
          {t("description")}{" "}
          {/* J'ajoute une description pour plus de contexte */}
        </p>
      </div>

      {/* 
        Conteneur de la grille. Le 'my-32' a été remplacé par un 'py-24' sur la section 
        et '-mt-16' ici pour que la grille chevauche légèrement l'en-tête, un effet visuel moderne.
      */}
      <div className="mx-auto max-w-7xl -mt-16 px-4">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {awards.map((award, index) => (
            <article
              className="animate-fade-in-up group relative flex flex-col rounded-2xl border border-gray-200/80 bg-kya-white shadow-sm transition-all duration-300 hover:border-kya-green hover:shadow-2xl hover:!opacity-100"
              // --- Animation en cascade avec CSS ---
              // On applique l'animation et un délai différent pour chaque carte.
              // 'style' est utilisé ici car les délais sont dynamiques.
              key={award.titre}
              style={{
                animationDelay: `${index * 150}ms`,
              }}>
              {/* Le logo de la récompense */}
              <div className="relative flex h-48 items-center justify-center overflow-hidden rounded-t-2xl bg-gray-50 p-6">
                <Image
                  alt={`Logo for ${award.titre}`}
                  className="object-contain transition-transform duration-500 ease-out group-hover:scale-110"
                  fill
                  src={`/awards/${award.photo}`}
                />
              </div>

              {/* Le contenu de la carte */}
              <div className="flex flex-grow flex-col p-6">
                <h3 className="text-lg font-bold text-kya-coffee">
                  {award.titre}
                </h3>
                <p className="mt-2 flex-grow text-sm text-kya-coffee/70">
                  {award.description}
                </p>
              </div>

              {/* 
                Le badge de l'année. Positionné en bas à droite pour un look plus propre.
                Il utilise la couleur accent pour attirer l'oeil.
              */}
              <div className="mt-auto border-t border-gray-100 p-4 text-right">
                <p className="inline-block rounded-full bg-kya-orange px-3 py-1 text-xs font-bold text-kya-white">
                  {new Date(award.date).getFullYear()}
                </p>
              </div>

              {/* 
                Icône de trophée décorative dans le coin, visible au survol.
                C'est un petit détail qui ajoute du raffinement.
              */}
              <div className="absolute -right-3 -top-3 flex size-8 items-center justify-center rounded-full bg-kya-green text-kya-white opacity-0 shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:opacity-100">
                <FaAward />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
