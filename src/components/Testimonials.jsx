import { BiSend } from "react-icons/bi";
import { useState } from "react";
import { FaRegComment } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import testimonial1 from "../assets/testimonials/testimonial-1.webp";
import testimonial2 from "../assets/testimonials/testimonial-2.webp";
import testimonial3 from "../assets/testimonials/testimonial-3.webp";
import testimonial4 from "../assets/testimonials/testimonial-4.webp";
import testimonial5 from "../assets/testimonials/testimonial-5.webp";
import { toast } from "react-hot-toast";

import Portal from "./Portal";
import { IoMdClose } from "react-icons/io";

const Testimonials = () => {
  const { t } = useTranslation();
  const testimonials = [
    {
      key: -1,
      image: testimonial1,
      name: "Loic Durand",
      post: t("testimo.student"),
      message: t("testimo.loicMsg"),
    },
    {
      key: 0,
      image: testimonial2,
      name: "Merline Yassa",
      post: "Entrepreneur",
      message: t("testimo.merlineMsg"),
    },
    {
      key: 1,
      image: testimonial3,
      name: "Moustapha Aka",
      post: t("testimo.manager"),
      message: t("testimo.akaMsg"),
    },
    {
      key: 2,
      image: testimonial4,
      name: "Cyril feussi",
      post: t("testimo.student"),
      message: t("testimo.cyrilMsg"),
    },
    {
      key: 2,
      image: testimonial5,
      name: "Dimitri Mabon",
      post: t("testimo.devFront"),
      message: t("testimo.dimiMsg"),
    },
  ];
  const [visible, setVisible] = useState(false);

  return (
    <section className="w-full bg-[#f7f7f7] dark:bg-dark py-10">
      <div className="relative z-0 flex flex-col mx-auto testimonials padding max-w-7xl md:flex-row">
        <div className="relative p-5 md:h-[300px] h-fit w-full md:w-1/2 break-words">
          <p className="sectionSubText">{t("clientsReviews")}</p>
          <h2 className="sectionHeadText">{t("testimonials")}</h2>
          <p className="mb-3">{t("testimonialsText")}</p>
          <button
            onClick={() => setVisible(true)}
            type="button"
            className="btn mb-28 md:mb-0"
          >
            <span className="mr-2">{t("testimonial")}</span>
            <FaRegComment />
          </button>
          {visible && (
            <Portal setVisible={setVisible}>
              <div className="flex items-center justify-between w-full border-b-2 h-14 border-b-writing/20">
                <h1 className="text-writing dark:text-white border-b-writing/10">
                  {t("addTestimonial")}
                </h1>
                <span
                  onClick={() => setVisible(false)}
                  className="p-2 text-red-500 bg-red-300 rounded-full shadow-lg cursor-pointer dark:bg-red-500/30"
                >
                  <IoMdClose />
                </span>
              </div>
              <div className="flex flex-col justify-center gap-3 p-2 sm:w-[420px]">
                <label className="flex flex-col">
                  <span className="mb-2 font-medium text-writing dark:text-white">
                    {t("yourName")}
                  </span>
                  <input
                    type="text"
                    name="name"
                    placeholder="What's your name?"
                    className={`input-field`}
                  />
                </label>
                <label className="flex flex-col">
                  <span className="mb-2 font-medium text-writing dark:text-white">
                    {t("yourMessage")}
                  </span>
                  <textarea
                    rows={7}
                    name="message"
                    placeholder="What do you want to say?"
                    className={`input-field h-28 !rounded-3xl`}
                  />
                </label>
                <button
                  onClick={() => {
                    toast.success("Thank you ! 😄");
                    setVisible(false);
                  }}
                  className="btn"
                >
                  {t("send")} <BiSend className="ml-2" />
                </button>
              </div>
            </Portal>
          )}
        </div>
        <div className="outer relative flex justify-center items-center h-[300px] w-full md:w-1/2">
          {testimonials.map((testimonial, key) => (
            <div
              key={key}
              className="absolute flex items-center justify-around w-full gap-6 p-5 border-2 border-white shadow-lg opacity-0 pointer-events-none card max-w-fit bg-light dark:bg-tertiary dark:border-transparent dark:shadow-none rounded-xl"
              style={{
                "--delay": testimonial.key,
              }}
            >
              <div className="content">
                <div className="absolute w-24 h-24 p-1 bg-white left-3 rounded-xl shadow-card">
                  <img
                    className="w-full h-full mr-3 rounded-xl"
                    src={testimonial.image}
                    alt=""
                  />
                </div>
                <div className="ml-6 capitalize details">
                  <span className="name">{testimonial.name}</span>
                  <p className="">{testimonial.post}</p>
                  <p className="text-sm lowercase transition-all opacity-60 line-clamp-2 hover:line-clamp-5">
                    {testimonial.message}
                  </p>
                </div>
              </div>
              {/* <a className="h-8 btn dark:bg-primary" href="#">
              like <AiFillHeart />
            </a> */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
