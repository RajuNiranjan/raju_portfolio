import Link from "next/link";
import React from "react";

const NavBar = () => {
  return (
    <nav className="bg-[#004736] text-white font-medium">
      <div className="flex items-center justify-between px-14 py-5">
        <div>
          <Link href="">
            <h1 className="">Niranjan Raju</h1>
          </Link>
        </div>
        <div>
          <ul className="flex items-center gap-4">
            <li>
              <Link href="">About me</Link>
            </li>
            <li>
              <Link href="">Resume</Link>
            </li>
            <li>
              <Link href="">Work</Link>
            </li>
            <li className="bg-yellow-500 text-black font-bold  p-2 rounded-full">
              <Link href="">Get in Touch</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
