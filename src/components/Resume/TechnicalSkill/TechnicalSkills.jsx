import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
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
import TextAnimation from "@/components/TextAnimation/TextAnimation";

const skillsData = [
  { id: 1, component: Reactjs, color: "bg-blue-400 rounded-md" },
  { id: 2, component: Next, color: "bg-black rounded-md" },
  { id: 3, component: JS, color: "bg-[#fdad16] rounded-md" },
  { id: 4, component: Ts, color: "bg-blue-400 rounded-md" },
  { id: 5, component: Redux, color: "text-white bg-violet-500 rounded-md" },
  { id: 6, component: Tailwind, color: "bg-blue-400 rounded-md" },
  { id: 7, component: Boot, color: "bg-violet-500 rounded-md" },
  { id: 8, component: Node, color: "bg-green-800 text-green-500 rounded-md" },
  { id: 9, component: EX, color: "bg-black rounded-md" },
  { id: 10, component: Nest, color: "bg-red-500 rounded-md" },
  { id: 11, component: Py, color: "bg-yellow-400 text-blue-600 rounded-md" },
  { id: 12, component: Mui, color: "bg-blue-600 rounded-md" },
  { id: 13, component: DB, color: "bg-green-600 rounded-md" },
  { id: 14, component: Sql, color: "bg-blue-600 rounded-md" },
  { id: 15, component: Git, color: "bg-orange-600 rounded-md" },
  { id: 16, component: Linux, color: "bg-[#fdad16] text-black rounded-md" },
  { id: 17, component: HTML, color: "bg-orange-600 rounded-md" },
  { id: 18, component: Css, color: "bg-blue-600 rounded-md" },
];

const skillsTextData = [
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

const shuffle = (array) => {
  let currentIndex = array.length,
    randomIndex;

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
};

const generateSquares = (isMounted) => {
  // Return the static order if not mounted to avoid hydration errors
  const data = isMounted ? shuffle(skillsData) : skillsData;
  return data.map((item) => (
    <motion.div
      key={item.id}
      layout
      transition={{ duration: 1.5, type: "spring" }}
      className={`w-24 h-24 gap-4 flex justify-center items-center ${item.color}`}
    >
      <item.component className="w-12 h-12" />
    </motion.div>
  ));
};

const ShuffleGrid = () => {
  const timeoutRef = useRef(null);
  const [squares, setSquares] = useState([]);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true); // Indicate that the component has mounted

    shuffleSquares();

    return () => clearTimeout(timeoutRef.current);
  }, []);

  useEffect(() => {
    if (isMounted) {
      setSquares(generateSquares(true)); // Generate shuffled squares after mounting
    }
  }, [isMounted]);

  const shuffleSquares = () => {
    setSquares(generateSquares(true));

    timeoutRef.current = setTimeout(shuffleSquares, 3000);
  };

  return (
    <div className="grid grid-cols-4 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-9 grid-rows-4 gap-4">
      {squares}
    </div>
  );
};

const TechnicalSkills = () => {
  return (
    <div className="flex flex-col items-start gap-4 p-5">
      <div className="text-[#fdad16]">
        <TextAnimation text="Technical-Skills" />
      </div>
      <div>
        <div className="flex flex-wrap gap-4">
          {skillsTextData.map((item, index) => (
            <motion.h1
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              key={index}
              className="bg-black px-4 py-1 rounded-full cursor-default w-max"
            >
              {item}
            </motion.h1>
          ))}
        </div>
      </div>
      <div className="flex flex-wrap gap-4">
        <ShuffleGrid />
      </div>
    </div>
  );
};

export default TechnicalSkills;
