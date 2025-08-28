"use client";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { FaDownload, FaPlay, FaRocket } from "react-icons/fa";

export default function Rejoindre() {
  const t = useTranslations("récompenses.rejoindre");

  return (
    <section className="relative overflow-hidden tech-pattern-bg py-24 sm:py-32 min-h-[70vh] flex items-center">
      <div className="container mx-auto px-4">
        {/*
          On applique l'animation au conteneur principal du contenu.
          Tout le bloc apparaîtra en fondu vers le haut.
        */}
        <div className="animate-fade-in-up mx-auto max-w-3xl text-center">
          {/* Icône améliorée avec effet de halo */}
          <div className="mb-8 flex justify-center">
            <div className="relative rounded-full bg-kya-green p-5 text-2xl text-kya-white shadow-lg">
              <FaRocket />
              <span className="absolute inset-0 animate-ping rounded-full bg-kya-green/50" />
            </div>
          </div>

          {/* Titre */}
          <h2 className="text-4xl font-extrabold tracking-tight text-kya-coffee sm:text-5xl">
            {t("titre")}
          </h2>

          {/* Sous-titre */}
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-kya-coffee/70">
            {t("sous titre")}
          </p>

          {/* Boutons d'action */}
          <div className="mt-12 flex flex-wrap items-center justify-center gap-4 font-bold md:gap-6">
            <Link
              className="group flex items-center justify-center gap-3 rounded-full bg-kya-orange px-8 py-4 text-base text-kya-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              href="mailto:marketing@kya-energy.com">
              <FaPlay className="transition-transform duration-300 group-hover:scale-125" />
              <span>{t("démarrer un projet")}</span>
            </Link>

            <Link
              className="group flex items-center justify-center gap-3 rounded-full border-2 border-kya-coffee/20 bg-kya-white px-8 py-4 text-base text-kya-coffee shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-kya-coffee/40 hover:shadow-xl"
              href="https://www.linkedin.com/company/kya-energy"
              target="_blank">
              <FaDownload className="transition-transform duration-300 group-hover:rotate-[360deg]" />
              <span>{t("visualiser notre portfolio")}</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
