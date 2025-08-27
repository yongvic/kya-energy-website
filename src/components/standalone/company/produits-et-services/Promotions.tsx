"use client";

import { strapiUrl } from "@/lib/config";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { LuArrowLeft, LuArrowRight } from "react-icons/lu";

export default function Promotions() {
  const t = useTranslations("produits et services");
  type Promo = {
    image?: string;
    title: string;
    link: string;
  };

  const [promotions, setPromotions] = useState<Promo[]>([
    {
      image: "/products/pub.png",
      title: "Special Offer on KYA-SoP Systems",
      link: "/detail-products",
    },
  ]);

  useEffect(() => {
    async function fetchPromotions() {
      const request = await fetch(`${strapiUrl}/api/promotions?populate=*`);

      if (!request.ok) {
        console.log("Error while fetching promotions data");
      }

      const response = await request.json();
      // If there is no promotions, display the default array
      // contents instead
      if (response.data && response.data.length > 0) {
        // Clear promotions before proceed
        setPromotions([]);
        response.data.forEach(
          (promotion: {
            titre: string;
            lien_de_redirection: string;
            image?: {
              url: string;
            };
          }) => {
            setPromotions([
              ...promotions,
              {
                title: promotion.titre,
                link: promotion.lien_de_redirection,
                image: `${strapiUrl}${promotion.image?.url}`,
              },
            ]);
          },
        );
      }
    }

    fetchPromotions();
  }, [
    promotions,
  ]);

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
    };
  });

  return (
    <>
      <div className="mt-4 container mx-auto px-4 flex items-center justify-center w-full *:transition-colors duration-300">
        <button
          className="bg-kya-white text-kya-green hover:bg-kya-green hover:text-kya-white text-2xl p-4 rounded-full"
          onClick={previousPromo}>
          <LuArrowLeft />
        </button>
        <div className="w-full p-4 h-96 flex items-center justify-center overflow-hidden">
          <Image
            width="1200"
            height="400"
            alt={promotions[currentPromo].title}
            src={promotions[currentPromo].image!}
            className="w-full h-full object-contain transition-all duration-300"
          />
        </div>
        {promotions[currentPromo].image?.trim() != "" && (
          <button
            className="bg-kya-white text-kya-green hover:bg-kya-green hover:text-kya-white text-2xl p-4 rounded-full"
            onClick={nextPromo}>
            <LuArrowRight />
          </button>
        )}
      </div>
      <p className="flex items-center justify-center">
        <Link
          className="w-max px-8 py-4 bg-kya-green text-white hover:bg-kya-orange transition-colors duration-300 font-bold rounded"
          href={promotions[currentPromo].link}
          target={
            promotions[currentPromo].link.startsWith("https://") ? "_blank" : ""
          }>
          {t("en savoir plus")}
        </Link>
      </p>
    </>
  );
}
