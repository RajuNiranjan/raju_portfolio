import Link from "next/link";
import React from "react";
import {
  MailIcon,
  CallIcon,
  LinkedIcon,
  GitHubIcon,
  LocationIcon,
} from "@/assets/images";
import Image from "next/image";

export const ContactMe = () => {
  const email = "rajuniranjan1910@gmail.com";
  const mobile = "(+91)-9849592791";
  const location =
    "Hanumaih Nagar, Koritepadu, Guntur, Andhra Pradesh - 522007";
  const year = new Date().getFullYear();

  return (
    <section
      id="connect"
      className="bg-[#F0F0F0] min-h-screen rounded-t-[3rem] px-40 space-y-20 py-10"
    >
      <h1 className="text-5xl md:text-7xl lg:text-9xl font-bold text-center">
        Contact Me
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Contact Info */}
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-2">
            <Image src={MailIcon} alt="Email" width={25} height={25} />
            <p>{email}</p>
          </div>
          <div className="flex items-center gap-2">
            <Image src={CallIcon} alt="Phone" width={25} height={25} />
            <p>{mobile}</p>
          </div>
          <div className="flex items-center gap-2">
            <Image src={LocationIcon} alt="Location" width={25} height={25} />
            <p>{location}</p>
          </div>
          <div className="flex items-center gap-4">
            <Link
              href="https://www.linkedin.com/in/RajuNiranjan"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image src={LinkedIcon} alt="LinkedIn" width={25} height={25} />
            </Link>
            <Link
              href="https://github.com/RajuNiranjan"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image src={GitHubIcon} alt="GitHub" width={20} height={20} />
            </Link>
          </div>
        </div>

        {/* Contact Form */}
        <form className="grid grid-cols-1 space-y-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="grid grid-cols-1 gap-4">
              <label htmlFor="first_name" className="text-xs">
                First Name*
              </label>
              <input
                id="first_name"
                name="first_name"
                type="text"
                required
                className="focus:outline-none border-b bg-transparent"
                placeholder="Niranjan"
              />
            </div>
            <div className="grid grid-cols-1 gap-4">
              <label htmlFor="last_name" className="text-xs">
                Last Name*
              </label>
              <input
                id="last_name"
                name="last_name"
                type="text"
                required
                className="focus:outline-none border-b bg-transparent"
                placeholder="Raju"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 gap-4">
            <label htmlFor="email_input" className="text-xs">
              Email*
            </label>
            <input
              id="email_input"
              name="email"
              type="email"
              required
              className="focus:outline-none border-b bg-transparent"
              placeholder="rajuniranjan1910@gmail.com"
            />
          </div>
          <div className="grid grid-cols-1 gap-4">
            <label htmlFor="message" className="text-xs">
              Message*
            </label>
            <textarea
              id="message"
              name="message"
              required
              className="focus:outline-none border-b bg-transparent resize-none"
              placeholder="Hi, Niranjan....."
            />
          </div>
          <button
            type="submit"
            className="bg-[#252525] text-[#FFFFFF] text-xs rounded-full px-4 py-2 w-24 h-8 hover:bg-black transition-colors"
          >
            Submit
          </button>
        </form>
      </div>

      <small className="block text-center">
        &copy; {year} Template by Niranjan Raju
      </small>
    </section>
  );
};
