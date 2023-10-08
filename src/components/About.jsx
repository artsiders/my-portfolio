import { useState } from "react";
import { AiOutlineMessage } from "react-icons/ai";

import { services } from "../database";
import ServiceCard from "./ServiceCard";
import Portal from "./Portal";
import { IoMdClose } from "react-icons/io";

import { AiOutlineMail } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { BsWhatsapp } from "react-icons/bs";
import { BsYoutube } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";

const About = () => {
  const [visible, setVisible] = useState(false);
  return (
    <section
      id="overview"
      className="relative z-0 py-2 mx-auto padding max-w-7xl"
    >
      <div>
        <p className="sectionSubText">Introduction</p>
        <h2 className="sectionHeadText">Overview.</h2>
      </div>

      <p className="text-writing dark:text-secondary text-[17px] max-w-3xl leading-[30px]">
        <span className="block">
          Passionate Full Stack Web and Mobile Developer, specialized in
          interface ergonomics and web design. 🌟 Creates responsive and
          optimized experiences for mobile devices. 📱💻 Available for free
          consultations.
        </span>
        <button onClick={() => setVisible(true)} className="mt-6 btn">
          Contact me <AiOutlineMessage className="ml-2" />
        </button>
        {visible && (
          <Portal setVisible={setVisible}>
            <div
              data-aos="fade-up"
              className="relative flex flex-col gap-2 p-6 bg-white dark:border-2 dark:border-primary/25 dark:bg-dark dark:shadow-none h-fit w-fit rounded-3xl shadow-card max-w-[90%]"
            >
              <div className="flex items-center justify-between w-full border-b-2 h-14 border-b-writing/20">
                <h1 className="text-writing dark:text-white border-b-writing/10">
                  Contact Links
                </h1>
                <span
                  onClick={() => setVisible(false)}
                  className="p-2 text-red-500 bg-red-300 rounded-full shadow-lg cursor-pointer dark:bg-red-500/30"
                >
                  <IoMdClose />
                </span>
              </div>
              <div className="flex flex-wrap items-center justify-center gap-4 py-2 w-fll">
                <a
                  href="https://www.linkedin.com/in/art-sider/"
                  target="_blanc"
                  rel="noreferrer"
                  className="flex items-center justify-center w-12 h-12 transition-all border-2 border-blue-300 rounded-full cursor-pointer hover:shadow-lg dark:shadow-none dark:border-blue-500/20 hover:bg-blue-100 shadow-neomorphism"
                >
                  <FaLinkedinIn color="#2196f3" />
                </a>

                <a
                  href="https://www.youtube.com/@art-sider"
                  target="_blanc"
                  rel="noreferrer"
                  className="flex items-center justify-center w-12 h-12 transition-all border-2 border-red-300 rounded-full cursor-pointer hover:shadow-lg dark:shadow-none dark:border-red-500/20 hover:bg-red-100 shadow-neomorphism"
                >
                  <BsYoutube color="#e01717" />
                </a>

                <a
                  href="https://wa.link/n4mjqu"
                  target="_blanc"
                  rel="noreferrer"
                  className="flex items-center justify-center w-12 h-12 transition-all border-2 border-green-300 rounded-full cursor-pointer hover:shadow-lg dark:shadow-none dark:border-green-500/20 hover:bg-green-100 shadow-neomorphism"
                >
                  <BsWhatsapp color="green" />
                </a>

                <a
                  href="mailto:salim.artsider@gmail.com"
                  className="flex items-center justify-center w-12 h-12 transition-all border-2 border-red-200 rounded-full cursor-pointer hover:shadow-lg dark:shadow-none dark:border-red-500/20 hover:bg-red-100 shadow-neomorphism"
                >
                  <AiOutlineMail color="#bc0b47" />
                </a>

                <a
                  href="https://www.facebook.com/SalimArtSider"
                  target="_blanc"
                  rel="noreferrer"
                  className="flex items-center justify-center w-12 h-12 transition-all border-2 border-blue-300 rounded-full cursor-pointer hover:shadow-lg dark:shadow-none dark:border-blue-500/20 hover:bg-blue-100 shadow-neomorphism"
                >
                  <BsFacebook color="#2176ff" />
                </a>
              </div>
            </div>
          </Portal>
        )}
      </p>

      <div className="flex flex-wrap justify-center gap-4 mt-20 xs:gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </section>
  );
};

export default About;
