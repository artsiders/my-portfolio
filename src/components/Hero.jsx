import { FaCode } from "react-icons/fa";
import Tilt from "react-tilt";
import image from "../assets/logo-light.webp";
import imageDark from "../assets/logo.webp";
import { useContext } from "react";
import { ThemeContext } from "../App";

const Hero = () => {
  const { Theme } = useContext(ThemeContext);
  return (
    <header id="home" className="relative w-full min-h-screen mx-auto flex">
      <div
        className={`inset-0 mt-20 mb-10 w-full max-w-7xl mx-auto paddingX flex flex-col-reverse md:grid md:grid-cols-2 items-center md:items-start gap-10 justify-evenly`}
      >
        {/* <div className="absolute flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-primary" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div> */}
        <div className="flex w-full h-full justify-center flex-col">
          <h1 className={`heroHeadText`}>
            Hi, I&apos;m <span className="text-primary">Salim</span>
          </h1>
          <p className={`heroSubText block mt-2`}>
            I&apos;m Full-stack Web developper and I&apos;ll take on the world !{" "}
            <br className="sm:block hidden" />
          </p>
          <div className="flex gap-3">
            <button type="submit" className="btn mt-4">
              See More <FaCode className="ml-2" />
            </button>
          </div>
        </div>
        <Tilt className="w-full h-full flex justify-center items-center">
          <img
            loading="lazy"
            className="w-full md:w-[420px] animate-updown"
            src={Theme === "dark" ? imageDark : image}
            alt=""
          />
        </Tilt>
      </div>
    </header>
  );
};

export default Hero;
