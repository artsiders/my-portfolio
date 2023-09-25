import { useContext } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import "react-vertical-timeline-component/style.min.css";

import { experiences } from "../database";
import { SectionWrapper } from "../hoc";
import { ThemeContext } from "../App";

const ExperienceCard = ({ experience }) => {
  const { Theme } = useContext(ThemeContext);

  let light = {
    background: "#ffffff",
    color: "#211e35",
  };
  let dark = {
    background: "#1d1836",
    color: "#fff",
  };
  return (
    <VerticalTimelineElement
      contentStyle={Theme === "light" ? light : dark}
      contentArrowStyle={{
        borderRight:
          Theme === "light" ? "7px solid  #ffffff" : "7px solid  #232631",
      }}
      date={experience.date}
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div className="flex justify-center items-center w-full h-full">
          <img
            loading="lazy"
            src={experience.icon}
            alt={experience.company_name}
            className="w-[60%] h-[60%] object-contain"
          />
        </div>
      }
    >
      <div>
        <h3 className="text-writing dark:text-white text-[24px] font-bold">
          {experience.title}
        </h3>
        <p
          className="text-writing/80 dark:text-secondary text-[16px] font-semibold"
          style={{ margin: 0 }}
        >
          {experience.company_name}
        </p>
      </div>

      <ul className="mt-5 list-disc ml-5 space-y-2">
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className="text-writing/70 dark:text-white-100 text-[14px] pl-1 tracking-wider"
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  return (
    <section id="experience" className="py-2">
      <div>
        <p className="sectionSubText">What I have done so far</p>
        <h2 className="sectionHeadText">Work Experience.</h2>
      </div>

      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} experience={experience} />
          ))}
        </VerticalTimeline>
      </div>
    </section>
  );
};

export default SectionWrapper(Experience, "work");
