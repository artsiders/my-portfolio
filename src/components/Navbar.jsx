import { BiMenu } from "react-icons/bi";
import { BiChevronDown } from "react-icons/bi";
import { useState, useEffect, useContext, useRef } from "react";
import { HiMenuAlt2 } from "react-icons/hi";
import { createElement } from "react";
import { BiMoon, BiSun } from "react-icons/bi";
import { TbSmartHome } from "react-icons/tb";
import { BiUser } from "react-icons/bi";
import { RiServiceLine, RiProjectorLine } from "react-icons/ri";
import { MdOutlinePermContactCalendar } from "react-icons/md";
import { ThemeContext } from "../App";
import Cookies from "js-cookie";
import { useTranslation } from "react-i18next";
import fr from "../assets/langs-img/fr.png";
import en from "../assets/langs-img/en.png";

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const [showMenu, setShowMenu] = useState(false);
  const [active, setActive] = useState(0);
  const [scrollClass, setScrollClass] = useState("");
  const [lang, setLang] = useState(i18n.language);
  const selectLang = useRef(null);

  const { Theme, SetTheme } = useContext(ThemeContext);

  const nav = [
    {
      link: "#home",
      icon: TbSmartHome,
    },
    {
      link: "#overview",
      icon: BiUser,
    },
    {
      link: "#experience",
      icon: RiServiceLine,
    },
    {
      link: "#projects",
      icon: RiProjectorLine,
    },
    {
      link: "#contact",
      icon: MdOutlinePermContactCalendar,
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setScrollClass(
          "backdrop-blur-xl bg-light/10 dark:bg-dark/10 border-b-[1px] border-white dark:border-dark"
        );
      } else {
        setScrollClass("");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const switchTheme = () => {
    if (document.documentElement.classList.contains("dark")) {
      Cookies.set("theme", "light");
      SetTheme("light");
    } else {
      Cookies.set("theme", "dark");
      SetTheme("dark");
    }
    document.documentElement.classList.toggle("dark");
  };

  return (
    <div className="flex justify-center w-full">
      <div
        className={`h-16 fixed z-[999] ${scrollClass} flex justify-between items-center px-3 md:px-6 w-screen`}
      >
        <div
          className="shadow-neomorphism dark:shadow-none sm:cursor-pointer top-4 left-4 z-[999] rounded-lg  bg-[#f7f7f7]/50 dark:bg-dark/40 border-[1px] border-white dark:border-transparent p-2 hover:shadow-card dark:highlight-white/5"
          onClick={() => setShowMenu(() => !showMenu)}
        >
          {showMenu ? <HiMenuAlt2 size={22} /> : <BiMenu size={22} />}
        </div>
        <div className="flex items-center gap-3">
          <div
            className="relative"
            onClick={() => {
              selectLang.current.classList.toggle("hidden");
            }}
          >
            <button className="shadow-neomorphism capitalize dark:shadow-none text-xs leading-5 font-semibold bg-[#f7f7f7]/50 dark:bg-dark/40 border-[1px] border-white dark:border-transparent rounded-full py-1 px-3 flex items-center space-x-2 hover:shadow-card dark:highlight-white/5">
              {lang === "en" ? t("english") : t("french")}
              <BiChevronDown size={20} />
            </button>
            <div
              ref={selectLang}
              className="hidden capitalize absolute top-full right-px mt-1 py-2 w-40 rounded-lg bg-[#f7f7f7] shadow-none ring-1 ring-slate-900/5 text-sm leading-6 font-semibold text-slate-700 dark:bg-slate-800 dark:text-slate-300 dark:highlight-white/5 border-[1px] border-white dark:border-transparent"
            >
              <span
                className={`cursor-pointer hover:text-primary/60 flex items-center gap-2 px-3 py-1 ${
                  lang === "fr" ? "text-primary dark:text-primary" : ""
                }`}
                onClick={() => {
                  setLang("fr");
                  i18n.changeLanguage("fr");
                }}
              >
                <img src={fr} className="h-5" alt="fr" />
                {t("french")}
              </span>
              <span
                className={`cursor-pointer hover:text-primary/60 flex items-center gap-2 px-3 py-1 ${
                  lang === "en" ? "text-primary dark:text-primary" : ""
                }`}
                onClick={() => {
                  setLang("en");
                  i18n.changeLanguage("en");
                }}
              >
                <img src={en} className="h-5" alt="en" />
                {t("english")}
              </span>
            </div>
          </div>

          <div
            className="shadow-neomorphism dark:shadow-none sm:cursor-pointer right-4 z-[999] rounded-full bg-[#f7f7f7] dark:bg-tertiary/50 p-2 hover:shadow-card border-[1px] border-white dark:border-transparent"
            onClick={switchTheme}
          >
            {Theme === "dark" ? <BiSun size={16} /> : <BiMoon size={16} />}
          </div>
        </div>
      </div>
      <nav
        className={`fixed 
        z-20
        w-screen
        sm:w-fit
        justify-center
        flex 
        items-center
        xs:gap-3
        gap-2
        bg-light dark:bg-dark/30
        p-2
        dark:backdrop-blur-md
        rounded-t-2xl sm:rounded-full 
        text-dark_primary
        shadow-neomorphism
        dark:shadow-none
        border-[1px] border-white dark:border-tertiary
        duration-300 ${showMenu ? "bottom-0 sm:bottom-10" : "bottom-[-100%]"}`}
      >
        {nav.map((item, key) => (
          <a
            key={key}
            href={item.link}
            onClick={() => setActive(key)}
            className={`text-xl p-2.5 rounded-full sm:cursor-pointer hover:bg-primary hover:text-white transition-all  ${
              key === active && "bg-primary text-white"
            } `}
          >
            {createElement(item.icon)}
          </a>
        ))}
        {/* <a
            href=""
            onClick={(e) => e.preventDefault()}
            className={`borde text-xl p-2.5 sm:cursor-pointer border-solid border-l-[1px] pl-4 border-[#915EFF]`}
          >
            <BiSun />
          </a> */}
      </nav>
    </div>
  );
};

export default Navbar;
