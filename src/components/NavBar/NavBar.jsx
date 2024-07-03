import Link from "next/link";
import React, { useState, useEffect, useRef } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import sideMenuUserImg from "@/assets/sideMenuUserImg.png";
import Image from "next/image";

const NavBar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const menuRef = useRef(null);
  const year = new Date().getFullYear();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setShowMenu(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuRef]);

  return (
    <nav className="bg-[#004736] text-white font-medium sticky top-0 shadow-md z-10">
      <div className="flex items-center justify-between px-5 md:px-14 py-5">
        <div>
          <Link href="">
            <h1 className="hidden md:block">Niranjan Raju</h1>
          </Link>
        </div>
        <div>
          <ul className="hidden md:flex items-center gap-4">
            <li>
              <Link href="">About me</Link>
            </li>
            <li>
              <Link href="">Resume</Link>
            </li>
            <li>
              <Link href="">Work</Link>
            </li>
            <li className="bg-yellow-500 text-black font-bold p-2 rounded-full">
              <Link href="">Get in Touch</Link>
            </li>
          </ul>
          <button
            className="md:hidden transition-all duration-300 relative"
            onClick={() => setShowMenu(!showMenu)}
          >
            {showMenu ? (
              <CloseIcon className="w-6 h-6 transition-all duration-300" />
            ) : (
              <MenuIcon className="w-6 h-6 transition-all duration-300" />
            )}
          </button>
          {showMenu && (
            <div
              ref={menuRef}
              className="absolute top-0 left-0 h-screen  shadow-sm bg-[#004736] w-[60%] flex flex-col justify-between  md:hidden"
            >
              <div className="flex flex-col gap-10">
                <div className=" flex items-center px-4 justify-center  gap-2 mt-4">
                  <Image
                    src={sideMenuUserImg}
                    alt=""
                    width={40}
                    height={40}
                    className="rounded-full"
                  />
                  <div>
                    <h1 className="text-yellow-500 font-bold text-lg">
                      Niranjan Raju
                    </h1>
                    <small>Full Stack Developer</small>
                  </div>
                </div>
                <ul className="flex flex-col gap-5 items-end justify-center w-full">
                  <li className="bg-yellow-500 p-2 rounded-l-full shadow-lg text-black w-[80%]">
                    <Link href="">About me</Link>
                  </li>
                  <li className=" p-2 rounded-l-full text-white w-[80%]">
                    <Link href="">Resume</Link>
                  </li>
                  <li className=" p-2 rounded-l-full text-white w-[80%]">
                    <Link href="">Work</Link>
                  </li>
                  <li className=" p-2 rounded-l-full text-white w-[80%]">
                    <Link href="">Get in Touch</Link>
                  </li>
                </ul>
              </div>
              <div className="flex justify-center items-center py-4  ">
                <small>&copy; {year}. All rights reserved.</small>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
