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
        <div className="flex justify-center mb-9">
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.youtube.com/@art-sider"
            className="mr-9 text-neutral-800 dark:text-neutral-200 hover:text-red-600 dark:hover:text-red-600"
          >
            <BsYoutube />
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.facebook.com/SalimArtSider"
            className="mr-9 text-neutral-800 dark:text-neutral-200 hover:text-blue-600 dark:hover:text-blue-600"
          >
            <BsFacebook />
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/artsiders/"
            className="mr-9 text-neutral-800 dark:text-neutral-200 hover:text-black-200 dark:hover:text-black-200"
          >
            <BsGithub />
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/art-sider/"
            className="mr-9 text-neutral-800 dark:text-neutral-200 hover:text-blue-500 dark:hover:text-blue-500"
          >
            <FaLinkedinIn />
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://wa.link/n4mjqu"
            className="mr-9 text-neutral-800 dark:text-neutral-200 hover:text-green-900 dark:hover:text-green-900"
          >
            <ImWhatsapp />
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.tiktok.com/@artsider99"
            className="text-neutral-800 dark:text-neutral-200 hover:text-purple-700 dark:hover:text-purple-700"
          >
            <FaTiktok />
          </a>
        </div>
      </div>

      <div className="w-full p-4 pb-32 text-center bg-light dark:bg-dark text-neutral-700 dark:text-neutral-200">
        © 2023 Copyright:
        <a
          target="_blank"
          rel="noreferrer"
          className="font-bold text-writing dark:text-white/80"
          href="/"
        >
          {" "}
          SALIM NJIKAM
        </a>
      </div>
    </footer>
  );
}

export default Footer;