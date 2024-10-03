import React from "react";
import Link from "next/link";
import sideMenuUserImg from "@/assets/sideMenuUserImg.png";
import Image from "next/image";
// import NavTextAnimation from "./NavTextAnimation/NavTextAnimation";
import { Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import GetInTouchButton from "../GetInTouch/GetInTouchButton";
import NavTextAnimation from "./NavTextAnimation";

const NavBar = () => {
  const year = new Date().getFullYear();

  return (
    <nav className="bg-[#004736] text-white font-medium sticky top-0 shadow-md z-50">
      <div className="relative flex items-center justify-between px-5 md:px-14 py-5">
        <div>
          <Link href="/" className="hidden sm:block">
            <NavTextAnimation />
          </Link>
        </div>
        <div>
          <ul className="hidden sm:flex items-center gap-4">
            <li>
              <Link href="#about-me">About me</Link>
            </li>
            <li>
              <Link href="#resume">Resume</Link>
            </li>
            <li>
              <Link href="#projects">Projects</Link>
            </li>
            <GetInTouchButton />
          </ul>

          <div className="md:hidden">
            <Sheet>
              <SheetTrigger>
                <Menu className="w-6 h-6 transition-all duration-300" />
              </SheetTrigger>
              <SheetContent
                side="left"
                className="p-0 flex flex-col justify-between md:hidden">
                <SheetHeader>
                  <SheetTitle>
                    <div className="flex w-full  items-center px-4  gap-2 mt-4">
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
                  </SheetTitle>
                  <SheetDescription>
                    <div className="flex flex-col gap-10 w-full">
                      <ul className="flex flex-col gap-5 items-end justify-center w-full">
                        {["About me", "Resume", "Projects", "Get in Touch"].map(
                          (text, i) => (
                            <Link
                              key={i}
                              href={`#${text.toLowerCase().replace(" ", "-")}`}>
                              <li key={i}>{text}</li>
                            </Link>
                          )
                        )}
                        <GetInTouchButton />
                      </ul>
                    </div>
                  </SheetDescription>
                </SheetHeader>
                <SheetFooter>
                  <div className="flex justify-center items-center py-4">
                    <small>&copy; {year}. All rights reserved.</small>
                  </div>
                </SheetFooter>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
