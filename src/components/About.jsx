import { useState } from "react";
import { AiOutlineMessage } from "react-icons/ai";

import contentCreator from "../assets/services/content-creator.webp";
import graphicDesigner from "../assets/services/graphic-designer.webp";
import mobile from "../assets/services/mobile-developer.webp";
import web from "../assets/services/web-developer.webp";

import contentCreatorIll from "../assets/services/illustration-content-creator.webp";
import graphicDesignerIll from "../assets/services/illustration-graphic-designer.webp";
import mobileIll from "../assets/services/illustration-mobile-developer.webp";
import webIll from "../assets/services/illustration-web-developer.webp";

import ServiceCard from "./ServiceCard";
import Portal from "./Portal";
import { IoMdClose } from "react-icons/io";

import { AiOutlineMail } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { BsWhatsapp } from "react-icons/bs";
import { BsYoutube } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation();

  const services = [
    {
      title: t("services.webDeveloper"),
      icon: web,
      image: webIll,
      description: t("services.webDevDesc"),
    },
    {
      title: t("services.graphicDesigner"),
      icon: graphicDesigner,
      image: graphicDesignerIll,
      description: t("services.graphicDesignerDesc"),
    },
    {
      title: t("services.mobileDeveloper"),
      icon: mobile,
      image: mobileIll,
      description: t("services.mobileDeveloperDesc"),
    },
    {
      title: t("services.contentCreator"),
      icon: contentCreator,
      image: contentCreatorIll,
      description: t("services.contentCreatorDesc"),
      video: "https://www.youtube.com/embed/WLCTjBgNJss?si=UlV_lZJD8nq3r2Sk"
    },
  ];

  const [visible, setVisible] = useState(false);
  return (
    <section
      id="overview"
      className="relative z-0 py-2 mx-auto padding max-w-7xl"
    >
      <div>
        <p className="sectionSubText">Introduction</p>
        <h2 className="sectionHeadText">{t("overview")}</h2>
      </div>

      <p className="text-writing dark:text-white-100 text-[17px] max-w-3xl leading-[30px]">
        <span className="block">{t("aboutMe")}</span>
        <button onClick={() => setVisible(true)} className="mt-6 btn">
          {t("contactMe")} <AiOutlineMessage className="ml-2" />
        </button>
        {visible && (
          <Portal setVisible={setVisible}>
            <div className="flex items-center justify-between w-full border-b-2 h-14 border-b-writing/20 p-6">
              <h1 className="text-writing dark:text-white border-b-writing/10">
                {t("contactLinks")}
              </h1>
              <span
                onClick={() => setVisible(false)}
                className="p-2 text-red-500 bg-red-300 rounded-full shadow-lg cursor-pointer dark:bg-red-500/30"
              >
                <IoMdClose />
              </span>
            </div>
            <div className="flex flex-wrap items-center justify-center content-center gap-4 p-6">
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
          </Portal>
        )}
      </p>

      <div className="flex flex-wrap justify-center gap-4 mt-20 xs:gap-10">
        {services.map((service, index) => (
          <ServiceCard key={index} index={index} {...service} />
        ))}
      </div>
    </section>
  );
};

export default About;
