"use client";

import { useState, useRef } from "react";
import { useTranslations } from "next-intl";
import { FaPlay, FaPause, FaCheck } from "react-icons/fa";

// --- Données pour l'exemple ---
const keyTakeaways = [
  "Notre engagement envers l'éducation des jeunes filles en Afrique.",
  "Comment nous utilisons l'énergie solaire pour transformer les communautés.",
  "Les témoignages poignants de ceux que nous avons aidés.",
];

export default function VideoShowcase() {
  const t = useTranslations("fondation.presentation video");
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleVideoEnd = () => {
    setIsPlaying(false); // Fait réapparaître le bouton Play à la fin
  };

  return (
    <section className="bg-slate-50 py-24 sm:py-32">
      <div className="container mx-auto px-4">
        {/* 1. En-tête de la section */}
        <div className="animate-fade-in-up mb-16 max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-extrabold tracking-tight text-kya-coffee sm:text-5xl">
            {t("titre")}
          </h2>
          <p className="mt-6 text-lg leading-8 text-slate-600">
            {t("description")}
          </p>
        </div>

        {/* 2. Conteneur du lecteur vidéo */}
        <div
          className="animate-fade-in-up mx-auto max-w-5xl"
          style={{
            animationDelay: "150ms",
          }}>
          {/* Le cadre de la vidéo */}
          <div className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 p-2 shadow-sm">
            {/* 
              Le lecteur vidéo. 'controls={false}' pour cacher les contrôles par défaut.
              Le onClick est là pour permettre de mettre en pause en cliquant sur la vidéo.
            */}
            <video
              ref={videoRef}
              className="aspect-video w-full rounded-lg"
              onClick={handlePlayPause}
              onEnded={handleVideoEnd}>
              <source
                src="/kya-foundation/kya-foundation-video-1.mp4"
                type="video/mp4"
              />
            </video>

            {/* Le bouton Play/Pause personnalisé */}
            {!isPlaying && (
              <button
                type="button"
                className="absolute inset-0 flex cursor-pointer items-center justify-center bg-black/10 transition-all duration-300 group-hover:bg-black/20"
                onClick={handlePlayPause}>
                <div className="flex size-20 items-center justify-center rounded-full bg-kya-white/80 text-kya-coffee shadow-2xl backdrop-blur-sm transition-transform duration-300 group-hover:scale-110">
                  <FaPlay className="ml-1 text-2xl" />
                </div>
              </button>
            )}
          </div>

          {/* 3. Points clés de la vidéo */}
          <div className="mt-12">
            <h3 className="text-xl font-bold text-kya-coffee text-center">
              À retenir de cette vidéo :
            </h3>
            <div className="mt-8 grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2 lg:grid-cols-3">
              {keyTakeaways.map((point) => (
                <div
                  key={point}
                  className="flex items-start gap-3">
                  <FaCheck className="mt-1 flex-shrink-0 text-kya-green" />
                  <span className="text-slate-700">{point}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
