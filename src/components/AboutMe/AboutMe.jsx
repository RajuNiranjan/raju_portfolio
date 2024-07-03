import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import CallOutlinedIcon from "@mui/icons-material/CallOutlined";
import Link from "next/link";

const AboutMe = () => {
  return (
    <div className="md:h-[600px] bg-[#f6eee1] w-full p-4">
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="flex my-10 h-max flex-col gap-4 px-4  ">
          <div className="text-[34px] md:text-[54px]  font-bold font-serif">
            <h1>Hello,</h1>
            <h1>I&apos;m Niranjan !</h1>
          </div>
          <div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
              officia sequi, nesciunt, deleniti aperiam tenetur ea ratione
              recusandae ipsa itaque sit consequuntur. Aperiam nisi deleniti
              recusandae ipsam excepturi nesciunt? Enim.
            </p>
          </div>
          <div className="flex items-center gap-4">
            <div className="h-10 w-10 text-blue-500   hover:h-14  hover:w-14 transition-all duration-300 cursor-pointer bg-white flex justify-center items-center rounded-full">
              <Link href="">
                <LinkedInIcon />
              </Link>
            </div>
            <div className="h-10 w-10 hover:h-14 hover:w-14 transition-all duration-300 cursor-pointer bg-white flex justify-center items-center rounded-full">
              <Link href="">
                <GitHubIcon />
              </Link>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <div className="bottom-10 lg:-bottom-20 h-[450px] w-[320px]  md:w-[350px] bg-[#334b35] rounded-md shadow-md relative">
            <div>
              <button className="hidden sm:block absolute top-28 text-xs font-medium bg-[#fdad16] p-2 rounded-full w-max left-[-30px]">
                See Projects
              </button>
              <button className="hidden sm:block absolute text-xs font-medium bottom-28 bg-[#fdad16] p-2 rounded-full w-max right-[-30px]">
                Get in Touch
              </button>
              <div className="absolute h-40 w-40 bg-[#f6eee1] rounded-full top-14 left-20 lg:left-24" />
              <div className="absolute w-full h-[200px] bg-black bottom-[-120px] p-4 rounded-md">
                <h1 className="text-[#f6eee1] text-[44px] font-bold ">
                  Contact
                </h1>
                <ul className="text-[#f6eee1] flex justify-center gap-2  flex-col">
                  <li className="flex gap-2 items-center">
                    <MailOutlineIcon />
                    <span>rajuniranjan1910@gmail.com</span>
                  </li>
                  <li className="flex gap-2 items-center">
                    <CallOutlinedIcon />
                    <span>+91-9849592791</span>
                  </li>
                  <li className="flex gap-2 items-center">
                    <LocationOnOutlinedIcon />
                    <span>Hyderabad, Telangana.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
