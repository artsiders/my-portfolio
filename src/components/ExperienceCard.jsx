import { useContext } from "react";
import { VerticalTimelineElement } from "react-vertical-timeline-component";

import "react-vertical-timeline-component/style.min.css";

import { ThemeContext } from "../App";

const ExperienceCard = ({ experience }) => {
  const { Theme } = useContext(ThemeContext);

  let light = {
    background: "#f7f7f7",
    border: "2px solid #ffffff",
    color: "#211e35",
    boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
  };
  let dark = {
    background: "#1d1836",
    color: "#fff",
    boxShadow: "none",
    borderBottom: "3px solid #915EFF",
  };
  return (
    <VerticalTimelineElement
      contentStyle={Theme === "light" ? light : dark}
      contentArrowStyle={{
        borderRight:
          Theme === "light" ? "7px solid  #ffffff" : "7px solid  #232631",
      }}
      date={experience.date}
      iconStyle={
        Theme === "dark"
          ? {
              background: experience.iconBg,
              border: "2px solid #915EFF80",
              boxShadow: "none",
            }
          : { background: experience.iconBg }
      }
      icon={
        <a
          target="_blank"
          rel="noreferrer"
          href={experience.link}
          className="flex items-center justify-center w-full h-full"
        >
          <img
            loading="lazy"
            src={experience.icon}
            alt={experience.company_name}
            className="w-[60%] h-[60%] object-contain"
          />
        </a>
      }
    >
      <div>
        <h3 className="text-writing dark:text-white text-[24px] font-bold">
          {experience.title}
        </h3>
        <a
          target="_blank"
          rel="noreferrer"
          href={experience.link}
          className="block text-writing/80 link dark:text-primary text-[16px] font-semibold uppercase"
          style={{ margin: 0 }}
        >
          {experience.company_name}
        </a>
      </div>

      <ul className="mt-5 ml-5 space-y-2 list-disc">
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

export default ExperienceCard;
