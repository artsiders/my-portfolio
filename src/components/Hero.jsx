import { AiOutlineMail } from "react-icons/ai";
import { BiLinkExternal } from "react-icons/bi";
import { FaLinkedinIn } from "react-icons/fa";
import { BsWhatsapp } from "react-icons/bs";
import { BsYoutube } from "react-icons/bs";
import { FaCode } from "react-icons/fa";
import imageLight from "../assets/logo-light.webp";
import imageDark from "../assets/logo-dark.webp";
import { useContext } from "react";
import { ThemeContext } from "../App";

const Hero = () => {
  const { Theme } = useContext(ThemeContext);
  return (
    <header id="home" className="relative flex min-h-screen mx-auto">
      <div
        className={`inset-0 mt-20 mb-10 max-w-7xl mx-auto paddingX flex flex-col-reverse md:grid md:grid-cols-2 items-center md:items-start gap-10 justify-evenly`}
      >
        {/* <div className="absolute flex flex-col items-center justify-center mt-5">
          <div className="w-5 h-5 rounded-full bg-primary" />
          <div className="w-1 h-40 sm:h-80 violet-gradient" />
        </div> */}
        <div className="flex flex-col justify-center w-full h-full">
          <h1 className={`heroHeadText`}>
            Hi, I&apos;m <span className="text-primary">Salim</span>
          </h1>
          <p className={`heroSubText block mt-2`}>
            I&apos;m Full-stack Web developper and I&apos;ll take on the world !{" "}
            <br className="hidden sm:block" />
          </p>
          <div className="flex gap-3">
            <button type="submit" className="mt-4 btn">
              See More <FaCode className="ml-2" />
            </button>
          </div>
        </div>
        <div className="flex items-center justify-center w-full h-full max-w-full">
          <div className="relative">
            <img
              className="relative z-10 pointer-events-none animate-updown-lg"
              src={Theme === "dark" ? imageDark : imageLight}
              alt="salim-profile-image"
              width={420}
            />
            <a
              href="https://www.linkedin.com/in/art-sider/"
              target="_blanc"
              rel="noreferrer"
              className="cursor-pointer animate-updown-sm absolute flex items-center h-10 gap-1 p-2 shadow-neomorphism dark:shadow-none hover:shadow-card bg-[#f7f7f7] dark:bg-tertiary/90 dark:hover:bg-tertiary border-2 border-white dark:border-b-tertiary dark:border-transparent rounded-xl w-fit top-10 left-10 justify-normal"
            >
              <FaLinkedinIn color="#2196f3" />
              <b>Salim</b>
              <BiLinkExternal />
            </a>
            <a
              href="https://wa.link/n4mjqu"
              target="_blanc"
              rel="noreferrer"
              className="z-20 cursor-pointer animate-updown-sm absolute flex items-center h-10 gap-1 p-3 shadow-neomorphism dark:shadow-none hover:shadow-card bg-[#f7f7f7] dark:bg-tertiary/90 dark:hover:bg-tertiary border-2 border-white dark:border-b-tertiary dark:border-transparent rounded-xl w-fit top-1/2 right-0 justify-normal"
            >
              <BsWhatsapp color="green" />
              <p>+237</p>
              <b>677 41 76 38</b>
              <BiLinkExternal />
            </a>
            <a
              href="https://www.youtube.com/@art-sider"
              target="_blanc"
              rel="noreferrer"
              className="z-20 cursor-pointer animate-updown-sm absolute flex items-center h-10 gap-1 p-3 shadow-neomorphism dark:shadow-none hover:shadow-card bg-[#f7f7f7] dark:bg-tertiary/90 dark:hover:bg-tertiary border-2 border-white dark:border-b-tertiary dark:border-transparent rounded-xl w-fit bottom-0 left-0 justify-normal"
            >
              <BsYoutube color="#e01717" />
              <b>Art sider</b>
              <p>+7000 Abonnés</p>
              <BiLinkExternal />
            </a>
            <a
              href="mailto:salim.artsider@gmail.com"
              className="z-20 cursor-pointer animate-updown-sm absolute flex items-center h-10 gap-1 p-4 shadow-neomorphism dark:shadow-none hover:shadow-card bg-[#f7f7f7] dark:bg-tertiary/90 dark:hover:bg-tertiary border-2 border-white dark:border-b-tertiary dark:border-transparent rounded-xl w-fit top-2/3 left-0 md:-left-6 justify-normal"
            >
              <AiOutlineMail size={22} color="#bc0b47" />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Hero;
