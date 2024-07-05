import Image from "next/image";
import React from "react";
import todo from "@/assets/projectImgs/todo.png";

const ProjectCard = () => {
  return (
    <div>
      <div className=" rounded-md overflow-hidden h-[250px] w-[650px] grid grid-cols-2">
        <div>
          <Image
            src={todo}
            alt=""
            width={500}
            height={500}
            className="w-full h-full object-cover "
          />
        </div>
        <div className="bg-black  bg-opacity-80 p-1 overflow-clip">
          <h1 className="font-bold text-white">Todo Web Application</h1>
          <small className="line-clamp-5 text-white text-opacity-30 hover:text-opacity-80 leading-[16px] ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
            dolor vitae fugiat velit sint odio sunt nemo sit nesciunt,
            temporibus omnis delectus reiciendis sapiente dignissimos voluptas
            atque dolorum deleniti libero?
          </small>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
