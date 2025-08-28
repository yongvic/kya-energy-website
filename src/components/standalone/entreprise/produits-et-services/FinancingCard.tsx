// components/FinancingCard.tsx (nouveau fichier)

import type { ElementType } from "react";

type FinancingCardProps = {
  Icon: ElementType; // Permet de passer un composant icône comme prop
  value: string;
  label: string;
  colors: {
    bg: string; // ex: "bg-kya-orange/20"
    textIcon: string; // ex: "text-kya-orange"
    textValue: string; // ex: "text-kya-orange"
  };
};

export default function FinancingCard({
  Icon,
  value,
  label,
  colors,
}: FinancingCardProps) {
  return (
    // Anciennement .financing_card
    <div className="flex flex-1 flex-col items-center justify-center rounded-2xl bg-kya-white p-8 text-center shadow-lg">
      {/* Anciennement .iconWrapper */}
      <div
        className={`mb-4 flex size-16 items-center justify-center rounded-full ${colors.bg}`}>
        <Icon className={`text-3xl ${colors.textIcon}`} />
      </div>
      {/* Anciennement .financing_card_value */}
      <div className={`text-6xl font-extrabold ${colors.textValue}`}>
        {value}
      </div>
      {/* Anciennement .financing_card_label */}
      <div className="mt-1 text-lg font-semibold text-kya-coffee/80">
        {label}
      </div>
    </div>
  );
}
