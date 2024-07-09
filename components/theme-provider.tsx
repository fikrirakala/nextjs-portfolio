"use client";

import { useLocalStorage } from "@/custom-hooks/useLocalStorage";
import React, { createContext, useEffect, useState } from "react";

type Theme = "light" | "dark";

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextType | null>(null);

export default function ThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [theme, setTheme] = useState<Theme>("light");
  const { setItem, getItem } = useLocalStorage("theme");

  function toggleTheme() {
    if (theme === "light") {
      setTheme("dark");
      setItem("dark");
      document.documentElement.classList.add("dark");
    } else {
      setTheme("light");
      setItem("light");
      document.documentElement.classList.remove("dark");
    }
  }

  useEffect(() => {
    const localTheme = getItem() as Theme | null;

    if (localTheme) {
      setTheme(localTheme);

      if (localTheme === "dark") {
        document.documentElement.classList.add("dark");
      }
    } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
      setItem("dark");
      document.documentElement.classList.add("dark");
    }
  }, [getItem, setItem]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
