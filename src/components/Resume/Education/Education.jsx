import React from "react";

const Education = () => {
  return (
    <div className=" text-white">
      <h1 className="text-4xl font-bold">Experience</h1>
      <div className="my-10">
        <ol className="relative border-s border-[#fdad16]">
          <li className="mb-10 ms-4 ">
            <div className="absolute w-3 h-3  rounded-full mt-0 -start-1.5 border border-[#fdad16] bg-[#fdad16] "></div>
            <div className="flex items-start gap-6 ">
              <time className=" text-md  w-max font-bold  leading-none text-white">
                2019 - 2023
              </time>
              <div className="-mt-2 ">
                <h3 className="text-xl font-semibold w-[300px] ">
                  Jawaharlal Nehru Technological University Kakinada
                </h3>
                <p className="mb-4 text-base font-normal">
                  Electrical and Electronics Engineering
                </p>
              </div>
            </div>
          </li>
          <li className="mb-10 ms-4 ">
            <div className="absolute w-3 h-3  rounded-full mt-0 -start-1.5 border border-[#fdad16] bg-[#fdad16] "></div>
            <div className="flex items-start gap-6 ">
              <time className=" text-md font-bold  leading-none text-white">
                2017 - 2029
              </time>
              <div className="-mt-2 ">
                <h3 className="text-xl font-semibold ">
                  Sri Gayatri Junior College
                </h3>
                <p className="mb-4 text-base font-normal">MPC</p>
              </div>
            </div>
          </li>{" "}
          <li className="mb-10 ms-4 ">
            <div className="absolute w-3 h-3  rounded-full mt-0 -start-1.5 border border-[#fdad16] bg-[#fdad16] "></div>
            <div className="flex items-start gap-6 ">
              <time className=" text-md font-bold  leading-none text-white">
                2016 - 2017
              </time>
              <div className="-mt-2 ">
                <h3 className="text-xl font-semibold ">Naveena High School</h3>
                <p className="mb-4 text-base font-normal">Class - X</p>
              </div>
            </div>
          </li>
        </ol>
      </div>
    </div>
  );
};

export default Education;
