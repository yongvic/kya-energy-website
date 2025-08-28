"use client";
import Link from "next/link";
import { useTranslations } from "next-intl";

export default function Confiance() {
  const t = useTranslations("certification iso 9001.confiance");

  return (
    <section className="bg-kya-green py-20 text-white sm:py-24">
      <div className="mx-auto flex max-w-4xl flex-col items-center gap-4 px-8 text-center">
        {/*
          Titre principal du CTA.
          Responsive: text-3xl sur mobile, text-4xl sur les écrans plus grands.
        */}
        <h2 className="text-3xl font-bold sm:text-4xl">{t("titre")}</h2>

        {/*
          Sous-titre.
          text-white/90 adoucit légèrement la couleur pour une meilleure hiérarchie.
          max-w-2xl pour que les lignes ne soient pas trop longues sur grand écran.
        */}
        <p className="max-w-2xl text-lg text-white/90">{t("sous titre")}</p>

        {/* 
          LE BOUTON D'ACTION - la partie la plus importante !
          - bg-accent (orange) pour un contraste maximal.
          - text-foreground (café) pour une excellente lisibilité sur l'orange.
          - rounded-full pour un look moderne et amical.
          - hover:scale-105 pour une micro-interaction satisfaisante.
        */}
        <Link
          className="mt-6 inline-block rounded-full bg-kya-orange px-8 py-3 font-bold text-foreground shadow-lg transition-transform duration-300 hover:scale-105" // Mettez le lien approprié ici
          href="/contact">
          {t("bouton")}
        </Link>
      </div>
    </section>
  );
}
