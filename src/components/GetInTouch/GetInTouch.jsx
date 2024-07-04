import React, { useState, useRef } from "react";
import emailjs from "emailjs-com";

const GetInTouch = () => {
  const [contactFormData, setContactFormData] = useState({
    from_name: "",
    from_email: "",
    message: "",
  });

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
          setContactFormData({
            from_name: "",
            from_email: "",
            message: "",
          });
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="w-full h-[650px] bg-yellow-600 shadow-md border rounded-t-xl p-10 transition-all duration-500 grid grid-cols-1 md:grid-cols-2">
      <div>
        <h1 className="font-londrina-outline text-[54px] text-black font-medium tracking-wider">
          Contact Me
        </h1>
      </div>
      <div>
        <form ref={ref} onSubmit={handleSumbmitContactMeForm}>
          <div className="flex flex-col gap-4">
            <div className="flex flex-col">
              <label htmlFor="from_name" className="text-black font-normal">
                User Name
              </label>
              <input
                name="from_name"
                value={contactFormData.from_name}
                onChange={onChangeInput}
                type="text"
                className="h-14 rounded-md p-2 bg-[#334b35] text-white text-xl focus:outline-none"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="from_email" className="text-black font-normal">
                Email
              </label>
              <input
                name="from_email"
                value={contactFormData.from_email}
                onChange={onChangeInput}
                type="email"
                className="h-14 rounded-md p-2 bg-[#334b35] text-white text-xl focus:outline-none"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="message" className="text-black font-normal">
                Description
              </label>
              <textarea
                name="message"
                value={contactFormData.message}
                onChange={onChangeInput}
                className="h-40 resize-none p-2 rounded-md bg-[#334b35] text-white text-xl focus:outline-none"
                id=""
              />
            </div>
            <button
              type="submit"
              className="bg-[#334b35]  p-4 rounded-md text-xl font-bold"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default GetInTouch;
