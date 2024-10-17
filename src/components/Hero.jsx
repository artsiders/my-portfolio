import React from 'react';
import profile from "../assets/salim-toman-hero-portfolio.png";
import { useTranslation } from "react-i18next";

import { AiOutlineMail } from "react-icons/ai";
import { BiLinkExternal } from "react-icons/bi";
import { FaLinkedinIn } from "react-icons/fa";
import { BsFacebook, BsGithub, BsWhatsapp, BsYoutube } from "react-icons/bs";
import About from './About';

const Hero = () => {
  const { t } = useTranslation();

  // Fonction pour calculer la position de l'élément
  const calculatePosition = (angle, radius = 192) => {
    const x = Math.cos(angle * Math.PI / 180) * radius;
    const y = Math.sin(angle * Math.PI / 180) * radius;
    return { x, y };
  };

  return (
    <div className="relative w-screen h-[978px] md:h-[818px] xl:max-w-7xl m-auto pt-40 flex flex-col lg:grid lg:grid-cols-2 px-5">
      <div className='pt-44 hidden lg:block'>
        <About />
      </div>
      <div className='relative'>
        <div className="h-screen max-h-[820px] absolute md:top-0 w-full z-10 flex items-end md:justify-end">
          <img src={profile} alt="Profile" className="mx-auto w-96 lg:max-h-[820px]" />
          {/* for mobile */}
          <div
            className="md:hidden text-sm leading-6 flex justify-center z-20 cursor-pointer absolute bottom-10 m-auto w-full"
          >
            <figure className="relative w-[80%] flex flex-col p-3 shadow-neomorphism dark:shadow-none hover:shadow-card bg-[#f7f7f7] dark:bg-tertiary/90 dark:hover:bg-tertiary border-2 border-white dark:border-b-tertiary dark:border-transparent rounded-xl">
              <div className="flex items-center ml-12 justify-center mb-2">
                <svg className="w-4 h-4 text-yellow-500 me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
                <svg className="w-4 h-4 text-yellow-500 me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
                <svg className="w-4 h-4 text-yellow-500 me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
                <svg className="w-4 h-4 text-yellow-500 me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
                <svg className="w-4 h-4 text-yellow-500 me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
              </div>
              <figcaption className="flex items-center space-x-4">
                <img src="https://images.unsplash.com/photo-1632910121591-29e2484c0259?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw4fHxjb2RlcnxlbnwwfDB8fHwxNzEwMTY0NjIzfDA&ixlib=rb-4.0.3&q=80&w=1080" alt="" className="flex-none w-14 h-14 rounded-full object-cover" loading="lazy" decoding="async" />
                <div className="flex-auto">
                  <div className="text-base text-primary font-semibold">
                    Njikam Salim
                  </div>
                  <div className="dark:text-slate-300">
                    {t("experiences.webDeveloper")}
                  </div>
                </div>
              </figcaption>
            </figure>
          </div>
        </div>
        <div className="h-screen max-h-[820px] flex justify-center items-center absolute w-full ">
          <div className="relative w-[55vh] h-[55vh] flex justify-center items-center">
            {/* Cercle central */}
            <div className="absolute scale-75 inset-0 bg-transparent border-4 border-white dark:border-primary shadow-neomorphism dark:shadow-none rounded-full"></div>
            <div
              className="hidden md:block text-sm leading-6 z-0 cursor-pointer absolute"
              style={{
                transform: `translate(${calculatePosition(-50, 340).x}px, ${calculatePosition(-50, 240).y}px) translate(-20%, 60%)`,
              }}
            >
              <figure className="relative flex flex-col p-3 shadow-neomorphism dark:shadow-none hover:shadow-card bg-[#f7f7f7] dark:bg-tertiary/90 dark:hover:bg-tertiary border-2 border-white dark:border-b-tertiary dark:border-transparent rounded-xl">
                <div className="flex items-center ml-12 justify-center mb-2">
                  <svg className="w-4 h-4 text-yellow-500 me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                  </svg>
                  <svg className="w-4 h-4 text-yellow-500 me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                  </svg>
                  <svg className="w-4 h-4 text-yellow-500 me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                  </svg>
                  <svg className="w-4 h-4 text-yellow-500 me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                  </svg>
                  <svg className="w-4 h-4 text-yellow-500 me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                  </svg>
                </div>
                <figcaption className="flex items-center space-x-4">
                  <img src="https://images.unsplash.com/photo-1632910121591-29e2484c0259?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw4fHxjb2RlcnxlbnwwfDB8fHwxNzEwMTY0NjIzfDA&ixlib=rb-4.0.3&q=80&w=1080" alt="" className="flex-none w-14 h-14 rounded-full object-cover" loading="lazy" decoding="async" />
                  <div className="flex-auto">
                    <div className="text-base text-primary font-semibold">
                      Njikam Salim
                    </div>
                    <div className="dark:text-slate-300">
                      {t("experiences.webDeveloper")}
                    </div>
                  </div>
                </figcaption>
              </figure>
            </div>



            {/* LinkedIn - 72° */}
            <a
              href="https://www.linkedin.com/in/art-sider/"
              target="_blank"
              rel="noreferrer"
              className="z-20 hidden cursor-pointer absolute sm:flex text-[12px] xxs:text-sm items-center h-12 gap-1 p-2 shadow-neomorphism dark:shadow-none hover:shadow-card bg-[#f7f7f7] dark:bg-tertiary/90 dark:hover:bg-tertiary border-2 border-white dark:border-b-tertiary dark:border-transparent rounded-xl w-fit"
              style={{
                transform: `translate(${calculatePosition(45, 260).x}px, ${calculatePosition(45).y}px) translate(55%, -50%)`
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
              className="z-20 hidden cursor-pointer absolute sm:flex text-[12px] xxs:text-sm items-center h-12 gap-1 p-2 shadow-neomorphism dark:shadow-none hover:shadow-card bg-[#f7f7f7] dark:bg-tertiary/90 dark:hover:bg-tertiary border-2 border-white dark:border-b-tertiary dark:border-transparent rounded-xl w-fit"
              style={{
                transform: `translate(${calculatePosition(240, 260).x}px, ${calculatePosition(240).y}px) translate(-55%, -50%)`
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
              className="z-20 hidden cursor-pointer absolute sm:flex text-[12px] xxs:text-sm items-center h-12 gap-1 p-2 shadow-neomorphism dark:shadow-none hover:shadow-card bg-[#f7f7f7] dark:bg-tertiary/90 dark:hover:bg-tertiary border-2 border-white dark:border-b-tertiary dark:border-transparent rounded-xl w-fit"
              style={{
                transform: `translate(${calculatePosition(205, 240).x}px, ${calculatePosition(205).y}px) translate(-55%, -50%)`
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
              className="z-20 hidden cursor-pointer absolute sm:flex text-[12px] xxs:text-sm items-center h-12 gap-1 p-2 shadow-neomorphism dark:shadow-none hover:shadow-card bg-[#f7f7f7] dark:bg-tertiary/90 dark:hover:bg-tertiary border-2 border-white dark:border-b-tertiary dark:border-transparent rounded-xl w-fit"
              style={{
                transform: `translate(${calculatePosition(170, 240).x}px, ${calculatePosition(170).y}px) translate(-55%, -50%)`
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
              className="z-20 hidden cursor-pointer absolute sm:flex text-[12px] xxs:text-sm items-center h-12 gap-1 p-2 shadow-neomorphism dark:shadow-none hover:shadow-card bg-[#f7f7f7] dark:bg-tertiary/90 dark:hover:bg-tertiary border-2 border-white dark:border-b-tertiary dark:border-transparent rounded-xl w-fit"
              style={{
                transform: `translate(${calculatePosition(13, 240).x}px, ${calculatePosition(13).y}px) translate(55%, -50%)`
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
              className="z-20 hidden cursor-pointer absolute sm:flex text-[12px] xxs:text-sm items-center h-12 gap-1 p-2 shadow-neomorphism dark:shadow-none hover:shadow-card bg-[#f7f7f7] dark:bg-tertiary/90 dark:hover:bg-tertiary border-2 border-white dark:border-b-tertiary dark:border-transparent rounded-xl w-fit"
              style={{
                transform: `translate(${calculatePosition(135, 260).x}px, ${calculatePosition(135).y}px) translate(-55%, -50%)`
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
    </div>
  );
};

export default Hero;
