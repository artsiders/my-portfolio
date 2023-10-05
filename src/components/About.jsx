import { AiOutlineMessage } from "react-icons/ai";

import { services } from "../database";
import ServiceCard from "./ServiceCard";

const About = () => {
  return (
    <section
      id="overview"
      className="relative z-0 py-2 mx-auto padding max-w-7xl"
    >
      <div>
        <p className="sectionSubText">Introduction</p>
        <h2 className="sectionHeadText">Overview.</h2>
      </div>

      <p className="text-writing dark:text-secondary text-[17px] max-w-3xl leading-[30px]">
        <span className="block">
          Passionate Full Stack Web and Mobile Developer, specialized in
          interface ergonomics and web design. 🌟 Creates responsive and
          optimized experiences for mobile devices. 📱💻 Available for free
          consultations.
        </span>
        <a href="https://wa.link/n4mjqu" className="mt-6 btn">
          Contact me <AiOutlineMessage className="ml-2" />
        </a>
      </p>

      <div className="flex flex-wrap justify-center gap-4 mt-20 xs:gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </section>
  );
};

export default About;
