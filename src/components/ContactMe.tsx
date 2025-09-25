import Link from "next/link";
import React, { useState, useRef } from "react";
import emailjs from "emailjs-com";
import Image from "next/image";
import {
  MailIcon,
  CallIcon,
  LinkedIcon,
  GitHubIcon,
  LocationIcon,
} from "@/assets/images";
import { envConfig } from "@/utils/envConfig";

export const ContactMe: React.FC = () => {
  const { email, mobileNo, address, service_id, template_id, public_key } =
    envConfig;

  const year = new Date().getFullYear();
  const formRef = useRef<HTMLFormElement | null>(null);
  const [loading, setLoading] = useState(false);
  const [statusMsg, setStatusMsg] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatusMsg(null);

    const mergedData = {
      from_name: `${formData.first_name} ${formData.last_name}`,
      from_email: formData.email,
      message: formData.message,
    };

    try {
      await emailjs.send(service_id!, template_id!, mergedData, public_key);

      emailjs.send(service_id!, template_id!, mergedData, public_key!);

      setStatusMsg("Email sent successfully! Auto-reply sent.");
      setFormData({ first_name: "", last_name: "", email: "", message: "" });
    } catch (error) {
      console.error("Email error:", error);
      setStatusMsg("Failed to send email. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="connect"
      className="bg-[#F0F0F0] min-h-screen rounded-t-[3rem] px-4 sm:px-10 md:px-20 lg:px-40 py-10 space-y-12 sm:space-y-16"
    >
      <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-center">
        Contact Me
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="flex flex-col gap-6 text-sm sm:text-base">
          <div className="flex items-center gap-2">
            <Image src={MailIcon} alt="Email" width={20} height={20} />
            <p>{email}</p>
          </div>
          <div className="flex items-center gap-2">
            <Image src={CallIcon} alt="Phone" width={20} height={20} />
            <p>{mobileNo}</p>
          </div>
          <div className="flex items-center gap-2">
            <Image src={LocationIcon} alt="Location" width={20} height={20} />
            <p>{address}</p>
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
              <Image src={GitHubIcon} alt="GitHub" width={25} height={25} />
            </Link>
          </div>
        </div>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="grid grid-cols-1 gap-10"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-10">
            <div className="grid grid-cols-1 gap-2 sm:gap-4">
              <label htmlFor="first_name" className="text-xs sm:text-sm">
                First Name*
              </label>
              <input
                id="first_name"
                name="first_name"
                type="text"
                required
                value={formData.first_name}
                onChange={handleChange}
                className="focus:outline-none border-b bg-transparent py-1"
                placeholder="Niranjan"
              />
            </div>
            <div className="grid grid-cols-1 gap-2 sm:gap-4">
              <label htmlFor="last_name" className="text-xs sm:text-sm">
                Last Name*
              </label>
              <input
                id="last_name"
                name="last_name"
                type="text"
                required
                value={formData.last_name}
                onChange={handleChange}
                className="focus:outline-none border-b bg-transparent py-1"
                placeholder="Raju"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 gap-2 sm:gap-4">
            <label htmlFor="email_input" className="text-xs sm:text-sm">
              Email*
            </label>
            <input
              id="email_input"
              name="email"
              type="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="focus:outline-none border-b bg-transparent py-1"
              placeholder="rajuniranjan1910@gmail.com"
            />
          </div>

          <div className="grid grid-cols-1 gap-2 sm:gap-4">
            <label htmlFor="message" className="text-xs sm:text-sm">
              Message*
            </label>
            <textarea
              id="message"
              name="message"
              required
              value={formData.message}
              onChange={handleChange}
              className="focus:outline-none border-b bg-transparent resize-none py-1"
              placeholder="Hi, Niranjan....."
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="bg-[#252525] text-[#FFFFFF] text-xs sm:text-sm rounded-full px-4 py-2 w-28 h-9 hover:bg-black transition-colors"
          >
            {loading ? "Sending..." : "Submit"}
          </button>

          {statusMsg && (
            <p
              className={`text-sm mt-2 ${
                statusMsg.startsWith("Email sent")
                  ? "text-green-600"
                  : "text-red-600"
              }`}
            >
              {statusMsg}
            </p>
          )}
        </form>
      </div>

      <small className="block text-center text-xs sm:text-sm">
        &copy; {year} Template by Niranjan Raju
      </small>
    </section>
  );
};
