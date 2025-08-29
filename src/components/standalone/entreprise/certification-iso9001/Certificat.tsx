"use client";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { FaAward } from "react-icons/fa";

export default function Certificat() {
  const t = useTranslations("certification iso 9001.certificat");

  return (
    <section className="mx-auto max-w-7xl px-8 py-24">
      {/* Anciennement .details-intro */}
      <div className="mb-20 text-center">
        {/* J'ai inversé le titre et le sous-titre pour un design plus moderne (kicker text) */}
        <p className="text-lg font-semibold text-accent">{t("sous titre")}</p>
        <h3 className="mt-2 text-3xl font-bold text-primary sm:text-4xl lg:text-5xl text-kya-coffee">
          {t("titre")}
        </h3>
      </div>

      {/* 
        Anciennement .details-content
        - 'grid-cols-1 md:grid-cols-2' gère le layout responsive.
        - 'items-center' aligne verticalement l'image et le texte.
        - 'gap-12 lg:gap-20' crée un espacement généreux.
      */}
      <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2 lg:gap-20">
        {/* Anciennement .certification-frame */}
        <div className="rounded-2xl bg-gradient-to-br from-kya-green to-green-700 p-4 text-white shadow-2xl transition-transform duration-300 hover:-translate-y-2">
          {/* Anciennement .certification-frame-header */}
          <div className="mb-4 flex items-center justify-center gap-3 border-b border-white/30 pb-3 text-xl font-semibold">
            <FaAward />
            <span>{t("titre certificat")}</span>
          </div>
          {/* Anciennement .image-container */}
          <div className="overflow-hidden rounded-lg">
            <Image
              alt={t("titre certificat")}
              className="h-full w-full object-cover"
              height={350}
              src="/certification/certif.avif"
              width={500} // Important pour que l'image remplisse le conteneur
            />
          </div>
        </div>

        {/* Anciennement .text-content */}
        <div className="flex flex-col gap-4">
          <p className="text-lg leading-relaxed text-foreground/80">
            {t("annonce.paragraphe 1")}
          </p>
          {/* 
            On applique les classes directement sur la balise <strong>.
            'block' pour qu'il prenne sa propre ligne, 'text-xl' pour le rendre plus grand.
          */}
          <p className="text-lg leading-relaxed text-foreground/80">
            <strong className="block text-xl font-bold text-accent">
              {t("annonce.paragraphe 2")}
            </strong>
          </p>
          <p className="text-lg leading-relaxed text-foreground/80">
            {t("annonce.paragraphe 3")}
          </p>
        </div>
      </div>
    </section>
  );
}
