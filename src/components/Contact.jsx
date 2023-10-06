import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import profile from "../assets/profile.webp";

import { AiOutlineMail } from "react-icons/ai";
import { BiLinkExternal } from "react-icons/bi";
import { FaLinkedinIn } from "react-icons/fa";
import { BsWhatsapp } from "react-icons/bs";
import { BsYoutube } from "react-icons/bs";

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
    <section id="contact" className="relative z-0 mx-auto padding max-w-7xl">
      <div
        className={`flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
      >
        <div className="flex-[0.75] bg-[#f7f7f7] dark:bg-black-100 border-2 border-white dark:border-transparent p-8 rounded-2xl shadow-card dark:shadow-none">
          <p className="sectionSubText">Contact .</p>
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="flex flex-col gap-4"
          >
            <label className="flex flex-col">
              <span className="mb-2 font-medium text-writing dark:text-white">
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
              <span className="mb-2 font-medium text-writing dark:text-white">
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
              <span className="mb-2 font-medium text-writing dark:text-white">
                Your Message
              </span>
              <textarea
                rows={7}
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="What do you want to say?"
                className="input-field h-28 !rounded-3xl"
              />
            </label>

            <button type="submit" className="mt-4 btn">
              {loading ? "Sending..." : "Send"}
            </button>
          </form>
        </div>

        <div className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]">
          <div className="flex items-center justify-center w-full h-full p-3 lg:p-10">
            <div className="z-10 profile-picture animate-updown-lg">
              <img
                loading="lazy"
                className="relative z-20 pointer-events-none"
                src={profile}
                alt="contact-image"
                width={420}
              />
              <a
                href="https://www.linkedin.com/in/art-sider/"
                target="_blanc"
                rel="noreferrer"
                className="z-20 cursor-pointer animate-updown-sm absolute flex text-[12px] xxs:text-sm items-center h-10 gap-1 p-2 shadow-neomorphism dark:shadow-none hover:shadow-card bg-[#f7f7f7] dark:bg-tertiary/90 dark:hover:bg-tertiary border-2 border-white dark:border-b-tertiary dark:border-transparent rounded-xl w-fit bottom-36 md:bottom-40 left-0 justify-normal"
              >
                <FaLinkedinIn color="#2196f3" />
                <b>Salim</b>
                <BiLinkExternal />
              </a>

              <a
                href="https://www.youtube.com/@art-sider"
                target="_blanc"
                rel="noreferrer"
                className="z-20 cursor-pointer animate-updown-sm absolute flex text-[12px] xxs:text-sm items-center h-10 gap-1 p-2 shadow-neomorphism dark:shadow-none hover:shadow-card bg-[#f7f7f7] dark:bg-tertiary/90 dark:hover:bg-tertiary border-2 border-white dark:border-b-tertiary dark:border-transparent rounded-xl w-fit bottom-24 md:bottom-28 left-0 justify-normal"
              >
                <BsYoutube color="#e01717" />
                <b>Art sider</b>
                {/* <p>+7000 Abonnés</p> */}
                <BiLinkExternal />
              </a>

              <a
                href="https://wa.link/n4mjqu"
                target="_blanc"
                rel="noreferrer"
                className="z-20 cursor-pointer animate-updown-sm absolute flex text-[12px] xxs:text-sm items-center h-10 gap-1 p-2 shadow-neomorphism dark:shadow-none hover:shadow-card bg-[#f7f7f7] dark:bg-tertiary/90 dark:hover:bg-tertiary border-2 border-white dark:border-b-tertiary dark:border-transparent rounded-xl w-fit bottom-12 md:bottom-16 left-0 justify-normal"
              >
                <BsWhatsapp color="green" />
                <p>+237</p>
                <b>677 41 76 38</b>
                <BiLinkExternal />
              </a>

              <a
                href="mailto:salim.artsider@gmail.com"
                className="z-20 cursor-pointer animate-updown-sm absolute flex text-[12px] xxs:text-sm items-center h-10 gap-1 p-2 shadow-neomorphism dark:shadow-none hover:shadow-card bg-[#f7f7f7] dark:bg-tertiary/90 dark:hover:bg-tertiary border-2 border-white dark:border-b-tertiary dark:border-transparent rounded-xl w-fit bottom-0 md:bottom-4 left-0 justify-normal"
              >
                <AiOutlineMail color="#bc0b47" />
                <p>salim.artsider@gmail.com</p>
                <BiLinkExternal />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
