import { AiOutlineMail } from "react-icons/ai";
import { BiLinkExternal } from "react-icons/bi";
import { FaLinkedinIn } from "react-icons/fa";
import { BsWhatsapp } from "react-icons/bs";
import { BsYoutube } from "react-icons/bs";
import profile from "../assets/profile.webp";

const Hero = () => {
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
            I&apos;m web developer, graphic designer, and online content
            creator. <br />
            <span className="lg:text-[23px] sm:text-[20px] xs:text-[16px] text-[14px] font-mono font-bold">
              {"<!--"} Ready to captivate your audience with stunning digital
              experiences? {"-->"}
            </span>
            <br className="hidden sm:block" />
          </p>
          <div className="flex gap-3">
            <a href="#overview" type="submit" className="mt-4 btn">
              About Me
            </a>
          </div>
        </div>
        <div className="flex items-center justify-center w-full h-full max-w-full">
          <div className="relative">
            <div className="z-10 profile-picture animate-updown-lg">
              <img
                className="relative z-20 pointer-events-none"
                src={profile}
                alt="salim-profile-image"
                width={420}
              />
              <a
                href="https://www.linkedin.com/in/art-sider/"
                target="_blanc"
                rel="noreferrer"
                className="z-0 cursor-pointer animate-updown-sm absolute flex xxs:text-md text-sm items-center h-10 gap-1 p-2 shadow-neomorphism dark:shadow-none hover:shadow-card bg-[#f7f7f7] dark:bg-tertiary/90 dark:hover:bg-tertiary border-2 border-white dark:border-b-tertiary dark:border-transparent rounded-xl w-fit top-10 left-10 justify-normal"
              >
                <FaLinkedinIn color="#2196f3" />
                <div>
                  <b>Salim</b>
                  <BiLinkExternal />
                </div>
              </a>
              <a
                href="https://wa.link/n4mjqu"
                target="_blanc"
                rel="noreferrer"
                className="z-20 cursor-pointer animate-updown-sm absolute flex xxs:text-md text-sm items-center h-10 gap-1 p-2 shadow-neomorphism dark:shadow-none hover:shadow-card bg-[#f7f7f7] dark:bg-tertiary/90 dark:hover:bg-tertiary border-2 border-white dark:border-b-tertiary dark:border-transparent rounded-xl w-fit top-1/2 right-0 justify-normal"
              >
                <BsWhatsapp color="green" />
                <div>
                  <p>+237</p>
                  <b>677 41 76 38</b>
                  <BiLinkExternal />
                </div>
              </a>
              <a
                href="https://www.youtube.com/@art-sider"
                target="_blanc"
                rel="noreferrer"
                className="z-20 cursor-pointer animate-updown-sm absolute flex xxs:text-md text-sm items-center h-10 gap-1 p-2 shadow-neomorphism dark:shadow-none hover:shadow-card bg-[#f7f7f7] dark:bg-tertiary/90 dark:hover:bg-tertiary border-2 border-white dark:border-b-tertiary dark:border-transparent rounded-xl w-fit bottom-0 right-16 justify-normal"
              >
                <BsYoutube color="#e01717" />
                <div>
                  <b>Art sider</b>
                  {/* <p>+7000 Abonnés</p> */}
                  <BiLinkExternal />
                </div>
              </a>
              <a
                href="mailto:salim.artsider@gmail.com"
                className="z-0 cursor-pointer animate-updown-sm absolute flex xxs:text-md text-sm items-center h-10 gap-1 p-2 shadow-neomorphism dark:shadow-none hover:shadow-card bg-[#f7f7f7] dark:bg-tertiary/90 dark:hover:bg-tertiary border-2 border-white dark:border-b-tertiary dark:border-transparent rounded-xl w-fit top-2/3 left-0 md:-left-6 justify-normal"
              >
                <AiOutlineMail color="#bc0b47" />
                <div>
                  <p>salim.artsider@gmail.com</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Hero;
