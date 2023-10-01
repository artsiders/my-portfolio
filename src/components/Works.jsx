// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { projects } from "../database";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Virtual, Navigation, Pagination } from "swiper/modules";
import ProjectCard from "./ProjectCard";

const Works = () => {
  return (
    <section className="padding max-w-7xl mx-auto relative z-0">
      <div id="projects">
        <p className="sectionSubText" data-aos="fade-down">
          My work
        </p>
        <h2 className="sectionHeadText" data-aos="fade-down">
          Projects.
        </h2>
      </div>

      <div className="w-full flex">
        <p
          className="mt-3 text-writing dark:text-secondary text-[17px] max-w-3xl leading-[30px]"
          data-aos="fade-down"
        >
          Following projects showcases my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to live demos in it. It reflects my ability to solve complex
          problems, work with different technologies, and manage projects
          effectively.
        </p>
      </div>

      {/* <div className="mt-20 flex flex-wrap gap-7 justify-center">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div> */}
      <div className="mt-20">
        <Swiper
          modules={[Virtual, Navigation, Pagination]}
          pagination={{
            type: "bullets",
          }}
          loop={true}
          navigation={true}
          virtual
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
