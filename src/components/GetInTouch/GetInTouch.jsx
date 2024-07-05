import React, { useState, useRef } from "react";
import emailjs from "emailjs-com";
import Link from "next/link";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import MailOutlineIcon from "@mui/icons-material/MailOutline";

const GetInTouch = () => {
  const [contactFormData, setContactFormData] = useState({
    from_name: "",
    from_email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(null); // State to hold success/error message

  const ref = useRef();

  const onChangeInput = (e) => {
    const { name, value } = e.target;
    setContactFormData({
      ...contactFormData,
      [name]: value,
    });
  };

  const handleSumbmitContactMeForm = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "service_lxk1x5p",
        "template_123pejo",
        ref.current,
        "7p9QWbUazD8Zh4Ztb"
      )
      .then(
        (result) => {
          console.log(result.text);
          setLoading(false);
          setMessage("Email sent successfully!");
          setContactFormData({
            from_name: "",
            from_email: "",
            message: "",
          });
        },
        (error) => {
          console.log(error.text);
          setLoading(false);
          setMessage("Failed to send email. Please try again later.");
        }
      );
  };

  return (
    <div className="w-full text-white h-full p-4 transition-all duration-500 grid grid-cols-1 md:grid-cols-2">
      <div className="flex flex-col justify-start items-center gap-4 ">
        <h1 className="font-londrina-outline  text-4xl  md:text-[54px] text-white font-medium tracking-wider">
          Contact Me
        </h1>
        <div className="flex justify-center items-center gap-4  h-14 w-max">
          <div className="h-10 w-10 text-red-500 hover:h-14 hover:w-14 transition-all duration-300 cursor-pointer bg-white flex justify-center items-center rounded-full">
            <a href="mailto:rajuniranjan1910@gmail.com">
              <MailOutlineIcon />
            </a>
          </div>
          <div className="h-10 w-10 text-blue-500   hover:h-14  hover:w-14 transition-all duration-300 cursor-pointer bg-white flex justify-center items-center rounded-full">
            <Link href="https://www.linkedin.com/in/raju-niranjan/">
              <LinkedInIcon />
            </Link>
          </div>
        </div>
      </div>
      <div>
        <form ref={ref} onSubmit={handleSumbmitContactMeForm}>
          <div className="flex flex-col gap-4">
            <div className="flex flex-col">
              <label htmlFor="from_name" className="text-white font-normal">
                User Name
              </label>
              <input
                required
                name="from_name"
                value={contactFormData.from_name}
                onChange={onChangeInput}
                type="text"
                className="h-14 rounded-md p-2 text-black  text-xl focus:outline-none"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="from_email" className="text-white font-normal">
                Email
              </label>
              <input
                required
                name="from_email"
                value={contactFormData.from_email}
                onChange={onChangeInput}
                type="email"
                className="h-14 rounded-md p-2 text-black text-xl focus:outline-none"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="message" className="text-white  font-normal">
                Message
              </label>
              <textarea
                required
                name="message"
                value={contactFormData.message}
                onChange={onChangeInput}
                className="md:h-40 resize-none p-2 rounded-md text-black  text-xl focus:outline-none"
                id=""
              />
            </div>
            <button
              type="submit"
              className="bg-yellow-500 text-black font-mono p-4 rounded-md text-2xl font-bold"
              disabled={loading}>
              {loading ? "Sending..." : "Send Message"}
            </button>
            {message && (
              <p
                className={`text-lg mt-4 ${
                  message.startsWith("Email sent")
                    ? "text-green-600"
                    : "text-red-600"
                }`}>
                {message}
              </p>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default GetInTouch;
