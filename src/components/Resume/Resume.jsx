import React from "react";
import Education from "./Education/Education";
import Experience from "./Experience/Experience";
import TechnicalSkills from "./TechnicalSkill/TechnicalSkills";

const Resume = () => {
  return (
    <div id="resume" className="h-full w-full p-5 bg-[#334b35]">
      <div className="grid grid-cols-1 md:grid-cols-2 font-medium text-[#f6eee1]">
        <div>
          <div className="my-24 lg:my-20">
            <Education />
          </div>
          <div className="">
            <Experience />
          </div>
        </div>
        <div className="mt-36">
          <div>
            <TechnicalSkills />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
