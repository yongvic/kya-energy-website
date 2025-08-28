"use client";
import { useTranslations } from "next-intl";
import { FiClock } from "react-icons/fi";
import { LuInbox } from "react-icons/lu";
import { RiCoinsLine } from "react-icons/ri";
import FinancingCard from "./FinancingCard";

export default function Financement() {
  const t = useTranslations("produits et services.financement");

  const financingData = [
    {
      colors: {
        bg: "bg-kya-orange/20",
        textIcon: "text-kya-orange",
        textValue: "text-kya-orange",
      },
      Icon: RiCoinsLine,
      label: t("apport initial"),
      value: "15%",
    },
    {
      colors: {
        bg: "bg-kya-green/20",
        textIcon: "text-kya-green",
        textValue: "text-kya-green",
      },
      Icon: FiClock,
      label: t("remboursement"),
      value: "10 ans",
    },
    {
      colors: {
        bg: "bg-blue-500/20", // On garde le bleu pour le 100%
        textIcon: "text-blue-500",
        textValue: "text-blue-500",
      },
      Icon: LuInbox,
      label: t("maintenance incluse"),
      value: "100%",
    },
  ];

  return (
    <section className="px-4 py-16 sm:px-6 lg:px-8">
      {/* Titre et sous-titre de la section */}
      <div className="mb-12 text-center">
        <h2 className="relative mb-8 text-4xl font-bold text-kya-coffee">
          {t("titre")}
          <span className="absolute -bottom-3 left-1/2 h-1 w-20 -translate-x-1/2 rounded-full bg-kya-green" />
        </h2>
        <p className="mx-auto max-w-2xl text-lg text-kya-coffee/70">
          {t("description")}
        </p>
      </div>

      {/* 
        Anciennement .financing_grid
        - flex-wrap pour que les cartes passent à la ligne sur mobile
        - md:flex-nowrap pour les garder sur une seule ligne sur les écrans plus grands
      */}
      <div className="mx-auto flex max-w-6xl flex-wrap justify-center gap-8 md:flex-nowrap">
        {financingData.map((card) => (
          <FinancingCard
            colors={card.colors}
            Icon={card.Icon}
            key={card.label}
            label={card.label}
            value={card.value}
          />
        ))}
      </div>
    </section>
  );
}
