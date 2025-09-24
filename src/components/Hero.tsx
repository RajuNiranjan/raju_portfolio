import React from "react";
import { RajuImg } from "@/assets/images";
import Image from "next/image";

export const Hero = () => {
  return (
    <section className="bg-[#F0F0F0] h-[65vh] rounded-b-[3rem] flex justify-center items-center">
      <div className="w-[550px] h-80 flex justify-center items-center flex-col gap-4">
        <div className="w-32 h-32 bg-white rounded-full relative shadow p-1 ">
          <Image
            src={RajuImg}
            alt=""
            width={500}
            height={500}
            className="rounded-full"
          />
          <button className="absolute top-8 -right-20 -rotate-6 bg-white rounded-full w-max px-2 py-1 text-sm ">
            Niranjan Raju
          </button>
        </div>
        <h1 className="text-5xl font-bold text-center text-[#252525] ">
          Building digital <br /> products, brands, and <br /> experience.
        </h1>
        <button className="bg-[#252525] px-2 py-1 w-max h-max text-[#FFFFFF] text-sm rounded-full font-medium ">
          Contact Me
        </button>
      </div>
    </section>
  );
};
