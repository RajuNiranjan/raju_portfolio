import React, { useEffect, useRef } from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import CallOutlinedIcon from "@mui/icons-material/CallOutlined";
import Link from "next/link";
import Raju from "@/assets/Raju.png";
import Image from "next/image";
import GitLab from "@/assets/skillIcons/GitLab";
import { motion } from "framer-motion";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

const hoverTextStyle = {
  display: "inline-block",
  transition: "transform 0.2s, color 0.2s",
};

const hoverTextHoverStyle = {
  transform: "scale(1.2)",
  color: "#fdad16",
};

const BubbleText = ({ text }) => {
  const refs = useRef([]);

  useEffect(() => {
    const interval = setInterval(() => {
      refs.current.forEach((span, idx) => {
        setTimeout(() => {
          span.style.transform = hoverTextHoverStyle.transform;
          span.style.color = hoverTextHoverStyle.color;
        }, idx * 50);
        setTimeout(() => {
          span.style.transform = "";
          span.style.color = "";
        }, 1000 + idx * 50);
      });
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return text.split("").map((child, idx) => (
    <span
      className="text-xl tracking-wide"
      key={idx}
      ref={(el) => (refs.current[idx] = el)}
      style={hoverTextStyle}>
      {child}
    </span>
  ));
};

const AboutMe = () => {
  return (
    <div id="about-me" className="md:h-[600px] bg-[#f6eee1] w-full p-4">
      <div className="hidden md:block absolute top-14 font-londrina-outline text-[100px] tracking-[4px] font-medium text-yellow-600">
        <p>ABOUT ME</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="flex my-20 h-max flex-col gap-4 px-4">
          <div className="text-[34px] md:text-[54px] font-bold font-serif">
            <h1>Hello,</h1>
            <h1>I&apos;m Niranjan !</h1>
          </div>
          <div>
            <h1>
              Hello, I&apos;m Raju, a passionate{" "}
              <span className="font-bold">
                <BubbleText text="Full-Stack Developer" />
              </span>{" "}
              with expertise in React.js, Next.js, TailWindCSS, Redux, I craft
              intuitive web experiences that exceed user expectations. My skills
              span across the entire stack, including Node.js, Express.js and
              MongoDB, enabling me to architect scalable solutions. I thrive on
              continuous learning, collaboration, and delivering projects that
              innovate and transform digital experiences.
            </h1>
          </div>
          <div className="flex items-center gap-4 h-14 w-max">
            <div className="h-10 w-10 text-blue-500 hover:h-14 hover:w-14 transition-all duration-300 cursor-pointer bg-white flex justify-center items-center rounded-full">
              <Link href="https://www.linkedin.com/in/raju-niranjan/">
                <LinkedInIcon />
              </Link>
            </div>
            <div className="h-10 w-10 hover:h-14 hover:w-14 transition-all duration-300 cursor-pointer bg-white flex justify-center items-center rounded-full">
              <Link href="https://github.com/RajuNiranjan">
                <GitHubIcon />
              </Link>
            </div>
            <div className="h-10 w-10 hover:h-14 hover:w-14 transition-all duration-300 cursor-pointer bg-white flex justify-center items-center rounded-full">
              <Link href="https://gitlab.com/tnraju">
                <GitLab className="text-2xl text-orange-500" />
              </Link>
            </div>
            <Link href="/resume/resume.pdf" download="download">
              <button className="p-2 border border-yellow-500 text-yellow-500 hover:text-black hover:bg-yellow-500 transition-all duration-500 rounded-full">
                <ArrowDownwardIcon className="text-lg" />
                Download Resume
              </button>
            </Link>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <div className="bottom-10 lg:-bottom-20 h-[450px] w-[320px] md:w-[350px] bg-[#334b35] rounded-md shadow-md relative">
            <div>
              <Image
                className="z-10 absolute top-1 right-0"
                src={Raju}
                alt="user_Raju"
                width={300}
                height={300}
              />
              <motion.button
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                className="hidden sm:block absolute top-28 text-xs font-medium bg-[#fdad16] p-2 rounded-full w-max left-[-30px] z-40">
                <Link href="#work">See Projects</Link>
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                className="hidden sm:block absolute text-xs font-medium bottom-28 bg-[#fdad16] p-2 rounded-full w-max right-[-30px] z-40">
                Get in Touch
              </motion.button>
              <div className="absolute h-40 w-40 bg-[#f6eee1] rounded-full top-14 left-[70px] lg:left-24" />
              <div className="absolute w-full h-[200px] bg-black bottom-[-120px] p-4 rounded-md">
                <h1 className="text-[#f6eee1] text-[44px] font-bold">
                  Contact
                </h1>
                <ul className="text-[#f6eee1] flex justify-center gap-2 flex-col">
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
