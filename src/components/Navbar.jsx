import { IoLogoYoutube } from "react-icons/io";
import { BsFacebook } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { useState, useEffect, useContext } from "react";
import { content } from "../Content";
import { HiMenuAlt2 } from "react-icons/hi";
import { createElement } from "react";
import { BiMoon, BiSun } from "react-icons/bi";
import { ThemeContext } from "../App";

const Navbar = () => {
  const { nav } = content;
  const [showMenu, setShowMenu] = useState(false);
  const [active, setActive] = useState(0);
  const [scrollClass, setScrollClass] = useState("");

  const { Theme, SetTheme } = useContext(ThemeContext);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setScrollClass(
          "backdrop-blur-xl bg-light/10 dark:bg-dark/10 border-b-[1px] border-primary/30"
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
      localStorage.setItem("theme", "light");
      SetTheme("light");
    } else {
      localStorage.setItem("theme", "dark");
      SetTheme("dark");
    }
    document.documentElement.classList.toggle("dark");
  };

  return (
    <div className="w-full flex justify-center">
      <div
        className={`h-16 w-full fixed z-[999] ${scrollClass} flex justify-between items-center px-3 md:px-6`}
      >
        <div
          className="text-white sm:cursor-pointer top-4 left-4 z-[999] rounded-lg bg-primary dark:bg-tertiary p-2"
          onClick={() => setShowMenu(!showMenu)}
        >
          <HiMenuAlt2 size={22} />
        </div>
        <div className="flex gap-3 items-center">
          <div className="flex gap-3 px-3 py-[4px] rounded-full items-center bg-light/80 dark:bg-dark/50 h-fit">
            <a
              href="https://github.com/artsiders"
              target="_blank"
              className="sm:cursor-pointer right-4 z-[999]"
              rel="noreferrer"
            >
              <FaGithub />
            </a>
            <a
              href="https://youtube.com/@art-sider"
              target="_blank"
              className="sm:cursor-pointer right-4 z-[999] hover:text-red-700 transition-all"
              rel="noreferrer"
            >
              <IoLogoYoutube />
            </a>
            <a
              href="https://web.facebook.com/SalimArtSider/"
              target="_blank"
              className="sm:cursor-pointer right-4 z-[999] hover:text-blue-500 transition-all"
              rel="noreferrer"
            >
              <BsFacebook />
            </a>
          </div>
          <div
            className="sm:cursor-pointer right-4 z-[999] rounded-full bg-light/80 dark:bg-tertiary/50 p-2 hover:bg-primary hover:text-white"
            onClick={switchTheme}
          >
            {Theme === "dark" ? <BiSun size={16} /> : <BiMoon size={16} />}
          </div>
        </div>
        {/* <button className="right-20 px-4 fixed z-[999] sm:cursor-pointer top-4 rounded-lg bg-tertiary h-[44px]">
          Contact Me
        </button> */}
      </div>
      <nav
        className={`fixed 
        z-[999] 
        flex 
        items-center
        gap-5 
        bg-background/30 
        px-6 py-3 
        backdrop-blur-md 
        rounded-full 
        text-dark_primary
        border-b-[1px] border-primary/30
        duration-300 ${showMenu ? "bottom-10" : "bottom-[-100%]"}`}
      >
        {nav.map((item, key) => (
          <a
            key={key}
            href={item.link}
            onClick={() => setActive(key)}
            className={`text-xl p-2.5 rounded-full sm:cursor-pointer  ${
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
