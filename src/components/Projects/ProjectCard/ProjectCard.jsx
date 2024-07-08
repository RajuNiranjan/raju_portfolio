import Image from "next/image";
import LaunchIcon from "@mui/icons-material/Launch";
import React from "react";
import todo from "@/assets/projectImgs/todo.png";
import klubstack from "@/assets/projectImgs/klubstack.png";
import mentorsklub from "@/assets/projectImgs/mentorsklub.png";
import tsEcomm from "@/assets/projectImgs/ts-ecomm.png";
import weather from "@/assets/projectImgs/weather.png";
import portfolio from "@/assets/projectImgs/portfolio.png";
import Link from "next/link";
// import { animate, motion, useMotionValue } from "framer-motion";
// import { useEffect, useState } from "react";
// import useMeasure from "react-use-measure";

const ProjectDetails = [
  {
    id: 1,
    title: "Mentorsklub",
    img: mentorsklub,
    descripton:
      " Designed and developed secure user registration and login functionality with JWT-based authentication, ensuring robust security and seamless user experience. Engineered CRUD operations for comprehensive user management, including specific subparts for mentee and mentor profiles, enhancing overall system organization and functionality.",
    gitUrl: "https://github.com/Abhisek0721/mentorsklub-frontend",
    demoUrl: "https://mentorsklub.vercel.app/",
  },
  {
    id: 2,
    title: "Klub Stack",
    img: klubstack,
    descripton:
      "Built a marketing tool klubstack using React.js, Next.js, and Tailwind CSS, with a focus on creating an interactive and engaging user interface. Designed and developed a highly interactive UI, enhancing user experience.",
    gitUrl: "",
    demoUrl: "https://app.klubstack.com/",
  },
  {
    id: 3,
    title: "E-Commerce Web App",
    img: tsEcomm,
    descripton:
      "Clean, easy-to-use navigation for effortless exploration of product categories and a consistent, visually appealing experience across all devices.• Implemented state management using Redux Toolkit, resulting in a 20% increase in userengagement Designed a visually appealing and intuitive UI with Tailwind CSS and Material UI. Reduced the page load times by 15% and enhancing overall application performance",
    gitUrl: "https://github.com/RajuNiranjan/ts-ecomm-front",
    demoUrl: "https://ts-ecomm-nine.vercel.app/",
  },
  {
    id: 3,
    title: "Personal Portfolio",
    img: portfolio,
    descripton:
      "Sleek Next.js portfolio showcasing creativity, powered by Tailwind CSS, ensuring seamless, responsive design excellence.",
    gitUrl: "https://github.com/RajuNiranjan/portfolio-2024",
    demoUrl: "https://rajuportfolio.vercel.app/",
  },
  {
    id: 4,
    title: "Weather Web App",
    img: weather,
    descripton:
      "Dynamic React weather app leveraging API data, delivering accurate forecasts with intuitive design, enhancing your daily planning effortlessly.",
    gitUrl: "https://github.com/RajuNiranjan/weather-app",
    demoUrl: "https://weather-app-jet-sigma.vercel.app/",
  },
  {
    id: 5,
    title: "Todo Web App",
    img: todo,
    descripton:
      "Developed a To-Do app using React and Tailwind CSS, enabling seamless CRUD operations. The app provides an intuitive interface for users to create, read, update, and delete tasks. This project highlights my skills in front-end development and efficient UI design.",
    gitUrl: "https://github.com/RajuNiranjan/todoapp",
    demoUrl: "https://todoapp-tan-iota.vercel.app/",
  },
];

const ProjectCard = () => {
  // const FAST_DURATION = 25;
  // const SLOW_DURATION = 75;

  // const [duration, setDuration] = useState(FAST_DURATION);
  // let [ref, { width }] = useMeasure();

  // const xTranslation = useMotionValue(0);

  // const [mustFinish, setMustFinish] = useState(false);
  // const [rerender, setRerender] = useState(false);

  // useEffect(() => {
  //   let controls;
  //   let finalPosition = -width / 2 - 8;

  //   if (mustFinish) {
  //     controls = animate(xTranslation, [xTranslation.get(), finalPosition], {
  //       ease: "linear",
  //       duration: duration * (1 - xTranslation.get() / finalPosition),
  //       onComplete: () => {
  //         setMustFinish(false);
  //         setRerender(!rerender);
  //       },
  //     });
  //   } else {
  //     controls = animate(xTranslation, [0, finalPosition], {
  //       ease: "linear",
  //       duration: duration,
  //       repeat: Infinity,
  //       repeatType: "loop",
  //       repeatDelay: 0,
  //     });
  //   }

  //   return controls?.stop;
  // }, [rerender, xTranslation, duration, width]);

  return (
    <main className="py-8  ">
      {/* <motion.div
        className="absolute left-0 flex gap-4"
        style={{ x: xTranslation }}
        ref={ref}
        onHoverStart={() => {
          setMustFinish(true);
          setDuration(SLOW_DURATION);
        }}
        onHoverEnd={() => {
          setMustFinish(true);
          setDuration(FAST_DURATION);
        }}> */}
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4">
        {ProjectDetails.map((item, index) => (
          <div
            key={index}
            className="rounded-md overflow-hidden h-full w-full grid grid-cols-1 sm:grid-cols-2"
          >
            <Link href={item.demoUrl}>
              <div className="overflow-hidden ">
                <Image
                  src={item.img}
                  alt=""
                  width={500}
                  height={500}
                  className="w-full h-full  transform  transition-transform duration-300 hover:scale-[1.05]"
                />
              </div>
            </Link>
            <div className="bg-black  bg-opacity-80 p-2 ">
              <div className="flex gap-1">
                <h1 className="font-bold text-white tracking-wider">
                  {item.title}
                </h1>
                <Link href={item.demoUrl}>
                  <LaunchIcon className="text-xs hover:text-sm transition-all duration-300 text-white opacity-50 hover:opacity-100" />
                </Link>
              </div>
              <small className="text-white lg:line-clamp-4 xl:line-clamp-6 text-opacity-30 hover:text-opacity-80 leading-[16px]">
                {item.descripton}
              </small>
            </div>
          </div>
        ))}
      </div>
      {/* </motion.div> */}
    </main>
  );
};

export default ProjectCard;
