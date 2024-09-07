import React from 'react';
import profile from "../assets/salim-toman-hero portfolio.png";
import { useTranslation } from "react-i18next";

import { AiOutlineMail } from "react-icons/ai";
import { BiLinkExternal } from "react-icons/bi";
import { FaLinkedinIn } from "react-icons/fa";
import { BsFacebook, BsGithub, BsWhatsapp, BsYoutube } from "react-icons/bs";

const Hero = () => {
  const { t } = useTranslation();

  // Fonction pour calculer la position de l'élément
  const calculatePosition = (angle, radius = 192) => {
    const x = Math.cos(angle * Math.PI / 180) * radius;
    const y = Math.sin(angle * Math.PI / 180) * radius;
    return { x, y };
  };

  return (
    <div className="relative w-screen h-screen m-auto">
      <div className="h-screen absolute w-full z-10">
        <img src={profile} alt="Profile" className="w-auto m-auto h-screen object-cover" />
      </div>
      <div className="h-screen flex justify-center items-center absolute w-full ">
        <div className="relative w-[55vh] h-[55vh] flex justify-center items-center">
          {/* Cercle central */}
          <div className="absolute inset-0 bg-transparent border-4 border-white dark:border-primary shadow-neomorphism dark:shadow-none rounded-full"></div>

          {/* Titre - 0° */}
          <h1
            className="font-black sm:w-48 w-32 text-writing sm:text-clip dark:text-white xl:text-2xl text-xl absolute"
            style={{
              transform: `translate(${calculatePosition(-50, 240).x}px, ${calculatePosition(-50, 240).y}px)`,
            }}
          >
            {t("hi")} <span className="text-primary">Salim</span>
          </h1>

          {/* LinkedIn - 72° */}
          <a
            href="https://www.linkedin.com/in/art-sider/"
            target="_blank"
            rel="noreferrer"
            className="z-20 cursor-pointer absolute flex text-[12px] xxs:text-sm items-center h-12 gap-1 p-2 shadow-neomorphism dark:shadow-none hover:shadow-card bg-[#f7f7f7] dark:bg-tertiary/90 dark:hover:bg-tertiary border-2 border-white dark:border-b-tertiary dark:border-transparent rounded-xl w-fit"
            style={{
              transform: `translate(${calculatePosition(45).x}px, ${calculatePosition(45).y}px) translate(55%, -50%)`
            }}
          >
            <FaLinkedinIn color="#2196f3" />
            <span className="items-center hidden gap-1 380:flex">
              <b className='hidden'>Njikam Salim</b>
              <BiLinkExternal />
            </span>
          </a>

          {/* YouTube - 240° */}
          <a
            href="https://www.youtube.com/@art-sider"
            target="_blank"
            rel="noreferrer"
            className="z-20 cursor-pointer absolute flex text-[12px] xxs:text-sm items-center h-12 gap-1 p-2 shadow-neomorphism dark:shadow-none hover:shadow-card bg-[#f7f7f7] dark:bg-tertiary/90 dark:hover:bg-tertiary border-2 border-white dark:border-b-tertiary dark:border-transparent rounded-xl w-fit"
            style={{
              transform: `translate(${calculatePosition(240).x}px, ${calculatePosition(240).y}px) translate(-55%, -50%)`
            }}
          >
            <BsYoutube color="#e01717" />
            <span className="items-center hidden gap-1 380:flex">
              <b className='hidden' translate="no">Art sider</b>
              <BiLinkExternal />
            </span>
          </a>

          {/* Facebook - 205° */}
          <a
            href="https://www.facebook.com/SalimArtSider"
            target="_blank"
            rel="noreferrer"
            className="z-20 cursor-pointer absolute flex text-[12px] xxs:text-sm items-center h-12 gap-1 p-2 shadow-neomorphism dark:shadow-none hover:shadow-card bg-[#f7f7f7] dark:bg-tertiary/90 dark:hover:bg-tertiary border-2 border-white dark:border-b-tertiary dark:border-transparent rounded-xl w-fit"
            style={{
              transform: `translate(${calculatePosition(205).x}px, ${calculatePosition(205).y}px) translate(-55%, -50%)`
            }}
          >
            <BsFacebook color="#101eEE" />
            <span className="items-center hidden gap-1 380:flex">
              <b className='hidden' translate="no">Art sider</b>
              <BiLinkExternal />
            </span>
          </a>

          {/* Github - 170° */}
          <a
            href="https://github.com/artsiders"
            target="_blank"
            rel="noreferrer"
            className="z-20 cursor-pointer absolute flex text-[12px] xxs:text-sm items-center h-12 gap-1 p-2 shadow-neomorphism dark:shadow-none hover:shadow-card bg-[#f7f7f7] dark:bg-tertiary/90 dark:hover:bg-tertiary border-2 border-white dark:border-b-tertiary dark:border-transparent rounded-xl w-fit"
            style={{
              transform: `translate(${calculatePosition(170).x}px, ${calculatePosition(170).y}px) translate(-55%, -50%)`
            }}
          >
            <BsGithub color="#242424" />
            <span className="items-center hidden gap-1 380:flex">
              <b className='hidden' translate="no">Artsiders</b>
              <BiLinkExternal />
            </span>
          </a>

          {/* WhatsApp - 13° */}
          <a
            href="https://wa.link/n4mjqu"
            target="_blank"
            rel="noreferrer"
            className="z-20 cursor-pointer absolute flex text-[12px] xxs:text-sm items-center h-12 gap-1 p-2 shadow-neomorphism dark:shadow-none hover:shadow-card bg-[#f7f7f7] dark:bg-tertiary/90 dark:hover:bg-tertiary border-2 border-white dark:border-b-tertiary dark:border-transparent rounded-xl w-fit"
            style={{
              transform: `translate(${calculatePosition(13).x}px, ${calculatePosition(13).y}px) translate(55%, -50%)`
            }}
          >
            <BsWhatsapp color="green" />
            <span className="items-center hidden gap-1 380:flex">
              <b className='hidden'><span className='font-light'>+237</span> 677 41 76 38</b>
              <BiLinkExternal />
            </span>
          </a>

          {/* Email - 135° */}
          <a
            href="mailto:salim.artsider@gmail.com"
            className="z-20 cursor-pointer absolute flex text-[12px] xxs:text-sm items-center h-12 gap-1 p-2 shadow-neomorphism dark:shadow-none hover:shadow-card bg-[#f7f7f7] dark:bg-tertiary/90 dark:hover:bg-tertiary border-2 border-white dark:border-b-tertiary dark:border-transparent rounded-xl w-fit"
            style={{
              transform: `translate(${calculatePosition(135).x}px, ${calculatePosition(135).y}px) translate(-55%, -50%)`
            }}
          >
            <AiOutlineMail color="#bc0b47" />
            <span className="items-center hidden gap-1 380:flex">
              <b className='hidden'>salim.artsider@gmail.com</b>
              <BiLinkExternal />
            </span>
          </a>

        </div>
      </div>
    </div>
  );
};

export default Hero;
