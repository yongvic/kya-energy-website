"use client";
import Link from "next/link";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import Dropdown from "./dropdown";
import { navigationData } from "@/lib/navigation";
import { FaChevronDown } from "react-icons/fa";
import { usePathname } from "next/navigation";
import { useLocale } from "next-intl";

export default function NavMenu() {
  const [openMenu, setOpenMenu] = useState<string | null>(null);

  // Get the current URL's pathname (e.g., "/fr/produits")
  const pathname = usePathname();
  // Get the current locale (e.g., "fr")
  const locale = useLocale();

  return (
    <nav className="flex items-center gap-4 h-full">
      {navigationData.map((item) => {
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
          <div
            key={item.label}
            className="relative h-full flex" // This is important for positioning the indicator dot
            onMouseEnter={() => setOpenMenu(item.label)}
            onMouseLeave={() => setOpenMenu(null)}>
            <Link
              href={`/${locale}${item.href}`} // Ensure link also uses the current locale
              className={`flex items-center gap-2 px-3 py-2 font-medium transition-colors ${
                isActive ? "text-blue-600" : "text-gray-600 hover:text-blue-600"
              }`}>
              {item.label}
              {item.children && (
                <FaChevronDown
                  size={12}
                  className="opacity-50"
                />
              )}
            </Link>

            {/* The Active Indicator Dot (inspired by the reference image) */}
            {isActive && (
              <span className="absolute top-0 left-1/2 -translate-x-1/2 h-1 w-6 rounded-b bg-blue-600"></span>
            )}

            <AnimatePresence>
              {openMenu === item.label && item.children && (
                <Dropdown item={item} />
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </nav>
  );
}
