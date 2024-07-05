import Link from "next/link";
import React, { useState, useEffect, useRef } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import sideMenuUserImg from "@/assets/sideMenuUserImg.png";
import Image from "next/image";
import GetInTouch from "../GetInTouch/GetInTouch";
import { motion, useAnimation, AnimatePresence } from "framer-motion";
import NavTextAnimation from "./NavTextAnimation/NavTextAnimation";

const NavBar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [showGetInTouch, setShowGetInTouch] = useState(false);
  const menuRef = useRef(null);
  const getInTouchRef = useRef(null);
  const year = new Date().getFullYear();
  const menuControls = useAnimation();
  const getInTouchControls = useAnimation();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        getInTouchRef.current &&
        !getInTouchRef.current.contains(event.target)
      ) {
        setShowMenu(false);
        setShowGetInTouch(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    if (showMenu || showGetInTouch) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [showMenu, showGetInTouch]);

  useEffect(() => {
    if (showMenu) {
      menuControls.start("open");
    } else {
      menuControls.start("closed");
    }
  }, [showMenu, menuControls]);

  useEffect(() => {
    if (showGetInTouch) {
      getInTouchControls.start("open");
    } else {
      getInTouchControls.start("closed");
    }
  }, [showGetInTouch, getInTouchControls]);

  const toggleGetInTouch = () => {
    setShowGetInTouch(!showGetInTouch);
  };

  const menuVariants = {
    open: {
      x: 0,
      transition: { type: "spring", stiffness: 50, damping: 10 },
    },
    closed: {
      x: "-100%",
      transition: { type: "spring", stiffness: 50, damping: 10 },
    },
  };

  const itemVariants = {
    open: (i) => ({
      x: 0,
      opacity: 1,
      transition: { delay: i * 0.05 },
    }),
    closed: (i) => ({
      x: -20,
      opacity: 0,
      transition: { delay: i * 0.05 },
    }),
  };

  const getInTouchVariants = {
    open: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 50, damping: 10 },
    },
    closed: {
      y: "100vh",
      opacity: 0,
      transition: { type: "spring", stiffness: 50, damping: 10 },
    },
  };

  return (
    <nav className="bg-[#004736] text-white font-medium sticky top-0 shadow-md z-50">
      <div className="relative flex items-center justify-between px-5 md:px-14 py-5">
        {/* MOBILE GET IN TOUCH */}
        <AnimatePresence>
          {showGetInTouch && (
            <motion.div
              ref={getInTouchRef}
              initial="closed"
              animate="open"
              exit="closed"
              variants={getInTouchVariants}
              className="absolute md:hidden w-full left-0 top-16 px-4"
            >
              <p
                onClick={() => setShowGetInTouch(false)}
                className="bg-black rounded-full h-7 w-7 flex justify-center items-center"
              >
                X
              </p>
              <GetInTouch />
            </motion.div>
          )}
        </AnimatePresence>
        <div>
          <Link href="/" className="hidden sm:block">
            <NavTextAnimation />
            {/* <h1 className="hidden sm:block cursor-pointer">Niranjan Raju</h1> */}
          </Link>
        </div>
        <div>
          <ul ref={menuRef} className="hidden sm:flex items-center gap-4">
            <li>
              <Link href="#about-me">About me</Link>
            </li>
            <li>
              <Link href="#resume">Resume</Link>
            </li>
            <li>
              <Link href="#work">Work</Link>
            </li>
            <motion.button
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              onClick={toggleGetInTouch}
              className="cursor-pointer"
              aria-label="Get in Touch"
            >
              <li className="relative bg-[#fdad16] text-black font-bold p-2 rounded-full">
                Get in Touch
              </li>
            </motion.button>
            {/* DESK TOP */}
            <AnimatePresence>
              {showGetInTouch && (
                <motion.div
                  ref={getInTouchRef}
                  initial="closed"
                  animate="open"
                  exit="closed"
                  variants={getInTouchVariants}
                  className="absolute hidden md:block w-full left-0 top-16 px-4"
                >
                  <GetInTouch />
                </motion.div>
              )}
            </AnimatePresence>
          </ul>
          <button
            className="sm:hidden transition-all duration-300 relative"
            onClick={() => setShowMenu(!showMenu)}
            aria-label="Toggle Menu"
          >
            {showMenu ? (
              <CloseIcon className="w-6 h-6 transition-all duration-300" />
            ) : (
              <MenuIcon className="w-6 h-6 transition-all duration-300" />
            )}
          </button>
          <AnimatePresence>
            {showMenu && (
              <motion.div
                ref={menuRef}
                initial="closed"
                animate="open"
                exit="closed"
                variants={menuVariants}
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
                      <NavTextAnimation />
                      <small>Full Stack Developer</small>
                    </div>
                  </div>
                  <ul className="flex flex-col gap-5 items-end justify-center w-full">
                    {["About me", "Resume", "Work", "Get in Touch"].map(
                      (text, i) => (
                        <Link
                          key={i}
                          href={`#${text.toLowerCase().replace(" ", "-")}`}
                          onClick={() => {
                            setShowMenu(false);
                            if (text === "Get in Touch") toggleGetInTouch();
                          }}
                          className={`${
                            text === "Get in Touch"
                              ? "bg-[#fdad16] text-black"
                              : "text-white shadow border border-r-0"
                          } p-2 rounded-l-full shadow-lg w-[80%]`}
                        >
                          <motion.li
                            custom={i}
                            initial="closed"
                            animate="open"
                            exit="closed"
                            variants={itemVariants}
                          >
                            {text}
                          </motion.li>
                        </Link>
                      )
                    )}
                  </ul>
                </div>
                <div className="flex justify-center items-center py-4">
                  <small>&copy; {year}. All rights reserved.</small>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
