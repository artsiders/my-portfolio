import { BsRocketTakeoff } from "react-icons/bs";
import ProfilePicture from "./ProfilePicture";
import { useTranslation } from "react-i18next";
import { IoMdClose } from "react-icons/io";

const Hero = () => {
  const { t } = useTranslation();

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
            {t("hi")} <span className="text-primary">Salim</span>
          </h1>
          <div className={`heroSubText block mt-2`}>
            {t("iam")} <br />
            <span className="bg-[#f7f7f7] max-w-[calc(100vw_-_48px)] flex flex-col dark:bg-tertiary border-2 border-white dark:border-primary/20 shadow-card dark:shadow-none relative rounded-lg p-2 sm:text-[20px] xs:text-[16px] text-[14px] font-mono font-bold">
              <div className="flex flex-row gap-1 items-center bg-white dark:bg-primary/20 px-2 py-1 rounded-lg">
                <div className="bg-red-500 hover:bg-red-300 cursor-pointer h-3 w-3 rounded-full"></div>
                <div className="bg-yellow-500 hover:bg-yellow-300 cursor-pointer h-3 w-3 rounded-full"></div>
                <div className="bg-green-500 hover:bg-green-300 cursor-pointer h-3 w-3  rounded-full"></div>

                <div className="cursor-pointer h-9 ml-3 rounded-lg bg-[#f7f7f7] dark:bg-tertiary flex justify-center items-center p-2">
                  <span className="text-green-400 text-[14px]">Salim.tsx</span>{" "}
                  <IoMdClose className="ml-2 hover:bg-white dark:hover:bg-primary/20 rounded-lg p-1" />
                </div>
                <div className="hidden cursor-pointer h-9 hover:bg-[#f7f7f7] dark:hover:bg-tertiary/30 rounded-lg xxs:flex justify-center items-center p-2">
                  <span className="text-orange-200 text-[14px]">
                    Banane.tsx
                  </span>{" "}
                  <IoMdClose className="ml-2 hover:bg-white dark:hover:bg-primary/20 rounded-lg p-1" />
                </div>
              </div>
              <code className="dark:border-primary/20 block p-2">
                {"<!-- " + t("ready") + " -->"}
              </code>
            </span>
            <br className="hidden sm:block" />
          </div>
          <div className="flex gap-3">
            <a href="#overview" type="submit" className="btn mt-2">
              {t("letsgetsarted")} <BsRocketTakeoff className="ml-2" />
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
