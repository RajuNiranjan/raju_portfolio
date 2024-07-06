import React from "react";
import ProjectCard from "./ProjectCard/ProjectCard";

const Projects = () => {
  return (
    <div id="projects" className="h-96 w-full bg-[#f6eee1] p-4">
      <h1 className="font-londrina-outline text-6xl my-4">Projects</h1>
      <ProjectCard />
    </div>
  );
};

export default Projects;
