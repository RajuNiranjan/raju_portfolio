import React from "react";
import Marquee from "react-fast-marquee";
import Image from "next/image";
import {
  ReactIcon,
  NextJSIcon,
  TypeScriptIcon,
  JavaScriptIcon,
  ReduxIcon,
  TailwindCSSIcon,
  NodeJSIcon,
  MongoDBIcon,
  PgSQLIcon,
  RedisIcon,
  DockerIcon,
  ViteIcon,
  NestJSIcon,
  HTMLIcon,
  CSSIcon,
  LinuxIcon,
  BootStrapIcon,
} from "@/assets/images";

export const Skills = () => {
  const skillItems = [
    { name: "React", icon: ReactIcon },
    { name: "Next.js", icon: NextJSIcon },
    { name: "TypeScript", icon: TypeScriptIcon },
    { name: "JavaScript", icon: JavaScriptIcon },
    { name: "Redux", icon: ReduxIcon },
    { name: "Tailwind CSS", icon: TailwindCSSIcon },
    { name: "Node.js", icon: NodeJSIcon },
    { name: "MongoDB", icon: MongoDBIcon },
    { name: "PostgreSQL", icon: PgSQLIcon },
    { name: "Redis", icon: RedisIcon },
    { name: "Docker", icon: DockerIcon },
    { name: "Vite", icon: ViteIcon },
    { name: "NestJS", icon: NestJSIcon },
    { name: "HTML5", icon: HTMLIcon },
    { name: "CSS3", icon: CSSIcon },
    { name: "Linux", icon: LinuxIcon },
    { name: "BootStrap", icon: BootStrapIcon },
  ];

  return (
    <section
      id="skills"
      className="space-y-6 px-4 sm:px-10 md:px-20 h-[50vh] flex flex-col justify-center items-center"
    >
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-black">
        Skills
      </h1>

      <Marquee
        className="flex items-center gap-6 sm:gap-10 md:gap-14"
        speed={50}
        gradient={false}
      >
        {skillItems.map((item, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center justify-center mx-2 sm:mx-5"
          >
            <div className="flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-white/20 backdrop-blur-md border border-gray-200 shadow-md hover:shadow-lg transition">
              <Image
                src={item.icon}
                alt={item.name}
                width={30}
                height={30}
                className="object-contain sm:w-10 sm:h-10"
              />
            </div>
            <span className="mt-1 sm:mt-2 text-xs sm:text-sm font-medium text-gray-800 text-center">
              {item.name}
            </span>
          </div>
        ))}
      </Marquee>
    </section>
  );
};
