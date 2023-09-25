import Tilt from "react-tilt";
import { FaCode } from "react-icons/fa";

import { services } from "../database";
import { SectionWrapper } from "../hoc";

const ServiceCard = ({ index, title, icon }) => (
  <div data-aos="fade-up" data-aos-delay={index * 200}>
    <Tilt className="xs:w-[250px] w-full">
      <div className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card">
        <div className="bg-white dark:bg-tertiary rounded-[20px] py-5 px-12 min-h-[140px] flex justify-evenly items-center flex-col">
          <img
            loading="lazy"
            src={icon}
            alt="web-development"
            className="w-10 h-10 object-contain"
          />

          <h3 className="text-writing dark:text-white text-lg font-bold text-center">
            {title}
          </h3>
        </div>
      </div>
    </Tilt>
  </div>
);

const About = () => {
  return (
    <section id="overview" className="py-2" data-aos="fade-down">
      <div>
        <p className="sectionSubText">Introduction</p>
        <h2 className="sectionHeadText">Overview.</h2>
      </div>

      <p className="mt-4 text-writing dark:text-secondary text-[17px] max-w-3xl leading-[30px]">
        <span className="block">
          Passionate Full Stack Web and Mobile Developer, specialized in
          interface ergonomics and web design. 🌟 Creates responsive and
          optimized experiences for mobile devices. 📱💻 Available for free
          consultations.
        </span>
        <Tilt className="xs:w-[250px] w-full">
          <button type="submit" className="btn">
            Adopt a Dev <FaCode className="ml-2" />
          </button>
        </Tilt>
      </p>

      <div className="mt-20 flex flex-wrap gap-10 justify-center">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </section>
  );
};

export default SectionWrapper(About, "about");
