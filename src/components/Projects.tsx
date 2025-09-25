import React from "react";

export const Projects = () => {
  return (
    <div className="bg-white">
      <section
        id="projects"
        className="h-[80vh] bg-[#F0F0F0] rounded-[4rem] p-6 "
      >
        <h1 className="text-7xl font-bold text-center">Projects</h1>

        <div>
          <ProjectCard />
        </div>
      </section>
    </div>
  );
};

const ProjectCard = () => {
  return <div>projects</div>;
};
