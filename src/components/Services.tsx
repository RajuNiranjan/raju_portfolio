import React from "react";
import { serviceData } from "@/utils/data";
import Image from "next/image";

export const Services = () => {
  return (
    <section
      id="services"
      className="min-h-[50vh] p-4 sm:p-8 md:px-20 lg:px-40 bg-[var(--color-primary)]"
    >
      <h1 className="text-center text-2xl sm:text-3xl md:text-4xl font-bold mb-8 sm:mb-10">
        Collaborate with brands and agencies <br /> for impactful results
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {serviceData.map((service) => (
          <div
            key={service.id}
            className="flex flex-col items-center p-4 rounded-lg bg-[var(--color-primary)] shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer"
          >
            <Image src={service.icon} alt="" width={35} height={35} />
            <h2 className="text-lg sm:text-xl font-semibold mt-4 text-center">
              {service.title}
            </h2>
            <p className="text-xs sm:text-sm text-[var(--color-secondary)] mt-2 text-center">
              {service.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};
