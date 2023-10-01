import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import imageLight from "../assets/logo-light.webp";
import imageDark from "../assets/logo-dark.webp";
import { useContext } from "react";
import { ThemeContext } from "../App";

const Contact = () => {
  const { Theme } = useContext(ThemeContext);
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
    <section className="padding max-w-7xl mx-auto relative z-0">
      <div
        className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
      >
        <div
          className="flex-[0.75] bg-[#f7f7f7] dark:bg-black-100 border-2 border-white dark:border-transparent p-8 rounded-2xl shadow-card dark:shadow-none"
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

            <button type="submit" className="btn mt-4">
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
              src={Theme === "dark" ? imageDark : imageLight}
              alt=""
              height={420}
              width={412}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
