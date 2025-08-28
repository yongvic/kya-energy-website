"use client";
import { useTranslations } from "next-intl";
import { useState } from "react";
import { FaPlayCircle } from "react-icons/fa";
import Image from "next/image";

export default function Temoignages() {
  const t = useTranslations("detail produits.temoignages");
  const videos = [
    "KYA-SoP KYA-Energy GROUP-01",
    "KYA-SoP KYA-Energy GROUP-02",
    "KYA-SoP KYA-Energy GROUP-03",
    "KYA-SoP KYA-Energy GROUP-04",
    "KYA-SoP KYA-Energy GROUP-05",
    "KYA-SoP KYA-Energy GROUP-06",
    "KYA-SoP KYA-Energy GROUP-07",
    "KYA-SoP KYA-Energy GROUP-08",
    "KYA-SoP KYA-Energy GROUP",
  ];
  const [selectedVideo, setSelectedVideo] = useState(videos[0]);

  return (
    <section className="mb-16">
      {/* Titre de la section (réutilisation du style) */}
      <div className="mb-12 text-center">
        <h3 className="text-4xl font-bold text-kya-coffee">{t("titre")}</h3>
        <div className="mx-auto mt-2 h-1 w-24 rounded-full bg-kya-green" />
      </div>

      {/* Anciennement .videoPlayerContainer */}
      <div className="mx-auto max-w-5xl rounded-xl bg-kya-white p-4 shadow-2xl sm:p-6">
        {/*
          Anciennement .mainVideoWrapper
          On utilise le "padding-bottom hack" pour conserver le ratio 16:9.
          pb-[56.25%] est la syntaxe de Tailwind pour une valeur arbitraire.
        */}
        <div className="relative mb-6 w-full overflow-hidden rounded-lg bg-black pb-[56.25%] shadow-inner">
          {/** biome-ignore lint/a11y/useMediaCaption: Unavailable */}
          <video
            autoPlay // La 'key' force le re-montage du composant, ce qui relance la vidéo
            className="absolute left-0 top-0 h-full w-full"
            controls
            key={selectedVideo}
            src={`/products/temoignage/${selectedVideo}.mp4`}>
            {t("erreur video")}
          </video>
        </div>

        {/* Anciennement .thumbnailCarousel */}
        <div className="relative">
          {/*
            Anciennement .thumbnailList
            NOTE: Pour le style de la scrollbar, le plugin `tailwindcss-scrollbar` est recommandé.
            `npm install -D tailwindcss-scrollbar` et ajoutez-le à votre `tailwind.config.js`.
          */}
          <div className="flex gap-4 overflow-x-auto pb-3 scrollbar-thin scrollbar-track-kya-green scrollbar-thumb-kya-green">
            {videos.map((video) => (
              // biome-ignore lint/a11y/useKeyWithClickEvents: Already handy
              // biome-ignore lint/a11y/noStaticElementInteractions: Needed here
              <div
                className={`group relative h-28 w-48 flex-shrink-0 cursor-pointer overflow-hidden rounded-lg border-2 ring-offset-2 ring-offset-kya-white transition-all duration-300
                  ${selectedVideo === video ? "ring-4 ring-kya-orange" : "border-transparent"}`}
                key={video}
                // 'group' est la clé pour les animations de survol sur les enfants
                onClick={() => setSelectedVideo(video)}>
                {/* Anciennement .thumbnailOverlay */}
                <div className="absolute inset-0 z-10 bg-black/40 transition-colors duration-300 group-hover:bg-black/20" />

                {/* Anciennement .thumbnailPlayIcon */}
                <FaPlayCircle className="absolute left-1/2 top-1/2 z-20 -translate-x-1/2 -translate-y-1/2 text-4xl text-kya-white opacity-70 transition-opacity duration-300 group-hover:opacity-100" />

                <Image
                  alt={`Miniature pour ${video}`}
                  className="object-cover"
                  fill
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.onerror = null;
                    target.src = "/products/kya-sop.png";
                  }}
                  // Le fallback onError reste une excellente pratique
                  src={`/products/temoignage/${video}.png`}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
