"use client";

import { strapiUrl } from "@/data/strapi";
import { marked } from "marked";

interface YoutubeVideo {
  titre: string;
  texteDescriptif: string;
  lienDeLaVideo: string;
  pointsCles: string[];
}

async function getYoutubeVideo(locale: string) {
  const requete = await fetch(
    `${strapiUrl}/api/youtube-video?locale=${locale}`,
  );
  const response = await requete.json();
  // TODO: parse all contents from texte_descriptif
  const result: YoutubeVideo = {
    lienDeLaVideo: response.data.lien_de_la_video_youtube,
    pointsCles: [
      response.data.point_cle_1,
      response.data.point_cle_2,
      response.data.point_cle_3,
    ],
    texteDescriptif: response.data.texte_descriptif,
    titre: response.data.titre,
  };
  return result;
}

import { useTranslations } from "next-intl";
import Image from "next/image";
import { useState } from "react";
// Icônes
import { FaCheck, FaPlay } from "react-icons/fa";

// --- Données pour l'exemple ---
const youtubeVideo = await getYoutubeVideo("fr");

export default function FeaturedVideo() {
  const t = useTranslations("page d'acceuil.youtube");
  const [isPlayerActive, setIsPlayerActive] = useState(false);

  // On construit l'URL de l'embed. `autoplay=1` est important pour un démarrage instantané au clic.
  const videoSrc = `https://www.youtube.com/embed/${youtubeVideo.lienDeLaVideo}?autoplay=1&rel=0`;
  const thumbnailSrc = `https://img.youtube.com/vi/${youtubeVideo.lienDeLaVideo}/maxresdefault.jpg`;

  return (
    <section className="bg-white py-24 sm:py-32">
      <div className="container mx-auto px-4">
        {/* En-tête de section */}
        <div className="animate-fade-in-up mb-16 max-w-3xl">
          <h2 className="text-4xl font-extrabold tracking-tight text-kya-coffee sm:text-5xl">
            {t("titre")}
          </h2>
          <p className="mt-6 text-lg leading-8 text-slate-600">
            {t("description")}
          </p>
        </div>

        {/* Grille asymétrique */}
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-5 lg:gap-16">
          {/* --- Colonne Contenu (2/5) --- */}
          <div
            className="animate-fade-in-up lg:col-span-2"
            style={{
              animationDelay: "150ms",
            }}>
            <div
              className="prose prose-lg max-w-none text-slate-600 liens-colores"
              dangerouslySetInnerHTML={{
                __html: marked(
                  youtubeVideo.texteDescriptif ?? t("texte descriptif"),
                ),
              }}
            />
            {/* Liste des points clés */}
            <ul className="mt-8 space-y-4 border-t border-slate-200 pt-8">
              {youtubeVideo.pointsCles.map((point) => (
                <li
                  className="flex items-start gap-3"
                  key={point}>
                  <FaCheck className="mt-1.5 flex-shrink-0 text-kya-green" />
                  <span className="text-slate-700">{point}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* --- Colonne Vidéo (3/5) --- */}
          <div
            className="animate-fade-in-up lg:col-span-3"
            style={{
              animationDelay: "300ms",
            }}>
            {/* Conteneur avec ratio 16:9 */}
            <div className="relative aspect-video w-full">
              {/* Le "Facade" : Miniature + Bouton Play */}
              {!isPlayerActive && (
                <div
                  className="group absolute inset-0 cursor-pointer"
                  onClick={() => setIsPlayerActive(true)}>
                  <Image
                    alt={t("description de la vidéo")}
                    className="rounded-xl object-cover"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    src={thumbnailSrc}
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/20 transition-colors group-hover:bg-black/30">
                    <div className="flex size-20 items-center justify-center rounded-full bg-kya-white/80 text-kya-coffee shadow-2xl backdrop-blur-sm transition-transform group-hover:scale-110">
                      <FaPlay className="ml-1 text-2xl" />
                    </div>
                  </div>
                </div>
              )}

              {/* L'iframe qui s'affiche au clic */}
              {isPlayerActive && (
                <iframe
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen={true}
                  className="absolute inset-0 h-full w-full rounded-xl"
                  src={videoSrc}
                  title={t("description de la vidéo")}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
