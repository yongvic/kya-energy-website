"use client";

import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { i18n } from "@/lib/i18n.config";
import TranslationsType from "@/translations/translations.definition";
import { motion, AnimatePresence } from "framer-motion";
import {
  getCurrentLocale,
  redirectedPathName,
  getFlagUrl,
} from "@/lib/locale-utils";
import { FaChevronDown } from "react-icons/fa6";
import Image from "next/image";

export default function LocaleSwitcherButton({
  dictionary,
}: {
  dictionary: TranslationsType;
}) {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const switcherRef = useRef<HTMLDivElement>(null);

  const currentLocale = getCurrentLocale(pathname);

  // Effect to close the dropdown when clicking outside of it
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        switcherRef.current &&
        !switcherRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="w-max relative" ref={switcherRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex h-12 items-center justify-center gap-2 px-4 rounded font-bold font-sans">
        <Image
          src={getFlagUrl(currentLocale)}
          alt={dictionary.switcher.locale[currentLocale]}
          width={24}
          height={0}
        />
        <p>{dictionary.switcher.locale[currentLocale]}</p>
        <motion.div animate={{ rotate: isOpen ? 180 : 0 }}>
          <FaChevronDown />
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="flex flex-col absolute w-full">
            {i18n.locales.map(
              (locale, index) =>
                locale != currentLocale && (
                  <Link
                    href={redirectedPathName(pathname, locale)}
                    key={index}
                    className="font-bold flex items-center gap-2 px-4 h-12 rounded bg-blue-100 hover:bg-blue-200 transition-colors duration-300">
                    <Image
                      src={getFlagUrl(locale)}
                      alt={dictionary.switcher.locale[locale]}
                      width={24}
                      height={0}
                    />
                    <p>{dictionary.switcher.locale[locale]}</p>
                  </Link>
                ),
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
