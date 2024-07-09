"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { projectsData } from "@/lib/data";
import Project from "./project";
import { useSectionInView } from "@/custom-hooks/useSectionInView";

export default function Projects() {
  const { ref } = useSectionInView("Projects");

  return (
    <section ref={ref} className="mb-28 scroll-mt-28" id="projects">
      <SectionHeading>My projects</SectionHeading>
      <div>
        {projectsData.map((project) => (
          <Project {...project} key={project.title} />
        ))}
      </div>
    </section>
  );
}
