import { ActiveSectionContext } from "@/context/activeSectionContext";
import { useContext, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useActiveSection } from "./useActiveSection";

export function useSectionInView(sectionName: string, threshold: number = 0.5) {
  const { ref, inView } = useInView({
    threshold: threshold,
  });

  const { toggleActiveSection } = useActiveSection();

  useEffect(() => {
    if (inView) {
      toggleActiveSection(sectionName);
    }
  }, [inView, toggleActiveSection, sectionName]);

  return { ref };
}
