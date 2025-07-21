"use client";

import { useState, useEffect } from "react";
import { FaMoon, FaSun } from "react-icons/fa6";
import { motion, AnimatePresence } from "framer-motion";
import TranslationsType from "@/translations/translations.definition";
import { usePathname } from "next/navigation";
import { i18n, type Locale } from "@/lib/i18n.config";

export default function LocaleSwitcherButton({
  dictionnary,
}: {
  dictionnary: TranslationsType;
}) {
  const pathname = usePathname();

  function getCurrentLocale(): Locale {
    if (!pathname) return i18n.defaultLocale;
    const segments = pathname.split("/");
    return (
      i18n.locales.find((locale) => locale === segments[1]) ||
      i18n.defaultLocale
    );
  }

  const currentLocale = getCurrentLocale();

  useEffect(() => {}, []);

  return (
    <div>
      <button
        aria-haspopup="true"
        aria-label={dictionnary.switcher.locale.aria}></button>
    </div>
  );
}
