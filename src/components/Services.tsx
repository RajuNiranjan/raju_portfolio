import React from "react";

export const Services = () => {
  return (
    <section className="h-[45vh] p-5 px-20 ">
      <h1 className="text-center text-4xl font-bold">
        Collaborate with brands and agencies <br /> to create impactful results.
      </h1>

      <div className="grid grid-cols-4 gap-4 ">
        <div className="w-44 h-44 transition-all duration-500 hover:bg-[#F0F0F0] p-2 rounded-md  flex flex-col gap-4 ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="size-12"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25V6ZM3.75 15.75A2.25 2.25 0 0 1 6 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 18v-2.25ZM13.5 6a2.25 2.25 0 0 1 2.25-2.25H18A2.25 2.25 0 0 1 20.25 6v2.25A2.25 2.25 0 0 1 18 10.5h-2.25a2.25 2.25 0 0 1-2.25-2.25V6ZM13.5 15.75a2.25 2.25 0 0 1 2.25-2.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-2.25A2.25 2.25 0 0 1 13.5 18v-2.25Z"
            />
          </svg>

          <h1 className="text-2xl font-bold">UX & UI</h1>
          <p className="text-xs">
            Desinging interfaces that are intractive, effecient, and enjoyable
            to use.
          </p>
        </div>
      </div>
    </section>
  );
};
