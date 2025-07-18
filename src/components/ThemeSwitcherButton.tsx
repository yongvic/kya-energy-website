"use client";

/*
  * Using context will lead to use
  * client components everywhere which
  * is not a good thing for SEO improvement
*/
import { useState, useEffect } from "react";
import { FaMoon, FaSun } from "react-icons/fa6";

export default function ThemeSwitcherButton() {
  const [darkTheme, setDarkTheme] = useState(window.matchMedia("(prefers-color-scheme: dark)").matches); // true if user in dark mode
  
  useEffect(() => {
    if(darkTheme) { 
      if(document.body.classList.contains("dark"))
        document.body.classList.add("dark")
      else
        document.body.classList.remove("dark")
      }
  }, []);
  
  function changeTheme() {
    setDarkTheme(!darkTheme);
    document.body.classList.toggle("dark");
  }

  return (
    <button
      title={darkTheme ? "mode clair" : "mode sombre"}
      onClick={changeTheme}
    >
      {
        darkTheme ? (
          <FaSun />
        ) : (
          <FaMoon />
        )
      }
    </button>
  );
}
