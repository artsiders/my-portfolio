// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import thumbEatsy from "../assets/work/thumb_eatsy.webp";
import thumbAltplusSite from "../assets/work/thumb_altplus.webp";
import thumbChangenewlife from "../assets/work/thumb_changenewlife.webp";
import thumbComx from "../assets/work/thumb_comx.webp";
import thumbCampus from "../assets/work/thumb_campus.webp";
import thumbMaadana from "../assets/work/thumb_maadana.webp";
import thumbSmartbook from "../assets/work/thumb_smartbook.webp";
import thumbSocapco from "../assets/work/thumb_socapco.webp";
import thumbPangoafrika from "../assets/work/thumb_pangoafrika.webp";
import thumbBrasserie from "../assets/work/brasserie_de_bethusy.webp";
import Brasserie from "../assets/work/brasserie_de_bethusy.webp";

import eatsy from "../assets/work/eatsy.webp";
import altplusSite from "../assets/work/altplus.webp";
import changenewlife from "../assets/work/changenewlife.webp";
import comx from "../assets/work/comx.webp";
import campus from "../assets/work/campus.webp";
import maadana from "../assets/work/maadana.webp";
import smartbook from "../assets/work/smartbook.webp";
import socapco from "../assets/work/socapco.webp";
import pangoafrika from "../assets/work/pangoafrika.webp";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Parallax, Autoplay } from "swiper/modules";
import ProjectCard from "./ProjectCard";
import { useTranslation } from "react-i18next";
import { useContext } from "react";
import { ThemeContext } from "../App";

const Works = () => {
  const { t } = useTranslation();
  const projects = [
    {
      name: "Pangoafrika",
      description: t("works.pangoafrika"),
      tags: [
        {
          name: "Javascript",
          color: "blue-text-gradient",
        },
        {
          name: "Reactjs",
          color: "green-text-gradient",
        },
        {
          name: "Tailwindcss",
          color: "pink-text-gradient",
        },
      ],
      image: pangoafrika,
      thumbnail: thumbPangoafrika,
      demo: "http://pangoafrika.com/",
      sourceCode: "",
    },
    {
      name: "Brasserie de Béthusy",
      description: t("works.brasserie_de_bethusy"),
      tags: [
        {
          name: "NextJS 15",
          color: "blue-text-gradient",
        },
        {
          name: "GSAP",
          color: "green-text-gradient",
        },
        {
          name: "Tailwindcss",
          color: "pink-text-gradient",
        },
      ],
      image: Brasserie,
      thumbnail: thumbBrasserie,
      demo: "https://bethusy.altplus.dev/",
      sourceCode: "",
      dev: true,
    },
    {
      name: "Change new life MLM",
      description: t("works.changenewlife"),
      tags: [
        {
          name: "Typescript",
          color: "blue-text-gradient",
        },
        {
          name: "Reactjs",
          color: "green-text-gradient",
        },
        {
          name: "Tailwindcss",
          color: "pink-text-gradient",
        },
      ],
      image: changenewlife,
      thumbnail: thumbChangenewlife,
      demo: "https://www.changenewlife.com/",
      sourceCode: "",
    },
    {
      name: "Eatsy Resto",
      description: t("works.eatsy"),
      tags: [
        {
          name: "Typescript",
          color: "blue-text-gradient",
        },
        {
          name: "Reactjs",
          color: "green-text-gradient",
        },
        {
          name: "Tailwindcss",
          color: "pink-text-gradient",
        },
      ],
      image: eatsy,
      thumbnail: thumbEatsy,
      demo: "https://eatsy.shop/",
      sourceCode: "",
    },
    {
      name: "Altplus website",
      description: t("works.altplus"),
      tags: [
        {
          name: "javascript",
          color: "blue-text-gradient",
        },
        {
          name: "bootstrap",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: altplusSite,
      thumbnail: thumbAltplusSite,
      demo: "https://altplus.dev/",
      sourceCode: "",
    },
    {
      name: "Comx shop",
      description: t("works.comx"),
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "TypeScript",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: comx,
      thumbnail: thumbComx,
      demo: "https://comx-front.vercel.app/",
      sourceCode: "",
    },
    {
      name: "socapco cosmetic website",
      description: t("works.socapco"),
      tags: [
        {
          name: "php",
          color: "blue-text-gradient",
        },
        {
          name: "bootstrap",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: socapco,
      thumbnail: thumbSocapco,
      demo: "https://www.socapco-cosmetique.com/",
      sourceCode: "",
    },
    {
      name: "smartbook Accounting",
      description: t("works.smartbook"),
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongoDB",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: smartbook,
      thumbnail: thumbSmartbook,
      demo: "http://smartbook.onrender.com/",
      sourceCode: "",
    },
    {
      name: "ma'adana cloud hosting",
      description: t("works.maadana"),
      tags: [
        {
          name: "wordpress",
          color: "blue-text-gradient",
        },
        {
          name: "php",
          color: "green-text-gradient",
        },
      ],
      image: maadana,
      thumbnail: thumbMaadana,
      demo: "https://maadana.likupdigital.com/",
      sourceCode: "",
    },
    {
      name: "campus app",
      description: t("works.campus"),
      tags: [
        {
          name: "viteJS",
          color: "blue-text-gradient",
        },
        {
          name: "Typescript",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: campus,
      thumbnail: thumbCampus,
      demo: "https://campus-main-ui.onrender.com/",
      sourceCode: "",
    },
  ];

  const { Theme } = useContext(ThemeContext);

  return (
    <section id="projects" className="">
      <div className="padding  relative z-0 mx-auto max-w-7xl">
        <div>
          <p className="sectionSubText">{t("myWork")}</p>
          <h2 className="sectionHeadText">{t("projects")}</h2>
        </div>

        <div className="flex w-full">
          <p className="mt-3 text-writing dark:text-white-100 text-[17px] max-w-3xl leading-[30px]">
            {t("projectText")}
          </p>
        </div>
      </div>

      <div className={`${Theme === "light" ? "bg-hero-pattern-light" : "bg-hero-pattern-dark"
        } bg-cover bg-no-repeat bg-center bg-fixed w-full h-full padding`}>
        <Swiper
          style={{
            "--swiper-navigation-color": "#fff",
            "--swiper-pagination-color": "#fff",
          }}
          speed={600}
          parallax={true}
          loop={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: true,
            pauseOnMouseEnter: true,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Parallax, Pagination, Navigation, Autoplay]}
          className={``}
        >
          {projects.map((project, index) => (
            <SwiperSlide key={index}>
              <ProjectCard {...project} />
            </SwiperSlide>
          ))}
        </Swiper>
        {/* <div className="flex justify-center w-full items-center">
          <button className="btn mt-10">
            {t("works.showAll")} <AiOutlineArrowRight className="ml-2" />
          </button>
        </div> */}
      </div>
    </section>
  );
};

export default Works;
