"use client";

import { useState, useEffect } from "react";
import { FaMoon, FaSun } from "react-icons/fa6";
import { motion, AnimatePresence } from "framer-motion";
import TranslationsType from "@/translations/translations.definition";

type Theme = "light" | "dark";

export default function ThemeSwitcherButton({
  dictionary,
}: {
  dictionary: TranslationsType;
}) {
  const [theme, setTheme] = useState<Theme | null>(null);

  // Set initial theme from localStorage or system preference on component mount
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as Theme | null;
    const systemPrefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)",
    ).matches;

    if (savedTheme) {
      setTheme(savedTheme);
    } else {
      setTheme(systemPrefersDark ? "dark" : "light");
    }
  }, []);

  // Update DOM and localStorage whenever theme changes
  useEffect(() => {
    if (theme) {
      if (theme === "dark")
        document.documentElement.setAttribute("data-theme", "dark");
      else document.documentElement.setAttribute("data-theme", "light");

      localStorage.setItem("theme", theme);
    }
  }, [theme]);

  const changeTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  // To prevent a flash of incorrect theme or UI mismatch, we render a
  // static placeholder on the server and during the initial client render.
  if (theme === null) {
    return (
      <div className="h-8 w-14 rounded-full bg-slate-200 dark:bg-slate-700" />
    );
  }

  return (
    <button
      onClick={changeTheme}
      title={
        theme === "light"
          ? dictionary.switcher.theme.title.dark
          : dictionary.switcher.theme.title.light
      }
      aria-label="Theme switcher"
      // This button acts as the "track" of the switch.
      className={`relative flex h-8 w-14 cursor-pointer items-center rounded-full p-1 transition-colors duration-300 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-sky-500 dark:focus-visible:ring-offset-slate-900 ${
        theme === "light"
          ? "bg-sky-400 justify-start"
          : "bg-slate-800 justify-end"
      }`}>
      {/* This is the sliding "thumb" of the switch. */}
      <motion.div
        className="flex h-6 w-6 items-center justify-center rounded-full bg-white shadow-md"
        layout
        transition={{
          type: "spring",
          stiffness: 700,
          damping: 30,
        }}>
        {/* AnimatePresence handles the enter/exit of the icons. */}
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            className="scale-75"
            key={theme}
            initial={{ y: -20, opacity: 0, rotate: -180 }}
            animate={{ y: 0, opacity: 1, rotate: 0 }}
            exit={{ y: 20, opacity: 0, rotate: 180 }}
            transition={{ duration: 0.25 }}>
            {theme === "light" ? (
              <FaSun className="text-lg text-yellow-500" />
            ) : (
              <FaMoon className="text-lg text-slate-800" />
            )}
          </motion.div>
        </AnimatePresence>
      </motion.div>
    </button>
  );
}
