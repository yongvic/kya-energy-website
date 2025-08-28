"use client";
import Image from "next/image";
import { useTranslations } from "next-intl";

type TextBlockProps = {
  title: string;
  subtitle: string;
  text: string;
};

function TextBlock({ title, subtitle, text }: TextBlockProps) {
  return (
    <div className="flex flex-col">
      <strong className="block text-2xl font-bold text-primary">{title}</strong>
      <p className="mt-2 text-lg font-semibold text-foreground">{subtitle}</p>
      <p className="mt-4 leading-relaxed text-foreground/80">{text}</p>
    </div>
  );
}

export default function Engagement() {
  const t = useTranslations("certification iso 9001.engagement");

  return (
    <section className="bg-secondary py-24">
      {/*
        Anciennement .commitment-content
        - La grille est mobile-first: 1 colonne par défaut.
        - Sur les grands écrans (lg), elle passe à 3 colonnes.
        - 'items-start' aligne les éléments en haut de leur cellule, ce qui est mieux
          si les blocs de texte ont des hauteurs différentes.
      */}
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-start gap-12 px-8 lg:grid-cols-3">
        {/* Premier bloc de texte */}
        <TextBlock
          subtitle={t("engagement.sous titre")}
          text={t("engagement.texte")}
          title={t("engagement.titre")}
        />

        {/* Image au milieu sur les grands écrans */}
        <div className="my-auto">
          {" "}
          {/* 'my-auto' pour centrer verticalement l'image si elle est plus petite */}
          <Image
            alt={t("engagement.titre")}
            className="h-auto w-full rounded-xl shadow-xl"
            height={400}
            src="/certification/engagement-qualite.png"
            // L'image sera responsive, arrondie et avec une ombre subtile.
            width={600}
          />
        </div>

        {/* Deuxième bloc de texte */}
        <TextBlock
          subtitle={t("remerciements.sous titre")}
          text={t("remerciements.texte")}
          title={t("remerciements.titre")}
        />
      </div>
    </section>
  );
}
