import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import image from "../assets/logo.webp";

import { SectionWrapper } from "../hoc";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "service_r0jcplm",
        "template_1t76uxq",
        {
          form_name: form.name,
          to_name: "Salim",
          from_email: form.email,
          to_email: "salim.artsider@gmail.com",
          message: form.message,
        },
        "Jqq9AvwIuSjoMiA5c"
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);

          console.log(error);
          alert("Something went wrong.");
        }
      );
  };

  return (
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
    >
      <div
        className="flex-[0.75] bg-white shadow-card dark:bg-black-100 p-8 rounded-2xl"
        data-aos="fade-right"
      >
        <p className="sectionSubText">Contact .</p>
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-4"
        >
          <label className="flex flex-col">
            <span className="text-writing dark:text-white font-medium mb-2">
              Your Name
            </span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What's your name?"
              className="input-field"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-writing dark:text-white font-medium mb-2">
              Your email
            </span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="What's your email?"
              className="input-field"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-writing dark:text-white font-medium mb-2">
              Your Message
            </span>
            <textarea
              rows={7}
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What do you want to say?"
              className="input-field h-28"
            />
          </label>

          <button type="submit" className="btn">
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </div>

      <div
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
        data-aos="fade-left"
      >
        <div className="flex justify-center items-center w-full h-full p-3 lg:p-10">
          <img
            loading="lazy"
            className="max-w-full max-h-full"
            src={image}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
