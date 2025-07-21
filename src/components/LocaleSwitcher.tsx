"use client";

import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { i18n, type Locale } from "@/lib/i18n.config";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronDown } from "react-icons/fa6";

// Helper to get flag image URL from a reliable CDN
const getFlagUrl = (locale: string): string => {
  // Use 'gb' for the United Kingdom flag for the 'en' locale
  const countryCode = locale === "en" ? "gb" : locale;
  return `https://flagcdn.com/w40/${countryCode}.png`;
};

// Mapping from locale code to its display properties
const localeDetails: {
  [key in Locale]: { name: string; short: string };
} = {
  en: { name: "English", short: "EN" },
  fr: { name: "Français", short: "FR" },
};

export default function LocaleSwitcher() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const switcherRef = useRef<HTMLDivElement>(null);

  // Determines the current locale from the URL pathname
  const getCurrentLocale = (): Locale => {
    if (!pathname) return i18n.defaultLocale;
    const segments = pathname.split("/");
    return i18n.locales.find((l) => l === segments[1]) || i18n.defaultLocale;
  };

  const currentLocale = getCurrentLocale();

  // Creates the new path for the selected locale while preserving the rest of the path
  const redirectedPathName = (locale: Locale): string => {
    if (!pathname) return "/";
    const segments = pathname.split("/");
    segments[1] = locale;
    return segments.join("/");
  };

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

  // Animation variants for the dropdown menu
  const dropdownVariants = {
    hidden: { opacity: 0, scale: 0.9, y: -10 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { type: "spring", stiffness: 300, damping: 25 },
    },
    exit: {
      opacity: 0,
      scale: 0.9,
      y: -10,
      transition: { duration: 0.15 },
    },
  };

  return (
    <div className="relative" ref={switcherRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex h-10 items-center justify-center gap-2 rounded-lg bg-slate-200 px-3 py-2 text-sm font-medium text-slate-800 transition-colors hover:bg-slate-300 dark:bg-slate-700 dark:text-slate-200 dark:hover:bg-slate-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500"
        aria-haspopup="true"
        aria-expanded={isOpen}
        aria-label="Change language">
        <img
          src={getFlagUrl(currentLocale)}
          alt={localeDetails[currentLocale].name}
          width="20"
          className="rounded-sm"
        />
        <span>{localeDetails[currentLocale].short}</span>
        <motion.div animate={{ rotate: isOpen ? 180 : 0 }}>
          <FaChevronDown />
        </motion.div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.ul
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={dropdownVariants}
            className="absolute top-full right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white p-2 shadow-xl ring-1 ring-black ring-opacity-5 focus:outline-none dark:bg-slate-800 dark:ring-slate-700">
            {i18n.locales.map((locale) => (
              <li key={locale}>
                <Link
                  href={redirectedPathName(locale)}
                  onClick={() => setIsOpen(false)}
                  className="flex w-full items-center gap-3 rounded-md px-3 py-2 text-sm text-slate-800 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-700">
                  <img
                    src={getFlagUrl(locale)}
                    alt={localeDetails[locale].name}
                    width="24"
                    className="rounded-sm"
                  />
                  <span>{localeDetails[locale].name}</span>
                </Link>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
}
