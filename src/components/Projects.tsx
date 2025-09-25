import React, { useState } from "react";
import { ChevronDownIcon, TrendsetBanner } from "@/assets/images";
import Image from "next/image";

export const Projects = () => {
  return (
    <div className="bg-white">
      <section
        id="projects"
        className="min-h-[80vh] bg-gray-100 rounded-[3rem] p-10 flex flex-col items-center"
      >
        <h1 className="text-5xl md:text-6xl font-extrabold text-center text-black mb-10">
          Projects
        </h1>

        <div className="flex flex-wrap gap-8 justify-center">
          <ProjectCard />
        </div>
      </section>
    </div>
  );
};

const ProjectCard = () => {
  const [expand, setExpand] = useState(false);
  return (
    <div
      className={`w-[350px] bg-white rounded-2xl shadow-md border border-gray-200 overflow-hidden
                  transition-all duration-500 ease-in-out
                  ${expand ? "max-h-[1000px]" : "max-h-[320px]"}`}
    >
      <div className="relative">
        <Image
          src={TrendsetBanner}
          alt="Project Banner"
          width={350}
          height={200}
          className="rounded-t-2xl object-cover"
        />
        <button className="absolute right-3 bottom-3 bg-black px-3 py-1 rounded-full text-white text-xs uppercase tracking-wide shadow">
          Live
        </button>
      </div>

      <div
        className={`transition-opacity duration-500 ease-in-out ${
          expand ? "opacity-100 p-5" : "opacity-0 p-0"
        }`}
      >
        {expand && (
          <div className="space-y-4 text-gray-800">
            <h2 className="text-2xl font-semibold text-black">Title</h2>

            <div className="flex space-x-4 text-sm">
              <a
                href="#"
                className="text-black underline hover:text-gray-700 transition-colors"
              >
                GitHub
              </a>
              <a
                href="#"
                className="text-black underline hover:text-gray-700 transition-colors"
              >
                Live Site
              </a>
            </div>

            <ul className="list-disc list-inside text-gray-700 text-sm space-y-1">
              <li>Feature one</li>
              <li>Feature two</li>
              <li>Feature three</li>
              <li>Feature four</li>
              <li>Feature five</li>
            </ul>

            <div className="text-sm text-gray-600">
              Built with: React.js, Express.js, etc.
            </div>
          </div>
        )}
      </div>

      <div
        className="flex justify-center items-center py-3 cursor-pointer border-t border-gray-200 hover:bg-gray-50 transition"
        onClick={() => setExpand(!expand)}
      >
        <Image
          src={ChevronDownIcon}
          alt="Toggle Details"
          width={25}
          height={25}
          className={`transition-transform duration-500 ease-in-out ${
            expand ? "rotate-180" : "rotate-0"
          }`}
        />
      </div>
    </div>
  );
};
