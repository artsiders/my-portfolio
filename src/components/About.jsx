import Tilt from "react-tilt";
import { FaCode } from "react-icons/fa";

import { services } from "../database";
import ServiceCard from "./ServiceCard";

const About = () => {
  return (
    <section
      id="overview"
      className="padding max-w-7xl mx-auto relative z-0 py-2"
      data-aos="fade-down"
    >
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

export default About;
