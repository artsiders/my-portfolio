import { AiOutlineGithub } from "react-icons/ai";
import { technologies } from "../database";
import { useTranslation } from "react-i18next";

const Tech = () => {
  const { t } = useTranslation();
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
              data-aos-delay={key * 100}
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
          data-aos-delay={900}
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
