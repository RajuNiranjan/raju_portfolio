import React from "react";
import TodoWebApp from "@/assets/projectImgs/todo.png";
import Image from "next/image";


const projectsData = [
  {
    id: 7,
    title: "myBOMMA",
    description:
      "Explore a cutting-edge movie platform crafted with Next.js, Node.js, Express.js, and MongoDB. Seamlessly manage and discover your favorite films through a user-friendly interface that adapts to all screens. Engage with movies like never before!",
    image: TodoWebApp,
    tag: ["All", "Web", "Mobile"],
    gitUrl: "https://github.com/RajuNiranjan/mybomma",
    previewUrl: "https://mybomma.vercel.app/",
  },
  {
    id: 5,
    title: "BigBag Ecommerce",
    description:
      "BigBag, an e-commerce hub using React.js and Tailwind CSS, offers cart and wishlist features. It categorizes items by gender (male, female, kids) and handles payments. it provides location-based services for smoother user interaction.",
    image: TodoWebApp,
    tag: ["All", "Web"],
    gitUrl: "https://github.com/RajuNiranjan/BigBagEcommerce",
    previewUrl: "https://big-bag-ecommerce.vercel.app/",
  },
  {
    id: 0,
    title: "Personal Portfolio Website",
    description:
      "Sleek Next.js portfolio showcasing creativity, powered by Tailwind CSS, ensuring seamless, responsive design excellence.",
    image: TodoWebApp,
    tag: ["All", "Web", "Mobile"],
    gitUrl: "https://github.com/RajuNiranjan/portfolio",
    previewUrl: "https://portfolio-ashy-two-49.vercel.app/#contact",
  },
  {
    id: 1,
    title: "Weather Website",
    description:
      "Dynamic React weather app leveraging API data, delivering accurate forecasts with intuitive design, enhancing your daily planning effortlessly.",
    image: TodoWebApp,
    tag: ["All", "Web", "Mobile"],
    gitUrl: "https://github.com/RajuNiranjan/weather-app",
    previewUrl: "https://weather-app-jet-sigma.vercel.app/",
  },
  {
    id: 3,
    title: "ToDo Website",
    description:
      "Dynamic React e-commerce site with CSS finesse, ensuring responsive design for seamless shopping experiences.",
    image: TodoWebApp,
    tag: ["All", "Web", "Mobile"],
    gitUrl: "https://github.com/RajuNiranjan/todoapp",
    previewUrl: "https://todoapp-tan-iota.vercel.app/",
  },
  {
    id: 4,
    title: "Ecommerce Website",
    description:
      "Dynamic React e-commerce site with Tailwind CSS finesse, ensuring responsive design for seamless shopping experiences.",
    image: TodoWebApp,
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Ankit-Mohanta/login-page-thumbstack",
    previewUrl: "https://login-page-thumbstack.vercel.app/",
  },
];

const ProjectCard = () => {
  return (
    <div className="">
      <h1 className="text-[54px] font-londrina-outline text-center font-medium ">
        Projects
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-3">
        {projectsData.map((item, index) => (
          <div key={index} className="relative w-full h-[250px] p-5">
            <div className="relative w-full h-full rounded-xl overflow-hidden">
              <Image
                src={TodoWebApp}
                alt="todo"
                width={500}
                height={500}
                className="w-full h-full transition-opacity duration-300 transform hover:opacity-50"
              />
              <div className="absolute top-0 left-0 w-full h-full text-white bg-black bg-opacity-30 flex justify-center items-center p-4 opacity-0 transition-opacity duration-300 hover:opacity-100">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Pariatur eaque eum ea nam delectus nisi sed magnam possimus
                reprehenderit! Ipsa commodi natus qui distinctio ab tempore
                consequatur labore excepturi illum!
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectCard;
