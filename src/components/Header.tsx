import Link from "next/link";
import React from "react";

export const Header = () => {
  const email = "rajuniranjan1910@gmail.com";
  const linkedin = "https://www.linkedin.com/in/RajuNiranjan";
  const github = "https://github.com/RajuNiranjan";
  return (
    <nav className="sticky top-0 z-50 h-14 w-full px-10 flex items-center justify-between ">
      <div className="flex items-center  gap-4">
        <h1>{email}</h1>
        <button className="bg-white  text-xs px-3 py-1 h-8 flex justify-center items-center font-medium rounded-full ">
          Copy
        </button>
        <button className="bg-white  text-xs px-3 py-1 h-8 flex justify-center items-center font-medium rounded-full ">
          Resume
        </button>
      </div>
      <div className="text-sm font-medium">
        <Link href={linkedin} target="_blank">
          LinkedIn{" "}
        </Link>{" "}
        /{" "}
        <Link href={github} target="_blank">
          GitHub
        </Link>
      </div>
    </nav>
  );
};
