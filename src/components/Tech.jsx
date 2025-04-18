import { AiOutlineGithub } from "react-icons/ai";
import { useTranslation } from "react-i18next";

import typescript from "../assets/tech/typescript.webp";
import nextjs from "../assets/tech/nextjs.webp";
import tailwind from "../assets/tech/tailwind.webp";
import nodejs from "../assets/tech/nodejs.webp";
import mongodb from "../assets/tech/mongodb.webp";
import mysql from "../assets/tech/mysql.webp";
import php from "../assets/tech/php.webp";
import git from "../assets/tech/git.webp";
import wordpress from "../assets/tech/wordpress.webp";

const Tech = () => {
  const { t } = useTranslation();
  const technologies = [
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "Next JS",
      icon: nextjs,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "PHP",
      icon: php,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Mysql",
      icon: mysql,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "wordpress",
      icon: wordpress,
    },
  ];
  return (
    <section className="w-full bg-[#f7f7f7] dark:bg-dark pb-28">
      <div className="relative z-0 mx-auto padding max-w-7xl">
        <h4 className="sectionSubText">{t("mainTechnologies")}</h4>
        <h2 className="sectionHeadText">Technologies.</h2>
        <br />
        <div className="flex flex-row flex-wrap justify-center gap-10">
          {technologies.map((technology, key) => (
            <div
              className="bg-[#f7f7f7] shadow-neomorphism dark:bg-tertiary w-20 h-20 border-[1px] border-white dark:border-transparent rounded-lg flex justify-center items-center dark:shadow-none"
              key={technology.name}
              data-aos="fade-up"
              data-aos-delay={key * 50}
            >
              <img
                loading="lazy"
                className="max-w-[80%]"
                src={technology.icon}
                alt=""
              />
            </div>
          ))}
        </div>
        <a
          href="https://github.com/artsiders/"
          className="float-none mx-4 mt-12 md:mx-auto md:float-right btn"
          data-aos="fade-up"
          data-aos-delay={100}
          target="_blank"
          rel="noreferrer"
        >
          {t("seeMore")} <AiOutlineGithub className="ml-2" />
        </a>
      </div>
    </section>
  );
};

export default Tech;
