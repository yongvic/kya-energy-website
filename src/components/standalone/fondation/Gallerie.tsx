"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { useRef } from "react";
// Icônes
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { strapiUrl } from "@/data/strapi";

// --- Données pour l'exemple (ajoutez plus d'images pour un meilleur effet) ---

export default function GalleryCarousel() {
  const t = useTranslations("fondation.gallerie");
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const evenements = [
    {
      date: "2024",
      lieu: "Lomé, Togo",
      photo: `${strapiUrl}/uploads/3191ca_4d56fc6a114044bc8a3502f342b95655_mv2_bb9a0fa8b9.jpg`,
      titre: t("soirée caritative"),
    },
    {
      date: "2024",
      lieu: "Lomé, Togo",
      photo: `${strapiUrl}/uploads/3191ca_479993ae30644a3495b6f30383473335_mv2_922b4659be.jpg`,
      titre: t("formation des jeunes filles"),
    },
    {
      date: "2022",
      lieu: "Lomé, Togo",
      photo: `${strapiUrl}/uploads/3191ca_7d14cf90b4714f0fa25a58f067c4d02c_mv2_968033e7cf.jpg`,
      titre: t("remise des bourses par la fondation"),
    },
    {
      date: "Mai 2024",
      lieu: "Lomé, Togo",
      photo: `${strapiUrl}/uploads/background_actu_e4811e9b1b.png`,
      titre: t("lancement de la fondation"),
    },
  ];

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = scrollContainerRef.current.clientWidth * 0.8; // Défile de 80% de la largeur visible
      scrollContainerRef.current.scrollBy({
        behavior: "smooth",
        left: direction === "left" ? -scrollAmount : scrollAmount,
      });
    }
  };

  return (
    <section className="bg-slate-50 py-24 sm:py-32">
      <div className="container mx-auto px-4">
        {/* En-tête de section */}
        <div className="animate-fade-in-up mb-16 max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-extrabold tracking-tight text-kya-coffee sm:text-5xl">
            {t("titre")}
          </h2>
          <p className="mt-6 text-lg leading-8 text-slate-600">
            {t("description")}
          </p>
        </div>

        {/* --- Le Carrousel Spectaculaire (CSS Pur) --- */}
        <div className="relative">
          {/* Conteneur principal qui cache la scrollbar */}
          <div
            className="flex snap-x snap-mandatory scroll-smooth overflow-x-auto py-8 [perspective:1000px]"
            // La magie du carrousel horizontal :
            // - flex overflow-x-auto : active le scroll horizontal
            // - snap-x snap-mandatory : centre les éléments au scroll
            // - scroll-smooth : pour un défilement doux
            // - scrollbar-hide : une classe utilitaire pour cacher la scrollbar (à définir dans globals.css si besoin)
            ref={scrollContainerRef}>
            {evenements.map((event) => (
              <div
                className={`${evenements.length > 1 ? "w-4/5 flex-shrink-0 snap-center px-4 md:w-3/5" : "w-4/5 flex-shrink-0 snap-center px-4 md:w-3/5 mx-auto"}`}
                // Chaque slide prend 80% de la largeur, avec un espacement.
                key={event.titre}>
                <article className="group relative aspect-[4/3] w-full overflow-hidden rounded-2xl shadow-lg [transform-style:preserve-3d]">
                  <Image
                    alt={event.titre}
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    fill
                    sizes="(max-width: 768px) 80vw, 60vw"
                    src={event.photo}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  <div className="absolute bottom-0 left-0 p-6 text-kya-white [transform:translateZ(40px)]">
                    <h3 className="text-2xl font-bold">{event.titre}</h3>
                    <p className="mt-1 text-kya-white/80">
                      {event.date} - {event.lieu}
                    </p>
                  </div>
                </article>
              </div>
            ))}
          </div>

          {/* Boutons de navigation */}
          <button
            aria-label="Précédent"
            className="group absolute left-0 top-1/2 z-10 -translate-y-1/2 flex size-12 cursor-pointer items-center justify-center rounded-full bg-kya-white/80 shadow-lg transition-all hover:bg-kya-green hover:scale-105"
            onClick={() => scroll("left")}
            type="button">
            <FaChevronLeft className="text-kya-green transition-colors group-hover:text-kya-white" />
          </button>
          <button
            aria-label="Suivant"
            className="group absolute right-0 top-1/2 z-10 -translate-y-1/2 flex size-12 cursor-pointer items-center justify-center rounded-full bg-kya-white/80 shadow-lg transition-all hover:bg-kya-green hover:scale-105"
            onClick={() => scroll("right")}
            type="button">
            <FaChevronRight className="text-kya-green transition-colors group-hover:text-kya-white" />
          </button>
        </div>
      </div>
    </section>
  );
}
