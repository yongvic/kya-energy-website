"use client";
import Link from "next/link";
import Image from "next/image";
import NavMenu from "../ui/navmenu";
import LocaleSwitcher from "../ui/LocaleSwitcher";
import { useState, useEffect, useRef } from "react";
import AnimatedButton from "../ui/AnimatedButton";
import { AnimatePresence, motion } from "framer-motion";

export default function Header() {
  // State to track if the user has scrolled down
  const [isScrolled, setIsScrolled] = useState(false);
  // Ref to store the last scroll position to detect scroll direction
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Define a threshold (e.g., 100px) to trigger the change
      const scrollThreshold = 100;

      // Logic:
      // - If we scroll down past the threshold, hide the locale switcher.
      // - If we scroll up at all, or are within the threshold at the top, show it.
      if (
        currentScrollY > scrollThreshold &&
        currentScrollY > lastScrollY.current
      ) {
        // Scrolling DOWN past the threshold
        setIsScrolled(true);
      } else {
        // Scrolling UP or at the top of the page
        setIsScrolled(false);
      }

      // Update the last scroll position for the next event
      lastScrollY.current = currentScrollY;
    };

    // Add the event listener when the component mounts
    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    // Remove the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // Empty dependency array ensures this effect runs only once

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-gray-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Left Side (Stays the same) */}
          <div className="flex items-center gap-8">
            <Link
              href="/"
              aria-label="Homepage">
              <Image
                src="/favicon.ico"
                alt="Company Logo"
                width={32}
                height={32}
              />
            </Link>
          </div>

          {/* This wrapper now controls the layout shift */}
          <div
            className={`flex flex-1 items-center transition-all duration-500 ease-in-out ${isScrolled ? "justify-end" : "justify-center"}`}>
            {/* The NavMenu will be pushed to the right when scrolled */}{" "}
            <NavMenu />
          </div>

          {/* Right Side (LocaleSwitcher will fade and shrink out) */}
          <AnimatePresence>
            <motion.div
              exit={{
                width: "0",
              }}
              animate={{
                width: "max-content",
              }}
              className={`transition-all duration-500 ease-in-out ${isScrolled ? "hidden" : "flex items-center gap-8"}`}>
              <AnimatedButton
                href="/politique-qualite"
                className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors">
                Politique Qualité
              </AnimatedButton>
              <LocaleSwitcher />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </header>
  );
}
