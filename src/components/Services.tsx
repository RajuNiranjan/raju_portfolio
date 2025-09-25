import React from "react";
import { serviceData } from "@/utils/data";
import Image from "next/image";

export const Services = () => {
  return (
    <section
      id="services"
      className="min-h-[50vh] p-8 px-10 md:px-20 lg:px-40 bg-[#FFF]"
    >
      <h1 className="text-center text-3xl md:text-4xl font-bold mb-10">
        Collaborate with brands and agencies <br /> for impactful results
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {serviceData.map((service) => (
          <div
            key={service.id}
            className="flex flex-col items-center p-4 rounded-lg bg-white shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer"
          >
            <Image src={service.icon} alt="" width={35} height={35} />
            <h2 className="text-xl font-semibold mt-4">{service.title}</h2>
            <p className="text-sm text-gray-600 mt-2 text-center">
              {service.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};
