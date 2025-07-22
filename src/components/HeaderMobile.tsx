"use client";
import TranslationsType from "@/translations/translations.definition";
import LocaleSwitcherButton from "@/components/LocaleSwitcherButton";
import ThemeSwitcherButton from "@/components/ThemeSwitcherButton";
import Image from "next/image";
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
    </div>
  );
}
