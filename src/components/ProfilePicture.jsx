import { AiOutlineMail } from "react-icons/ai";
import { BiLinkExternal } from "react-icons/bi";
import { FaLinkedinIn } from "react-icons/fa";
import { BsWhatsapp } from "react-icons/bs";
import { BsYoutube } from "react-icons/bs";
import profile from "../assets/profile.webp";
import { IoMdClose } from "react-icons/io";

const ProfilePicture = () => {
  return (
    <div className="relative z-10 profile-picture">
      <div className="absolute h-11 top-[48px] w-[calc(100%-20px)] left-[10px] z-20 flex flex-row items-center gap-1 px-2 py-1 bg-white dark:bg-primary/20 rounded-lg">
        <div className="w-3 h-3 bg-red-500 rounded-full cursor-pointer hover:bg-red-300"></div>
        <div className="w-3 h-3 bg-yellow-500 rounded-full cursor-pointer hover:bg-yellow-300"></div>
        <div className="w-3 h-3 bg-green-500 rounded-full cursor-pointer hover:bg-green-300"></div>
      </div>
      <img
        loading="lazy"
        className="relative z-20 pointer-events-none h-14 w-14"
        src={profile}
        alt="contact-image"
        width={400}
        height={400}
      />
      <div className="absolute left-2 w-full">
        <a
          href="https://www.linkedin.com/in/art-sider/"
          target="_blanc"
          rel="noreferrer"
          className="z-20 cursor-pointer absolute flex text-[12px] xxs:text-sm items-center h-8 gap-1 p-2 shadow-neomorphism dark:shadow-none hover:shadow-card bg-[#f7f7f7] dark:bg-tertiary/90 dark:hover:bg-tertiary border-2 border-white dark:border-b-tertiary dark:border-transparent rounded-xl w-fit bottom-36 md:bottom-[136px] left-0 justify-normal"
        >
          <FaLinkedinIn color="#2196f3" />
          <span className="items-center hidden gap-1 380:flex">
            <b>Salim</b>
            <BiLinkExternal />
          </span>
        </a>

        <a
          href="https://www.youtube.com/@art-sider"
          target="_blanc"
          rel="noreferrer"
          className="z-20 cursor-pointer absolute flex text-[12px] xxs:text-sm items-center h-8 gap-1 p-2 shadow-neomorphism dark:shadow-none hover:shadow-card bg-[#f7f7f7] dark:bg-tertiary/90 dark:hover:bg-tertiary border-2 border-white dark:border-b-tertiary dark:border-transparent rounded-xl w-fit bottom-24 md:bottom-26 left-0 justify-normal"
        >
          <BsYoutube color="#e01717" />
          <span className="items-center hidden gap-1 380:flex">
            <b translate="no">Art sider</b>
            {/* <p>+7000 Abonnés</p> */}
            <BiLinkExternal />
          </span>
        </a>

        <a
          href="https://wa.link/n4mjqu"
          target="_blanc"
          rel="noreferrer"
          className="z-20 cursor-pointer absolute flex text-[12px] xxs:text-sm items-center h-8 gap-1 p-2 shadow-neomorphism dark:shadow-none hover:shadow-card bg-[#f7f7f7] dark:bg-tertiary/90 dark:hover:bg-tertiary border-2 border-white dark:border-b-tertiary dark:border-transparent rounded-xl w-fit bottom-12 md:bottom-14 left-0 justify-normal"
        >
          <BsWhatsapp color="green" />
          <span className="items-center hidden gap-1 380:flex">
            <p>+237</p>
            <b>677 41 76 38</b>
            <BiLinkExternal />
          </span>
        </a>

        <a
          href="mailto:salim.artsider@gmail.com"
          className="z-20 cursor-pointer absolute flex text-[12px] xxs:text-sm items-center h-8 gap-1 p-2 shadow-neomorphism dark:shadow-none hover:shadow-card bg-[#f7f7f7] dark:bg-tertiary/90 dark:hover:bg-tertiary border-2 border-white dark:border-b-tertiary dark:border-transparent rounded-xl w-fit bottom-0 md:bottom-4 left-0 justify-normal"
        >
          <AiOutlineMail color="#bc0b47" />
          <span className="items-center hidden gap-1 380:flex">
            <p>salim.artsider@gmail.com</p>
            <BiLinkExternal />
          </span>
        </a>
      </div>
    </div>
  );
};

export default ProfilePicture;
