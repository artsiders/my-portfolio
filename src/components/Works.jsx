// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import thumbAltplusSite from "../assets/work/thumb_altplus.webp";
import thumbComx from "../assets/work/thumb_comx.webp";
import thumbCampus from "../assets/work/thumb_campus.webp";
import thumbMaadana from "../assets/work/thumb_maadana.webp";
import thumbSmartbook from "../assets/work/thumb_smartbook.webp";
import thumbSocapco from "../assets/work/thumb_socapco.webp";

import altplusSite from "../assets/work/altplus.webp";
import comx from "../assets/work/comx.webp";
import campus from "../assets/work/campus.webp";
import maadana from "../assets/work/maadana.webp";
import smartbook from "../assets/work/smartbook.webp";
import socapco from "../assets/work/socapco.webp";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import ProjectCard from "./ProjectCard";
import { useTranslation } from "react-i18next";

const Works = () => {
  const { t } = useTranslation();
  const projects = [
    {
      name: "Atplus website",
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
      link: "https://alt-plus.onrender.com/",
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
      link: "https://comx-front.vercel.app/",
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
      link: "https://www.socapco-cosmetique.com/",
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
      link: "http://smartbook.onrender.com/",
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
      link: "https://maadana.likupdigital.com/",
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
      link: "https://campus-main-ui.onrender.com/",
    },
  ];

  return (
    <section id="projects" className="relative z-0 mx-auto padding max-w-7xl">
      <div>
        <p className="sectionSubText">{t("myWork")}</p>
        <h2 className="sectionHeadText">{t("projects")}</h2>
      </div>

      <div className="flex w-full">
        <p className="mt-3 text-writing dark:text-secondary text-[17px] max-w-3xl leading-[30px]">
          {t("projectText")}
        </p>
      </div>

      {/* <div className="flex flex-wrap justify-center mt-20 gap-7">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div> */}
      <div className="mt-20">
        <Swiper
          modules={[Navigation, Pagination]}
          pagination={{
            type: "bullets",
          }}
          navigation={true}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            950: {
              slidesPerView: 3,
            },
          }}
        >
          {projects.map((project, index) => (
            <SwiperSlide key={index}>
              <ProjectCard index={index} {...project} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Works;
