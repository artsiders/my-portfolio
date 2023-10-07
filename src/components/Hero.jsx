import { BsRocketTakeoff } from "react-icons/bs";
import ProfilePicture from "./ProfilePicture";

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
              Let&apos;s get sarted <BsRocketTakeoff className="ml-2" />
            </a>
          </div>
        </div>
        <div className="flex items-center justify-center w-full h-full max-w-full">
          <ProfilePicture />
        </div>
      </div>
    </header>
  );
};

export default Hero;
