"use client";

import TranslationsType from "@/translations/translations.definition";
import Image from "next/image";
import Link from "next/link";
import ThemeSwitcherButton from "@/components/ThemeSwitcherButton";
import LocaleSwitcherButton from "@/components/LocaleSwitcherButton";
import { useState } from "react";
import { LuMenu, LuX } from "react-icons/lu";
import { AnimatePresence, motion } from "framer-motion";
import { Navlink } from "@/components/Navlink";
import NavbarDesktop from "./NavbarDesktop";

export default function Header({
  dictionary,
}: {
  dictionary: TranslationsType;
}) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="sticky top-0 left-0 w-full z-40 bg-[#f3f4f60a] dark:bg-[#1018280a] backdrop-blur-xs">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div>
          <Image
            width={96}
            height={96}
            src="/logo.webp"
            alt={dictionary.header.logo} />
        </div>
        <div className="flex items-center justify-center gap-2">
          <Link href="" className="px-4 py-2 font-bold text-kya-green text-lg">{dictionary.header.qualityPolicy}</Link>
          <Link href="" className="px-4 py-2 text-lg rounded bg-kya-green hover:bg-kya-green-light text-white font-bold transition-colors duration-300">{dictionary.header.contact}</Link>
          <div className="hidden md:flex items-center">
            <LocaleSwitcherButton dictionary={dictionary} />
            <ThemeSwitcherButton dictionary={dictionary} />
          </div>
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
            <AnimatePresence initial={false} mode="wait">
              <motion.div
                key={isOpen ? "x" : "menu"}
                initial={{ rotate: 45, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -45, opacity: 0 }}
                transition={{ duration: 0.3 }}>
                {isOpen ? <LuX size={32} /> : <LuMenu size={32} />}
              </motion.div>
            </AnimatePresence>
          </button>
        </div>
      </div>
      <div className="hidden md:block"><NavbarDesktop dictionary={dictionary} /></div>
      {/* Navlinks */}
      <AnimatePresence>
        {isOpen && (
          <motion.nav
            className="fixed top-0 left-0 z-50 w-screen h-screen bg-gray-100 dark:bg-gray-900"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", ease: "easeInOut", duration: 0.4 }}>
            <div className="container mx-auto px-4 h-full">
              <div className="flex justify-end items-center h-24">
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  aria-label="Close menu">
                  <LuX size={32} />
                </button>
              </div>
              <div className="flex flex-col items-center w-full pt-8">
                <Navlink href="/" text={dictionary.navigation.home} isMobile />
                <Navlink
                  href="/produits-et-services"
                  text={dictionary.navigation["products-and-services"]}
                  isMobile>
                  <p>Sub link 1</p>
                  <p>Sub link 2</p>
                </Navlink>
                <Navlink
                  href="/a-propos-de-kya"
                  text={dictionary.navigation.about}
                  isMobile
                />
                <Navlink
                  href="/actualites-et-engagement"
                  text={dictionary.navigation["news-and-engagement"]}
                  isMobile
                />
              </div>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
