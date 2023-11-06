import { FaTiktok } from "react-icons/fa";
import { ImWhatsapp } from "react-icons/im";
import { FaLinkedinIn } from "react-icons/fa";
import { BsGithub } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { BsYoutube } from "react-icons/bs";
function Footer() {
  return (
    <footer className="flex flex-col items-center text-center text-white bg-[#F7F7F7] dark:bg-tertiary">
      <div className="container pt-9">
        <div className="flex justify-center mb-9 social-icons">
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.youtube.com/@art-sider"
            className="mr-9 text-red-600 dark:text-red-600 dark:bg-dark dark:shadow-none dark:hover:before:bg-tertiary/50 dark:hover:before:shadow-none"
          >
            <BsYoutube />
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.facebook.com/SalimArtSider"
            className="mr-9 text-blue-600 dark:bg-dark dark:shadow-none dark:hover:before:bg-tertiary/50 dark:hover:before:shadow-none"
          >
            <BsFacebook />
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/artsiders/"
            className="mr-9 text-gray-500 dark:bg-dark dark:shadow-none dark:hover:before:bg-tertiary/50 dark:hover:before:shadow-none"
          >
            <BsGithub />
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/art-sider/"
            className="mr-9 text-blue-500 dark:bg-dark dark:shadow-none dark:hover:before:bg-tertiary/50 dark:hover:before:shadow-none"
          >
            <FaLinkedinIn />
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://wa.link/n4mjqu"
            className="mr-9 text-green-600 dark:bg-dark dark:shadow-none dark:hover:before:bg-tertiary/50 dark:hover:before:shadow-none"
          >
            <ImWhatsapp />
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.tiktok.com/@artsider99"
            className="text-pink-700 dark:bg-dark dark:shadow-none dark:hover:before:bg-tertiary/50 dark:hover:before:shadow-none"
          >
            <FaTiktok />
          </a>
        </div>
      </div>

      <div className="w-full p-4 pb-20 sm:pb-32 text-center bg-light dark:bg-dark text-neutral-700 dark:text-neutral-200 dark:shadow-none dark:hover:before:bg-tertiary/50 dark:hover:before:shadow-none">
        © 2023 Copyright:
        <a
          target="_blank"
          rel="noreferrer"
          className="font-bold text-writing dark:text-white/80"
          href="/"
        >
          {" "}
          ART SIDER - Salim
        </a>
      </div>
    </footer>
  );
}

export default Footer;
