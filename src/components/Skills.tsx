import { skills } from "@/utils/data";
import React from "react";

export const Skills = () => {
  return (
    <section id="skills" className="space-y-6 px-20">
      <h1 className="text-4xl font-bold text-center">Skills</h1>
      <div className="flex flex-wrap gap-5">
        {skills.map((tech, index) => (
          <span
            key={index}
            className="px-2 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full border border-primary/20"
          >
            {tech}
          </span>
        ))}
      </div>
    </section>
  );
};
