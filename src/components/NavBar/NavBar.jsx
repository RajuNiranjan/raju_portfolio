import Link from "next/link";
import React, { useState, useEffect, useRef } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import sideMenuUserImg from "@/assets/sideMenuUserImg.png";
import Image from "next/image";
import GetInTouch from "../GetInTouch/GetInTouch";

const NavBar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [showGetInTouch, setShowGetInTouch] = useState(false); // Renamed to setShowGetInTouch
  const menuRef = useRef(null);
  const getInTouchRef = useRef(null); // Ref for "Get in Touch" section
  const year = new Date().getFullYear();

  useEffect(() => {
    const handleClickOutside = (event) => {
      // Close menu if clicked outside
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setShowMenu(false);
      }
      // Close "Get in Touch" section if clicked outside
      if (
        getInTouchRef.current &&
        !getInTouchRef.current.contains(event.target)
      ) {
        setShowGetInTouch(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleGetInTouch = () => {
    setShowGetInTouch(true);
    setShowMenu(false);
  };

  return (
    <nav className=" bg-[#004736] text-white font-medium sticky top-0 shadow-md z-50">
      <div className="relative flex items-center justify-between px-5 md:px-14 py-5">
        {showGetInTouch && (
          <div
            ref={getInTouchRef}
            className="absolute md:hidden w-full left-0 -bottom-[100vh]  px-4"
          >
            <GetInTouch />
          </div>
        )}
        <div>
          <Link href="/">
            <h1 className="hidden md:block cursor-pointer">Niranjan Raju</h1>
          </Link>
        </div>
        <div>
          <ul ref={menuRef} className="hidden md:flex items-center gap-4">
            <li>
              <Link href="#about-me">About me</Link>
            </li>
            <li>
              <Link href="#resume">Resume</Link>
            </li>
            <li>
              <Link href="#work">Work</Link>
            </li>

            <button
              onClick={toggleGetInTouch}
              className="cursor-pointer"
              aria-label="Get in Touch"
            >
              <li className="relative bg-[#fdad16] text-black font-bold p-2 rounded-full">
                Get in Touch
              </li>
            </button>

            {showGetInTouch && (
              <div
                ref={getInTouchRef}
                className="absolute hidden md:block w-full left-0 -bottom-[100vh] px-4"
              >
                <GetInTouch />
              </div>
            )}
          </ul>
          <button
            className="md:hidden transition-all duration-300 relative"
            onClick={() => setShowMenu(!showMenu)}
            aria-label="Toggle Menu"
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
              className="absolute top-0 left-0 h-screen shadow-sm bg-[#004736] w-[60%] flex flex-col justify-between md:hidden"
            >
              <div className="flex flex-col gap-10">
                <div className="flex items-center px-4 justify-center gap-2 mt-4">
                  <Image
                    src={sideMenuUserImg}
                    alt=""
                    width={40}
                    height={40}
                    className="rounded-full"
                  />
                  <div>
                    <h1 className="text-[#fdad16] font-bold text-lg">
                      Niranjan Raju
                    </h1>
                    <small>Full Stack Developer</small>
                  </div>
                </div>{" "}
                {showGetInTouch && (
                  <div
                    ref={getInTouchRef}
                    className="absolute w-full left-0 -bottom-[100vh] px-4"
                  >
                    <GetInTouch />
                  </div>
                )}
                <ul className="flex flex-col gap-5 items-end justify-center w-full">
                  <li className="bg-[#fdad16] p-2 rounded-l-full shadow-lg text-black w-[80%]">
                    <Link href="#about-me" onClick={() => setShowMenu(false)}>
                      About me
                    </Link>
                  </li>
                  <li className="p-2 rounded-l-full text-white w-[80%]">
                    <Link href="#resume" onClick={() => setShowMenu(false)}>
                      Resume
                    </Link>
                  </li>
                  <li className="p-2 rounded-l-full text-white w-[80%]">
                    <Link href="#work" onClick={() => setShowMenu(false)}>
                      Work
                    </Link>
                  </li>
                  <li className="relative p-2 rounded-l-full text-white w-[80%]">
                    <button
                      onClick={toggleGetInTouch}
                      className="cursor-pointer"
                      aria-label="Get in Touch"
                    >
                      Get in Touch
                    </button>
                  </li>
                </ul>
              </div>
              <div className="flex justify-center items-center py-4">
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
