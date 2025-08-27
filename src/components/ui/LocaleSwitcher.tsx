"use client";
import { useState, useEffect, useRef, useTransition } from "react";
import Image from "next/image";
import { useLocale } from "next-intl";
import { usePathname, useRouter } from "next/navigation";
import { FaChevronDown } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

// Define our available locales in a structured way
const locales = [
  {
    code: "fr",
    name: "Français",
    countryCode: "fr",
  },
  {
    code: "en",
    name: "English",
    countryCode: "gb",
  },
  // Add more languages here as needed
  // { code: 'es', name: 'Español', countryCode: 'es' },
];

export default function LocaleSwitcher() {
  const [isOpen, setIsOpen] = useState(false);
  const [isPending, startTransition] = useTransition();
  const dropdownRef = useRef<HTMLDivElement>(null);

  const currentLocaleCode = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  // Find the full object for the current locale to display its name and flag
  const currentLocale =
    locales.find((l) => l.code === currentLocaleCode) || locales[0];

  // Function to handle changing the locale
  const handleLocaleChange = (newLocale: string) => {
    setIsOpen(false); // Close dropdown on selection
    const newPath = pathname.replace(`/${currentLocaleCode}`, `/${newLocale}`);
    startTransition(() => {
      router.replace(newPath);
    });
  };

  // Effect to close the dropdown when clicking outside of it
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div
      className="relative"
      ref={dropdownRef}>
      {/* The button that shows the current language and opens the dropdown */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-gray-700 rounded-md hover:bg-gray-100 transition-colors"
        aria-haspopup="true"
        aria-expanded={isOpen}>
        <Image
          src={`https://hatscripts.github.io/circle-flags/flags/${currentLocale.countryCode}.svg`}
          width={20}
          height={20}
          alt={`${currentLocale.name} flag`}
        />
        <span>{currentLocale.name}</span>
        <FaChevronDown
          size={12}
          className={`text-gray-500 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
        />
      </button>

      {/* The dropdown menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{
              opacity: 0,
              y: -10,
              scale: 0.95,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              y: -10,
              scale: 0.95,
            }}
            transition={{
              duration: 0.15,
              ease: "easeOut",
            }}
            className="absolute top-full right-0 mt-2 w-48 bg-white rounded-md shadow-lg border border-gray-200 z-10">
            <div className="p-1">
              {locales.map((locale) => (
                <button
                  key={locale.code}
                  onClick={() => handleLocaleChange(locale.code)}
                  disabled={isPending}
                  className={`flex items-center w-full gap-3 px-3 py-2 text-sm text-left rounded-md transition-colors ${
                    currentLocaleCode === locale.code
                      ? "bg-blue-50 text-blue-600 font-semibold"
                      : "text-gray-700 hover:bg-gray-100"
                  }`}>
                  <Image
                    src={`https://hatscripts.github.io/circle-flags/flags/${locale.countryCode}.svg`}
                    width={20}
                    height={20}
                    alt={`${locale.name} flag`}
                  />
                  <span>{locale.name}</span>
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
