import { AiOutlineMail } from "react-icons/ai";
import { BiLinkExternal } from "react-icons/bi";
import { FaLinkedinIn } from "react-icons/fa";
import { BsWhatsapp } from "react-icons/bs";
import { BsYoutube } from "react-icons/bs";
import profile from "../assets/profile.webp";

const ProfilePicture = () => {
  return (
    <div className="z-10 profile-picture animate-updown-lg">
      <img
        loading="lazy"
        className="relative z-20 pointer-events-none"
        src={profile}
        alt="contact-image"
        width={420}
        height={420}
      />
      <a
        href="https://www.linkedin.com/in/art-sider/"
        target="_blanc"
        rel="noreferrer"
        className="z-20 cursor-pointer animate-updown-sm absolute flex text-[12px] xxs:text-sm items-center h-8 gap-1 p-2 shadow-neomorphism dark:shadow-none hover:shadow-card bg-[#f7f7f7] dark:bg-tertiary/90 dark:hover:bg-tertiary border-2 border-white dark:border-b-tertiary dark:border-transparent rounded-xl w-fit bottom-36 md:bottom-[136px] left-0 justify-normal"
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
        className="z-20 cursor-pointer animate-updown-sm absolute flex text-[12px] xxs:text-sm items-center h-8 gap-1 p-2 shadow-neomorphism dark:shadow-none hover:shadow-card bg-[#f7f7f7] dark:bg-tertiary/90 dark:hover:bg-tertiary border-2 border-white dark:border-b-tertiary dark:border-transparent rounded-xl w-fit bottom-24 md:bottom-26 left-0 justify-normal"
      >
        <BsYoutube color="#e01717" />
        <span className="items-center hidden gap-1 380:flex">
          <b>Art sider</b>
          {/* <p>+7000 Abonnés</p> */}
          <BiLinkExternal />
        </span>
      </a>

      <a
        href="https://wa.link/n4mjqu"
        target="_blanc"
        rel="noreferrer"
        className="z-20 cursor-pointer animate-updown-sm absolute flex text-[12px] xxs:text-sm items-center h-8 gap-1 p-2 shadow-neomorphism dark:shadow-none hover:shadow-card bg-[#f7f7f7] dark:bg-tertiary/90 dark:hover:bg-tertiary border-2 border-white dark:border-b-tertiary dark:border-transparent rounded-xl w-fit bottom-12 md:bottom-14 left-0 justify-normal"
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
        className="z-20 cursor-pointer animate-updown-sm absolute flex text-[12px] xxs:text-sm items-center h-8 gap-1 p-2 shadow-neomorphism dark:shadow-none hover:shadow-card bg-[#f7f7f7] dark:bg-tertiary/90 dark:hover:bg-tertiary border-2 border-white dark:border-b-tertiary dark:border-transparent rounded-xl w-fit bottom-0 md:bottom-4 left-0 justify-normal"
      >
        <AiOutlineMail color="#bc0b47" />
        <span className="items-center hidden gap-1 380:flex">
          <p>salim.artsider@gmail.com</p>
          <BiLinkExternal />
        </span>
      </a>
    </div>
  );
};

export default ProfilePicture;
