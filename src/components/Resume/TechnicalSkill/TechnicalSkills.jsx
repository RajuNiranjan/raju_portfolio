import React from "react";
import Boot from "@/assets/skillIcons/Boot";
import Css from "@/assets/skillIcons/CSS";
import DB from "@/assets/skillIcons/Db";
import EX from "@/assets/skillIcons/EX";
import Git from "@/assets/skillIcons/Git";
import HTML from "@/assets/skillIcons/HTML";
import JS from "@/assets/skillIcons/JS";
import Linux from "@/assets/skillIcons/Linux";
import Mui from "@/assets/skillIcons/MaterialUi";
import Nest from "@/assets/skillIcons/Nest";
import Next from "@/assets/skillIcons/Next";
import Node from "@/assets/skillIcons/Node";
import Py from "@/assets/skillIcons/Python";
import Reactjs from "@/assets/skillIcons/React";
import Redux from "@/assets/skillIcons/Redux";
import Sql from "@/assets/skillIcons/SQL";
import Ts from "@/assets/skillIcons/TS";
import Tailwind from "@/assets/skillIcons/Tailwind";
import { motion } from "framer-motion";

const skillsData = [
  "React.js",
  "Next.js",
  "JavaScript",
  "Typescript",
  "Redux",
  "Node.js",
  "Express.js",
  "Nest.js",
  "MongoDB",
  "SQL",
  "Python",
  "TailwindCSS",
  "Material UI",
  "Shadcn/ui",
  "linux",
];

const TechnicalSkills = () => {
  return (
    <div className="flex flex-col items-start gap-4 p-5">
      <motion.h1
        whileHover={{ scale: 1.1 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
        className="text-4xl lg:text-[54px] text-[#fdad16] font-bold my-4">
        Technical Skills
      </motion.h1>
      <div className="flex flex-wrap  gap-4">
        {skillsData.map((item, index) => (
          <motion.h1
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
            key={index}
            className="bg-black px-4 py-1 rounded-full cursor-default w-max">
            {item}
          </motion.h1>
        ))}
      </div>
      <div className="flex flex-wrap  gap-4 my-10">
        <motion.div
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
          className="bg-blue-400 w-10 text-3xl h-10 flex justify-center items-center rounded-full">
          <Reactjs />
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
          className="bg-black w-10 text-3xl h-10 flex justify-center items-center rounded-full">
          <Next />
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
          className=" w-10 text-3xl h-10 flex justify-center items-center rounded-full">
          <JS className="text-[#fdad16]" />
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
          className="w-10 text-3xl h-10 flex justify-center items-center rounded-full">
          <Ts className="text-blue-400 " />
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
          className="w-10 text-3xl text-white bg-violet-500 h-10 flex justify-center items-center rounded-full">
          <Redux />
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
          className="bg-blue-400 w-10 text-3xl h-10 flex justify-center items-center rounded-full">
          <Tailwind />
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
          className="bg-violet-500 w-10 text-3xl h-10 flex justify-center items-center rounded-full">
          <Boot />
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
          className=" w-10 bg-green-800 text-3xl h-10 flex justify-center items-center rounded-full">
          <Node className="text-green-500" />
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
          className="bg-black w-10 text-3xl h-10 flex justify-center items-center rounded-full">
          <EX />
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
          className="bg-red-500 w-10 text-3xl h-10 flex justify-center items-center rounded-full">
          <Nest />
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
          className="bg-yellow-400 text-blue-600 w-10 text-3xl h-10 flex justify-center items-center rounded-full">
          <Py />
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
          className="bg-blue-600 w-10 text-3xl h-10 flex justify-center items-center rounded-full">
          <Mui />
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
          className="bg-green-600 w-10 text-3xl h-10 flex justify-center items-center rounded-full">
          <DB />
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
          className="bg-blue-600  w-10 text-3xl h-10 flex justify-center items-center rounded-full">
          <Sql />
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
          className="bg-orange-600 w-10 text-3xl h-10 flex justify-center items-center rounded-full">
          <Git />
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
          className="bg-[#fdad16] text-black w-10 text-3xl h-10 flex justify-center items-center rounded-full">
          <Linux />
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
          className="bg-orange-600 w-10 text-3xl h-10 flex justify-center items-center rounded-full">
          <HTML />
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
          className="bg-blue-600 w-10 text-3xl h-10 flex justify-center items-center rounded-full">
          <Css />
        </motion.div>
      </div>
    </div>
  );
};

export default TechnicalSkills;
