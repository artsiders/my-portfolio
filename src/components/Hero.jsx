import { BsRocketTakeoff } from "react-icons/bs";
import ProfilePicture from "./ProfilePicture";
import { useTranslation } from "react-i18next";
import { IoMdClose } from "react-icons/io";

const Hero = () => {
  const { t } = useTranslation();

  return (
    <header id="home" className="relative flex min-h-screen mx-auto">
      <div className="inset-0 flex flex-col-reverse items-center justify-between gap-10 mx-auto mt-20 mb-10 max-w-7xl paddingX md:grid md:grid-cols-2 md:items-start">
        {/* <div className="absolute flex flex-col items-center justify-center mt-5">
          <div className="w-5 h-5 rounded-full bg-primary" />
          <div className="w-1 h-40 sm:h-80 violet-gradient" />
        </div> */}
        <div className="flex flex-col justify-center w-full h-full">
          <h1 className="heroHeadText">
            {t("hi")} <span className="text-primary">Salim</span>
          </h1>
          <div className="block heroSubText">
            <span className="bg-[#f7f7f7]/30 backdrop-blur-sm my-4 leading-7 min-h-[calc(100%_-_100px)] max-w-[calc(100vw_-_48px)] flex flex-col dark:bg-tertiary/30 border-2 border-white dark:border-primary/20 shadow-card dark:shadow-none relative rounded-2xl p-2 xs:text-[16px] text-[14px] font-bold">
              <div className="flex flex-row items-center gap-1 px-2 py-1 bg-white dark:bg-primary/20 rounded-2xl">
                <div className="w-3 h-3 bg-red-500 rounded-full cursor-pointer hover:bg-red-300"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full cursor-pointer hover:bg-yellow-300"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full cursor-pointer hover:bg-green-300"></div>

                <div className="cursor-pointer h-9 ml-3 rounded-2xl bg-[#f7f7f7] dark:bg-tertiary flex justify-center items-center p-2">
                  <span className="text-[#74be79] text-[14px]">
                    AboutMe.tsx
                  </span>{" "}
                  <IoMdClose className="p-1 ml-2 hover:bg-white dark:hover:bg-primary/20 rounded-2xl" />
                </div>
                <div className="hidden cursor-pointer h-9 hover:bg-[#f7f7f7] dark:hover:bg-tertiary/30 rounded-2xl xxs:flex justify-center items-center p-2">
                  <span className="text-orange-200 text-[14px]">Other.tsx</span>{" "}
                  <IoMdClose className="p-1 ml-2 hover:bg-white dark:hover:bg-primary/20 rounded-2xl" />
                </div>
              </div>
              <code className="block p-2 dark:border-primary/20 font-code">
                <span className="text-pink-500">const</span> salim ={" "}
                <span className="text-[#74be79]">&quot;{t("iam")}&quot;</span>;
                <br />
                <span className="text-pink-500">console</span>.
                <span className="text-blue-500">log</span>(salim);
                <br />
                <span className="text-[#5c6370]/80">
                  {"/** " + t("ready") + " */"}
                </span>
              </code>
            </span>
            <a href="#overview" type="submit" className="mt-2 text-sm btn">
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
