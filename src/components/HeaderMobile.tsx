"use client";
import TranslationsType from "@/translations/translations.definition";
import LocaleSwitcherButton from "@/components/LocaleSwitcherButton";
import ThemeSwitcherButton from "@/components/ThemeSwitcherButton";
import Image from "next/image";
import { Navlink } from "@/components/Navlink";
import { LuMenu, LuX } from "react-icons/lu";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function HeaderMobile({
  className = "",
  dictionary,
}: {
  className?: string;
  dictionary: TranslationsType;
}) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className={`${className} container mx-auto px-4`}>
      {/* Top header */}
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Image
            width={96}
            height={96}
            src="/logo.webp"
            alt={dictionary.header.logo}
          />
        </div>
        <div className="flex items-center justify-center gap-2">
          <LocaleSwitcherButton dictionary={dictionary} />
          <ThemeSwitcherButton dictionary={dictionary} />
          <button onClick={() => setIsOpen(!isOpen)}>
            <AnimatePresence initial={false} mode="wait">
              <motion.div
                key={isOpen ? "x" : "menu"}
                initial={{ rotate: 45, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -45, opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                {isOpen ? <LuX size={32} /> : <LuMenu size={32} />}
              </motion.div>
            </AnimatePresence>
          </button>
        </div>
      </div>
      {/* Navlinks */}
      <AnimatePresence>
        {isOpen && (
          <motion.nav
            className="fixed top-0 left-0 z-50 w-screen h-screen bg-gray-100 dark:bg-gray-900"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", ease: "easeInOut", duration: 0.4 }}
          >
            <div className="container mx-auto px-4 h-full">
              <div className="flex justify-end items-center h-24">
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  aria-label="Close menu"
                >
                  <LuX size={32} />
                </button>
              </div>
              <div className="flex flex-col items-center w-full pt-8">
                <Navlink
                  href="/"
                  text={dictionary.navigation.home}
                  isMobile
                />
                <Navlink
                  href="/produits-et-services"
                  text="Produits et Services"
                  isMobile
                >
                  <p>Sub link 1</p>
                  <p>Sub link 2</p>
                </Navlink>
                <Navlink
                  href="/a-propos-de-kya"
                  text="À propos de KYA"
                  isMobile
                />
                <Navlink
                  href="/actualites-et-engagement"
                  text="Actualités et engagement"
                  isMobile
                />
              </div>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </div>
  );
}
