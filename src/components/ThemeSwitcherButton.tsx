"use client";

import { useState, useEffect } from "react";
import { FaMoon, FaSun } from "react-icons/fa6";

type Theme = "light" | "dark";

export default function ThemeSwitcherButton() {
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
      if (theme === "dark") {
        document.documentElement.setAttribute("data-theme", "dark");
      } else {
        document.documentElement.setAttribute("data-theme", "light");
      }
      localStorage.setItem("theme", theme);
    }
  }, [theme]);

  // Function to toggle the theme
  function changeTheme() {
    setTheme(theme === "light" ? "dark" : "light");
  }

  // To prevent a flash of incorrect theme or UI mismatch during server rendering,
  // the button is rendered only after the theme has been determined on the client.
  if (theme === null) {
    return null;
  }

  return (
    <button
      className="dark:bg-blue-400"
      title={
        theme === "light" ? "Passer au mode sombre" : "Passer au mode clair"
      }
      onClick={changeTheme}>
      {theme === "light" ? <FaMoon /> : <FaSun />}
    </button>
  );
}
