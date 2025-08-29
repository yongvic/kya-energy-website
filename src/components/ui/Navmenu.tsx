"use client";
import Link from "next/link";
import { useState } from "react";
import Dropdown from "./Dropdown";
import { generateNavigationData } from "@/data/navigation";
import { FaChevronDown } from "react-icons/fa";
import { usePathname } from "next/navigation";
import { useLocale, useTranslations } from "next-intl";

export default function NavMenu() {
  const [openMenu, setOpenMenu] = useState<string | null>(null);

  // Get the current URL's pathname (e.g., "/fr/produits")
  const pathname = usePathname();
  // Get the current locale (e.g., "fr")
  const locale = useLocale();
  const t = useTranslations("header");

  return (
    <nav className="flex flex-col lg:flex-row items-center gap-4 h-full">
      {generateNavigationData(t).map((item) => {
        // --- ACTIVE STATE LOGIC ---
        // Construct the full, localized path for the link.
        // e.g., if item.href is "/services", localizedHref becomes "/fr/services"
        const localizedHref = `/${locale}${item.href === "/" ? "" : item.href}`;

        let isActive = false;
        // The homepage link is a special case: it's only active on the exact root path.
        if (item.href === "/") {
          isActive = pathname === `/${locale}`;
        } else {
          // For all other links, check if the current path STARTS WITH the link's path.
          // This makes "Nos Services" active even on "/fr/services/consulting".
          isActive = pathname.startsWith(localizedHref);
        }

        return (
          <button
            className="relative h-full flex w-64 lg:w-max"
            key={item.label}
            onFocus={() => setOpenMenu(item.label)}
            onMouseEnter={() => setOpenMenu(item.label)} // This is important for positioning the indicator dot
            onMouseLeave={() => setOpenMenu(null)}
            type="button">
            <Link
              className={`flex items-center justify-between lg:justify-start gap-2 px-3 py-2 font-medium transition-colors ${
                isActive
                  ? "text-kya-green"
                  : "text-gray-600 hover:text-kya-green"
              }`} // Ensure link also uses the current locale
              href={`/${locale}${item.href}`}>
              {item.label}
              {item.children && (
                <FaChevronDown
                  className="opacity-50"
                  size={12}
                />
              )}
            </Link>

            {/* The Active Indicator Dot (inspired by the reference image) */}
            {isActive && (
              <span className="absolute top-1/2 -translate-y-1/2 rounded lg:-translate-y-0 w-1 h-6 lg:top-0 lg:left-1/2 lg:-translate-x-1/2 lg:h-1 lg:w-6 lg:rounded-b bg-kya-green"></span>
            )}

            {openMenu === item.label && item.children && (
              <Dropdown item={item} />
            )}
          </button>
        );
      })}
    </nav>
  );
}
