import React from "react";
import ProjectCard from "./ProjectCard/ProjectCard";
import Marquee from "../magicui/marquee";

const Projects = () => {
  return (
    <div id="projects" className=" w-full bg-[#f6eee1] p-4">
      <h1 className="font-londrina-outline text-6xl my-4">Projects</h1>

      <div className="relative flex h-[200px] w-full flex-col items-center justify-center overflow-hidden rounded-lg border md:shadow-xl">
        <Marquee pauseOnHover className="[--duration:100s]">
          <ProjectCard />
        </Marquee>
      </div>
    </div>
  );
};

export default Projects;
