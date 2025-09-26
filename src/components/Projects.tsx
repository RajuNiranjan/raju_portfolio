import React, { useState } from "react";
import Image, { StaticImageData } from "next/image";
import { ChevronDownIcon } from "@/assets/images";
import { projects } from "@/utils/data";

export interface ProjectType {
  id: number;
  image: string | StaticImageData;
  title: string;
  live_link: string;
  github_link: string;
  tech_stack: string[];
  desc: string[];
}

export const Projects: React.FC = () => {
  return (
    <div className="bg-[var(--color-primary)]">
      <section
        id="projects"
        className="min-h-[80vh] bg-[var(--color-bg-secondary)] rounded-[1.5rem] sm:rounded-[3rem] p-4 sm:p-6 md:p-10 flex flex-col items-center"
      >
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-center text-black mb-6 sm:mb-8 md:mb-10">
          Projects
        </h1>

        <div className="flex flex-wrap gap-4 sm:gap-6 md:gap-8 justify-center">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>
    </div>
  );
};

interface ProjectCardProps {
  project: ProjectType;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const [expand, setExpand] = useState(false);

  return (
    <div
      className={`w-[260px] sm:w-[300px] md:w-[350px] bg-[var(--color-primary)] rounded-xl sm:rounded-2xl shadow-md border border-gray-200 overflow-hidden
        transition-all duration-500 ease-in-out
        ${expand ? "max-h-[1000px]" : "max-h-[260px] sm:max-h-[300px]"}`}
    >
      <div className="relative">
        <Image
          src={project.image}
          alt={`${project.title} Banner`}
          width={350}
          height={200}
          className="w-full h-[120px] sm:h-[150px] md:h-[200px] rounded-t-xl sm:rounded-t-2xl object-cover"
        />
        <a
          href={project.live_link}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute right-2 sm:right-3 bottom-2 sm:bottom-3 bg-[var(--color-secondary)] px-2 sm:px-3 py-1 rounded-full text-[var(--color-primary)] text-[9px] sm:text-xs uppercase tracking-wide shadow"
        >
          Live
        </a>
      </div>

      <div
        className={`transition-opacity duration-500 ease-in-out ${
          expand ? "opacity-100 p-3 sm:p-4 md:p-5" : "opacity-0 p-0"
        }`}
      >
        {expand && (
          <div className="space-y-3 sm:space-y-4 text-[var(--color-secondary)]">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold">
              {project.title}
            </h2>

            <div className="flex space-x-3 sm:space-x-4 text-[10px] sm:text-sm">
              <a
                href={project.github_link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-black underline hover:text-gray-700 transition-colors"
              >
                GitHub
              </a>
              <a
                href={project.live_link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-black underline hover:text-gray-700 transition-colors"
              >
                Live Site
              </a>
            </div>

            <ul className="list-disc list-inside text-gray-700 text-[10px] sm:text-xs md:text-sm space-y-1">
              {project.desc.map((point, idx) => (
                <li key={idx}>{point}</li>
              ))}
            </ul>
            <div className="text-[10px] sm:text-xs md:text-sm text-gray-600">
              Built with: {project.tech_stack.join(", ")}
            </div>
          </div>
        )}
      </div>

      <div
        className="flex justify-center items-center py-2 sm:py-3 cursor-pointer border-t border-gray-200 hover:bg-gray-50 transition"
        onClick={() => setExpand((prev) => !prev)}
      >
        <Image
          src={ChevronDownIcon}
          alt="Toggle Details"
          width={18}
          height={18}
          className={`sm:w-[20px] sm:h-[20px] md:w-[25px] md:h-[25px] transition-transform duration-500 ease-in-out ${
            expand ? "rotate-180" : "rotate-0"
          }`}
        />
      </div>
    </div>
  );
};
