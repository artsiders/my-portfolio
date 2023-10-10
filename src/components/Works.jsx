// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { projects } from "../database";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import ProjectCard from "./ProjectCard";
import { useTranslation } from "react-i18next";

const Works = () => {
  const { t } = useTranslation();
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
