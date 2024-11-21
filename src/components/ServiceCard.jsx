import { useState } from "react";
import Portal from "./Portal";
import { IoMdClose } from "react-icons/io";

import { AiOutlineMail } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { BsWhatsapp } from "react-icons/bs";
import { BsYoutube } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { useTranslation } from "react-i18next";

const ServiceCard = ({ index, title, icon, description, image, video }) => {
  const [visible, setVisible] = useState(false);
  const { t } = useTranslation();
  return (
    <>
      <div
        className="relative cursor-pointer service-card bg-[#f7f7f7] dark:bg-tertiary rounded-[20px] p-4 min-h-[140px] flex justify-evenly items-center flex-col border-2 border-white dark:border-transparent w-full sm:w-[230px]"
        data-aos="fade-up"
        data-aos-delay={index * 50}
        onClick={() => setVisible(true)}
      >
        <img
          loading="lazy"
          src={icon}
          alt="web-development"
          className="object-contain w-10 h-10 mb-3"
        />

        <h3 className="text-lg font-bold text-center text-writing dark:text-white">
          {title}
        </h3>
        <button className="link mt-2">{t("seeMore")}</button>
      </div>
      {visible && (
        <Portal setVisible={setVisible}>
          <div className="flex items-center justify-between w-full border-b-2 h-14 border-b-writing/20 p-5">
            <h1 className="text-writing dark:text-white border-b-writing/10 font-bold">
              {title}
            </h1>
            <span
              onClick={() => setVisible(false)}
              className="p-2 text-red-500 bg-red-300 rounded-full shadow-lg cursor-pointer dark:bg-red-500/30"
            >
              <IoMdClose />
            </span>
          </div>
          <div className="md:max-w-sm p-5">
            {
              video ? (
                <iframe
                  className="w-full mb-2 border-2 border-white rounded-md shadow-card dark:shadow-none dark:border-transparent"
                  width="100%"
                  height="250"
                  src={`${video}?autoplay=1`}
                  title="ARRÊTEZ DE REGARDER DES TUTORIELS DE PROGRAMMATION ❌"
                  rel="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; autoplay"
                  allowFullScreen
                ></iframe>
              ) :
                <img
                  loading="lazy"
                  src={image}
                  alt={`image-${title}`}
                  width={1366}
                  height={768}
                  className="w-full mb-2 h-fit border-2 border-white rounded-md shadow-card dark:shadow-none dark:border-transparent"
                  data-aos="fade-up"
                />
            }
            {description}
            <br />
            <span className="font-bold mt-4 block">{t("contactMe")}</span>
            <div className="flex flex-wrap items-center justify-center content-center gap-4 py-2">
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
    </>
  );
};
export default ServiceCard;
