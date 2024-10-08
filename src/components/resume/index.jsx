import { motion } from "framer-motion";
import Education from "./education";
import Experience from "./experience";
import TechnicalSkills from "./technicalSills";

const Resume = () => {
  return (
    <div id="resume" className=" h-full w-full p-5 bg-[#334b35]">
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
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="hidden my-20 md:block  font-londrina-outline text-[100px] tracking-[4px] font-medium text-yellow-600"
          >
            <p>RESUME</p>
          </motion.div>
          <div>
            <TechnicalSkills />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
