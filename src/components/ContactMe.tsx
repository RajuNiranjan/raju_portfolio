import Link from "next/link";
import React from "react";

export const ContactMe = () => {
  const email = "rajuniranjan1910@gmail.com";
  const mobile = 9849592791;
  const year = new Date().getFullYear();
  return (
    <section className="bg-[#F0F0F0] h-[65vh] rounded-t-[3rem] p-10 space-y-10 ">
      <h1 className="text-9xl font-bold text-center ">Contact Me</h1>

      <div className="grid grid-cols-2 gap-4">
        <div />
        <form className="gird grid-cols-1 space-y-10">
          <div className="grid grid-cols-2 gap-10">
            <div className="grid grid-cols-1 gap-4">
              <label htmlFor="first_name" className="text-xs">
                First Name*
              </label>
              <input
                name="first_name"
                type="text"
                className="focus:outline-none border-b"
                placeholder="Niranjan"
              />
            </div>
            <div className="grid grid-cols-1 gap-4">
              <label htmlFor="last_name" className="text-xs">
                Last Name*
              </label>
              <input
                name="last_name"
                type="text"
                className="focus:outline-none border-b"
                placeholder="Raju"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 gap-4">
            <label htmlFor="email" className="text-xs">
              Email*
            </label>
            <input
              name="email"
              type="email"
              className="focus:outline-none border-b"
              placeholder="rajuniranjan1910@gmail.com"
            />
          </div>
          <button className="bg-[#252525] text-[#FFFFFF] text-xs rounded-full px-2 py-1 w-20 h-8  ">
            Submit
          </button>
        </form>
      </div>

      <div className="grid grid-cols-2 gap-10">
        <div>
          <h1 className="text-xl font-bold">{email}</h1>
          <div className="text-xs">
            <p>Guntur, Andhra Pradesh</p>
            <p>522007</p>
            <small>&copy; {year} Template by Niranjan Raju</small>
          </div>
        </div>
        <div className="flex justify-center items-end flex-col gap-4">
          <h1 className="text-2xl font-bold">(+91)-{mobile}</h1>
          <div className="flex items-center justify-center gap-4">
            <Link href="https://www.linkedin.com/in/RajuNiranjan">
              LinkedIn
            </Link>
            <Link href="https://github.com/RajuNiranjan">GitHub</Link>
          </div>
        </div>
      </div>
    </section>
  );
};
