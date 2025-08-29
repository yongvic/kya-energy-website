"use client";

import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";
import { LuArrowLeft, LuArrowRight } from "react-icons/lu";
import { strapiUrl } from "@/data/strapi";

// biome-ignore lint/complexity/noExcessiveLinesPerFunction: Needed
export default function Promotions() {
  const t = useTranslations("produits et services");
  interface Promo {
    image?: string;
    title: string;
    link: string;
  }

  const [promotions, setPromotions] = useState<Promo[]>([
    {
      image: "/products/pub.png",
      link: "/detail-produits",
      title: "Special Offer on KYA-SoP Systems",
    },
  ]);

  useEffect(() => {
    async function fetchPromotions() {
      const request = await fetch(`${strapiUrl}/api/promotions?populate=*`);

      const response = await request.json();
      // If there is no promotions, display the default array
      // contents instead
      if (response.data && response.data.length > 0) {
        // Clear promotions before proceed
        setPromotions([]);

        for (const promotion of response.data) {
          setPromotions([
            ...promotions,
            {
              image: `${strapiUrl}${promotion.image?.url}`,
              link: promotion.lien_de_redirection,
              title: promotion.titre,
            },
          ]);
        }
      }
    }

    fetchPromotions();
  }, []);

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
      <div className="container mx-auto mt-4 flex w-full items-center justify-center px-4 duration-300 *:transition-colors">
        <button
          className="rounded-full bg-kya-white p-4 text-2xl text-kya-green hover:bg-kya-green hover:text-kya-white"
          onClick={previousPromo}
          type="button">
          <LuArrowLeft />
        </button>
        <div className="flex h-96 w-full items-center justify-center overflow-hidden p-4">
          <Image
            alt={promotions[currentPromo].title}
            className="h-full w-full object-contain transition-all duration-300"
            height="400"
            src={promotions[currentPromo].image ?? "#"}
            width="1200"
          />
        </div>
        {promotions[currentPromo].image?.trim() !== "" && (
          <button
            className="rounded-full bg-kya-white p-4 text-2xl text-kya-green hover:bg-kya-green hover:text-kya-white"
            onClick={nextPromo}
            type="button">
            <LuArrowRight />
          </button>
        )}
      </div>
      <p className="flex items-center justify-center">
        <Link
          className="w-max rounded bg-kya-green px-8 py-4 font-bold text-white transition-colors duration-300 hover:bg-kya-orange"
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
