import TextAnimation from "@/components/TextAnimations";
import React from "react";

const ExperienceData = [
  {
    id: 2,
    time: "Apr 2024 - Present",
    companyName: "FlyinFox Labs Pvt Ltd",
    role: "Software Developer",
    description: [
      "Developed an internal design system for User Authentication incorporating Dashboard tables and Refined search filters, enhancing user experience with advanced visualization capabilities.",
      "Implemented a Schedule and appointments management feature using Next.js, TypeScript, and Tamagui, optimizing frontend functionality.",
      "Designed and built and IPV4 to IPV6 conversion web application using React, JavaScript, CSS for seamless Networking transitions.",
    ],
    technologies: [
      "Next.js",
      "Zustand",
      "Typescript",
      "Tamgui",
      "Nest.js",
      "MongoDB",
    ],
  },
  {
    id: 1,
    time: "Jan 2024 - Apr 2024",
    companyName: "THUMBSTACK TECHNOLOGIES",
    role: "Front-End Developer Intern",
    description: [
      "Developed and maintained the front end of an e-commerce website using Next.js, Typescript, Tailwind CSS, ensuring a responsive and interactive user interface.",
      "Integrated Material-UI components for enhanced UI consistency and improved overall user experience across the platform.",
      "Utilized Redux Toolkit for efficient state management and Axios for handling API requires, optimizing data flow and improving performance.",
      "Collaborated with backend developers and followed Agile methodologies to deliver features on time, ensuring seamless integration between the front end and back end.",
    ],
    technologies: [
      "Next.js",
      "Redux",
      "Redux Toolkit",
      "Typescript",
      "TailwindCSS",
      "Material UI",
    ],
  },
  {
    id: 0,
    time: "Oct 2023 - Jan 2024",
    companyName: "KLUBSTACK",
    role: "Front-End Developer Intern",
    description: [
      "Built and optimized the front end of a marketing tool using React.js, Tailwind CSS and JavaScript, improving user experience.",
      "Implemented ApexCharts to visualize product reach and engagement through dynamic graphs, enabling real-time data monitoring for marketing insights.",
      "Utilized shadcn/ui to create sleek, user-friendly components, enhanced the visual design and usability of the tool.",
      "Leveraged Redux Toolkit for efficient state management, ensuring seamless data flow and real-time updates within the application",
    ],
    technologies: [
      "React.js",
      "Next.js",
      "JavaScript",
      "TailwindCSS",
      "Shadcn/ui",
    ],
  },
];

const Experience = () => {
  return (
    <div className="w-full max-h-[450px] overflow-auto rounded-xl shadow-md text-black p-5  bg-yellow-600">
      <div>
        <TextAnimation text="Experience" />
      </div>
      <div className="my-10">
        <ol className="relative border-s border-black">
          {ExperienceData.map((item, index) => (
            <li key={index} className="mb-10 ms-4 ">
              <div className="absolute w-3 h-3  rounded-full mt-0 -start-1.5 border border-black bg-black "></div>
              <div className="flex flex-col lg:flex-row  items-start  ">
                <time className=" text-md w-full lg:w-[220px] font-bold  leading-none text-black">
                  {item.time}
                </time>
                <div className="lg:-mt-2 w-full  ">
                  <h3 className="text-xl font-semibold">{item.companyName}</h3>
                  <p className="mb-4 text-base font-semibold">{item.role}</p>
                  <div>
                    {item.description.map((item, index) => (
                      <ul key={index}>
                        <li>&bull; {item}</li>
                      </ul>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-2 my-2">
                    {item.technologies.map((item, index) => (
                      <span
                        key={index}
                        className="bg-black text-white px-2 py-1 rounded-md"
                      >
                        &bull; {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default Experience;
