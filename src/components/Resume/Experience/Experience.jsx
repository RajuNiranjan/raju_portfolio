import React from "react";

const ExperienceData = [
  {
    id: 1,
    time: "Jan 2024 - Present",
    companyName: "THUMBSTACK TECHNOLOGIES",
    role: "Front-End Developer Intern",
    description: [
      "Developed a user-friendly and responsive front-end for a full-stack e-commerce web application using Next.js and TypeScript.",
      "  Implemented state management using Redux Toolkit.",
      " Designed a visually appealing and intuitive UI with Tailwind CSS and Material UI.",
    ],
    technologies: [
      "Next.js",
      "Redux",
      "Typescript",
      "TailwindCSS",
      "Material UI",
    ],
  },
  {
    id: 2,
    time: "Oct 2023 - Jan 2024",
    companyName: "KLUBSTACK",
    role: "Front-End Developer Intern",
    description: [
      " Built a marketing tool using React.js, Next.js, and Tailwind CSS, with a focus on creating an interactive and engaging user interface.",
      " Designed and developed a highly interactive UI, enhancing user experience.",
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
    <div className="w-full h-full rounded-xl shadow-md text-black p-5  bg-yellow-600">
      <h1 className="text-4xl font-bold">Experience</h1>
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
                        className="bg-black text-white px-2 py-1 rounded-md">
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
