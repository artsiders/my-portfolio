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
          <img
            className="animate-updown"
            src={Theme === "dark" ? imageDark : imageLight}
            alt="salim-profile-image"
            width={420}
          />
        </div>
      </div>
    </header>
  );
};

export default Hero;
