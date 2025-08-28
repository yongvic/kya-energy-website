"use client";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { FaTrophy } from "react-icons/fa";

export default function Introduction() {
  const t = useTranslations("récompenses.introduction");

  return (
    <section>
      <div className="relative h-[80vh] md:h-[90vh]">
        {/* L'image de fond */}
        <div className="absolute inset-0">
          <Image
            alt="Personnes recevant un prix"
            className="object-cover"
            fill
            priority
            src="/awards/group.avif"
          />
        </div>

        {/* L'overlay en dégradé subtil */}
        <div className="absolute inset-0 bg-gradient-to-t from-kya-coffee/80 via-kya-coffee/60 to-transparent" />

        {/* Le conteneur du contenu */}
        <div className="relative z-10 flex h-full w-full flex-col items-center justify-center p-4 text-kya-white">
          {/*
            Conteneur pour l'animation. On met 'opacity-0' pour que les éléments
            soient invisibles avant que l'animation ne démarre.
          */}
          <div className="animate-fade-in-up w-full max-w-4xl text-center opacity-0">
            {/* Badge */}
            <div className="mb-6 flex w-max items-center gap-3 rounded-full border border-kya-orange/50 bg-kya-orange/20 px-6 py-2 text-sm backdrop-blur-sm md:text-base mx-auto">
              <FaTrophy className="text-kya-orange" />
              <p className="font-semibold">{t("excellence")}</p>
            </div>

            {/* Titre */}
            <h1 className="text-center text-4xl font-extrabold leading-tight tracking-tighter md:text-6xl lg:text-7xl">
              {t("nos prix")} <span className="text-kya-green">{t("et")}</span>{" "}
              <span className="bg-gradient-to-r from-kya-orange to-kya-yellow bg-clip-text text-transparent">
                {t("distinctions")}
              </span>
            </h1>

            {/* Sous-titre */}
            <p className="mt-6 max-w-2xl mx-auto text-lg text-kya-white/80 md:text-xl">
              {t("reconnaissance")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
