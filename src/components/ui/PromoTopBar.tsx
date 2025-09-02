"use client";

import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
// Icônes
import { FaArrowRight, FaTimes, FaTag } from "react-icons/fa";
import { strapiUrl } from "@/data/strapi";

export default function PromoTopBar() {
  const t = useTranslations("promo top bar");
  const [isVisible, setIsVisible] = useState(true);
  const [promo, setPromo] = useState<
    {
      titre: string;
      lien: string;
    }[]
  >([]);
  const [index, setIndex] = useState(0);
  useEffect(() => {
    (async () => {
      const request = await fetch(`${strapiUrl}/api/promotions`);
      const response = await request.json();
      response.data.forEach((promotion: any) => {
        setPromo([
          ...promo,
          {
            titre: promotion.titre,
            lien: promotion.lien_de_redirection,
          },
        ]);
      });
    })();
  }, []);
  useEffect(() => {
    const interval = setInterval(() => {
      const nextIndex = index + 1;
      if (nextIndex >= promo.length) {
        setIndex(0);
      } else {
        setIndex(nextIndex);
      }
    });
    clearInterval(interval);
  }, []);

  if (promo.length === 0) {
    return (
      <AnimatePresence>
        <motion.div
          initial={{
            y: "-100%",
            opacity: 0,
          }}
          animate={{
            y: 0,
            opacity: 1,
          }}
          exit={{
            y: "-100%",
            opacity: 0,
          }}
          transition={{
            duration: 0.5,
            ease: "easeInOut",
          }}
          className="relative z-50 bg-kya-coffee text-sm text-kya-white">
          <div className="container mx-auto flex items-center justify-center gap-4 px-4 py-2.5">
            <div className="hidden items-center gap-2 rounded-full bg-kya-orange/80 px-3 py-1 text-xs font-bold sm:flex">
              <FaTag />
              <span>{t("badge")}</span>
            </div>
            <FaTimes />
          </div>
        </motion.div>
      </AnimatePresence>
    );
  }

  return (
    // AnimatePresence gère l'animation de sortie lorsque isVisible devient false
    <AnimatePresence>
      {isVisible && (
        <motion.div
          // Définition des animations d'entrée et de sortie
          initial={{
            y: "-100%",
            opacity: 0,
          }}
          animate={{
            y: 0,
            opacity: 1,
          }}
          exit={{
            y: "-100%",
            opacity: 0,
          }}
          transition={{
            duration: 0.5,
            ease: "easeInOut",
          }}
          // Style de la barre
          className="relative z-50 bg-kya-coffee text-sm text-kya-white">
          <div className="container mx-auto flex items-center justify-center gap-4 px-4 py-2.5">
            {/* Badge de Promotion */}
            <div className="hidden items-center gap-2 rounded-full bg-kya-orange/80 px-3 py-1 text-xs font-bold sm:flex">
              <FaTag />
              <span>{t("badge")}</span>
            </div>

            {/* Texte de la Promotion */}
            <div
              className="text-center max-w-[400px] font-semibold"
              dangerouslySetInnerHTML={{
                __html: `<marquee>${promo[index].titre}</marquee>`,
              }}
            />

            {/* Lien "En savoir plus" */}
            <Link
              href={promo[index].lien}
              className="group ml-2 hidden items-center gap-1 font-semibold underline-offset-4 hover:underline md:flex">
              <span>{t("lien_texte")}</span>
              <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
            </Link>

            {/* Bouton de Fermeture */}
            {/*<button
              type="button"
              onClick={() => setIsVisible(false)}
              aria-label={t("fermer_label")}
              className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full p-1.5 transition-colors hover:bg-white/10">
              <FaTimes />
            </button>*/}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
