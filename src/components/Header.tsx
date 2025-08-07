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
    <header className="sticky top-0 md:top-[-90px] left-0 w-full z-40 bg-gray-50/95 dark:bg-gray-900/95 dark:text-kya-white backdrop-blur-xs">
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
                  href="/products-and-services"
                  text={dictionary.navigation["products-and-services"]}
                  isMobile>
                  <div className="flex justify-around items-center size-full gap-4 text-center *:hover:text-kya-green">
                    <Link href="/detail-products">
                      <Image width={300} height={300} src="/products/kya-sop.png" alt="KYA-SoP" className="w-32 object-contain" />
                    </Link>
                    <Link href="/detail-products" className="font-bold text-xl">Voir nos KYA-SoP</Link>
                    <Link href="/products-and-services" className="font-bold text-xl">Voir tous nos produits</Link>
                  </div>
                </Navlink>
                <Navlink
                  href="/about"
                  text={dictionary.navigation.about}
                  isMobile
                >
                  <div className="flex justify-around items-center size-full gap-4 text-cennter *:hover:text-kya-green">
                    <Link href="/about#dg" className="flex flex-col justify-center items-center gap-2">
                      <Image width={300} height={300} src="/team/azoumah.avif" alt="Prof. Yao AZOUMAH" className="w-32 bject-contain" />
                      <p>Prof. Yao K. AZOUMAH</p>
                    </Link>
                    <Link href="/about#equipe" className="font-bold text-xl">Voir notre équipe</Link>
                    <Link href="/awards" className="font-bold text-xl">Nos récompenses</Link>
                  </div>
                </Navlink>
                <Navlink
                  href="/kya-foundation"
                  text={dictionary.navigation["news-and-engagement"]}
                  isMobile
                >
                  <div className="flex justify-around items-center size-full gap-4 text-center *:hover:text-kya-green">
                    <Link href="/certifications" className="flex flex-col justify-center items-center gap-2">
                      <Image width={300} height={300} src="/certification/certif.avif" alt="Certification" className="w-32 object-contain" />
                      <p>Notre certification ISO 9001:2015<br />Une reconnaissance de notre <br />engagement vers la qualité</p>
                    </Link>
                    <Link href="/kya-foundation" className="font-bold text-xl">
                      La Fondation KYA
                    </Link>
                    <Link href="#" className="flex flex-col justify-center items-center gap-2">
                      <Image width={300} height={300} src="https://static.wixstatic.com/media/2fcfb1_aca3321056bb4a33b40806f4d2060990~mv2.jpg/v1/fill/w_514,h_386,fp_0.50_0.50,q_90,enc_avif,quality_auto/2fcfb1_aca3321056bb4a33b40806f4d2060990~mv2.jpg" alt="Notre info" className="w-32 object-contain" />
                      <p>Voir nos infos</p>
                    </Link>
                  </div>
                </Navlink>
              </div>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
