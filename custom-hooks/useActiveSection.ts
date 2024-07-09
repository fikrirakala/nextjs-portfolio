import { ActiveSectionContext } from "@/context/activeSectionContext";
import { useContext } from "react";

export function useActiveSection() {
  const context = useContext(ActiveSectionContext);

  if (context === null) {
    throw new Error(
      "useActiveSection must be used within an ActiveSectionProvider",
    );
  }

  return context;
}
