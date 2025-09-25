import React from "react";
import Image from "next/image";
import { RajuImg, GoLinkIcon } from "@/assets/images";

export const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section
      id="about"
      className="bg-[#F0F0F0] min-h-[75vh] md:h-[65vh] rounded-b-[3rem] flex justify-center items-center px-4"
    >
      <div className="w-full max-w-[550px] flex flex-col justify-center items-center gap-6 sm:gap-4">
        <div className="group w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 bg-white rounded-full relative shadow p-1">
          <Image
            src={RajuImg}
            alt=""
            width={500}
            height={500}
            className="rounded-full object-cover"
          />
          <button className="absolute top-6 sm:top-7 md:top-8 -right-16 sm:-right-18 md:-right-20 -rotate-6 bg-white rounded-full w-max px-2 py-1 text-xs sm:text-sm group-hover:rotate-0 transition-all duration-300">
            Niranjan Raju
          </button>
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-[#252525] leading-snug">
          Building digital <br /> products, brands, and <br /> experience.
        </h1>

        <button
          onClick={() => scrollToSection("connect")}
          className="group bg-[#252525] px-4 py-2 text-white text-sm rounded-full font-medium flex items-center justify-center gap-2 cursor-pointer"
        >
          Contact Me
          <Image
            src={GoLinkIcon}
            alt=""
            width={15}
            height={15}
            className="invert group-hover:rotate-45 transition-all duration-300"
          />
        </button>
      </div>
    </section>
  );
};
