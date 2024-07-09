"use client";

import React, { useState } from "react";
import { createContext } from "react";

export interface ActiveSectionContextInterface {
  activeSection: string;
  toggleActiveSection: (name: string) => void;
}

export const ActiveSectionContext =
  createContext<ActiveSectionContextInterface | null>(null);

export default function ActiveSectionProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [activeSection, setActiveSection] = useState<string>("Home");

  function toggleActiveSection(name: string) {
    setActiveSection(name);
  }

  return (
    <ActiveSectionContext.Provider
      value={{ activeSection, toggleActiveSection }}
    >
      {children}
    </ActiveSectionContext.Provider>
  );
}
