"use client";

import TranslationsType from "@/translations/translations.definition";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { LuArrowLeft, LuArrowRight } from "react-icons/lu";

export default function Promotions({
  t
}: {
  t: TranslationsType
}) {

  type Promo = {
    image: string;
    title: string;
    link: string;
  };

  const promotions: Promo[] = [
    {
      image: "/products/pub.png",
      title: "Special Offer on KYA-SoP Systems",
      link: "/detail-products"
    },
    {
      image: "/products/kya-sop.png",
      title: "Discover our KYA-SoP",
      link: "/detail-products"
    },
    {
      image: "/products/kya-sol-design.png",
      title: "Free Solar Design Consultation",
      link: "https://kya-energy-market.com"
    },
  ];

  const [currentPromo, setCurrentPromo] = useState<number>(0);

  function nextPromo() {
    const next = currentPromo + 1;
    setCurrentPromo(next < promotions.length ? next : 0);
  }

  function previousPromo() {
    const previous = currentPromo - 1;
    setCurrentPromo(previous >= 0 ? previous : promotions.length - 1);
  }

  useEffect(() => {
    const timeout = setTimeout(nextPromo, 5000);

    return () => {
      clearTimeout(timeout);
    }
  });

  return (
    <>
      <div className="mt-4 container mx-auto px-4 flex items-center justify-center w-full *:transition-colors duration-300">
        <button className="bg-kya-white text-kya-green hover:bg-kya-green hover:text-kya-white text-2xl p-4 rounded-full" onClick={previousPromo}><LuArrowLeft /></button>
        <div className="w-full p-4 h-96 flex items-center justify-center overflow-hidden">
          <Image width="1200" height="400" alt={promotions[currentPromo].title} src={promotions[currentPromo].image} className="w-full h-full object-contain transition-all duration-300" />
        </div>
        <button className="bg-kya-white text-kya-green hover:bg-kya-green hover:text-kya-white text-2xl p-4 rounded-full" onClick={nextPromo}><LuArrowRight /></button>
      </div>
      <p className="flex items-center justify-center">
        <Link className="w-max px-8 py-4 bg-kya-green text-white hover:bg-kya-orange transition-colors duration-300 font-bold rounded" href={promotions[currentPromo].link} target={promotions[currentPromo].link.startsWith("https://") ? "_blank" : ""}>{t.services["learn-more"]}</Link>
      </p>
    </>
  );
}
