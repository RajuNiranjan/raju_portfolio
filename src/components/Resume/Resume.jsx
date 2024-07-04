import React from "react";
import Education from "./Education/Education";
import Experience from "./Experience/Experience";
import TechnicalSkills from "./TechnicalSkill/TechnicalSkills";

const Resume = () => {
  return (
    <div id="resume" className=" h-max w-full p-5 bg-[#334b35]">
      <div className="grid grid-cols-1 md:grid-cols-2 font-medium text-[#f6eee1]">
        <div>
          <div className="my-24 lg:my-20">
            <Education />
          </div>
          <div>
            <Experience />
          </div>
        </div>
        <div>
          <div className="hidden md:block  font-londrina-outline text-[100px] tracking-[4px] font-medium text-yellow-600">
            <p>RESUME</p>
          </div>
          <div>
            <TechnicalSkills />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
