import { CgSoftwareDownload } from "react-icons/cg";
import { VerticalTimeline } from "react-vertical-timeline-component";
import ExperienceCard from "./ExperienceCard";
import { useTranslation } from "react-i18next";
import afb from "../assets/company/afb.webp";
import altplus from "../assets/company/altplus.webp";
import "react-vertical-timeline-component/style.min.css";

import { useContext } from "react";
import { ThemeContext } from "../App";

const Experience = () => {
  const { t } = useTranslation();
  const { Theme } = useContext(ThemeContext);

  const experiences = [
    {
      title: t("experiences.webDeveloper"),
      company_name: "Alt plus",
      icon: altplus,
      iconBg: "#EEEEEE",
      date: "March 2022",
      link: "https://alt-plus.onrender.com/",
      points: [
        t("experiences.point1"),
        t("experiences.point2"),
        t("experiences.point3"),
        t("experiences.point4"),
      ],
    },
    {
      title: t("experiences.operation"),
      company_name: "AFRILAND FIRST BANK",
      icon: afb,
      iconBg: "#EEE",
      date: "Oct 2022 - Feb 2023",
      link: "https://www.afrilandfirstbank.com/",
      points: [t("experiences.point5"), t("experiences.point6")],
    },
  ];
  return (
    <section
      id="experience"
      className="relative z-0 py-2 mx-auto padding max-w-7xl"
    >
      <div>
        <p className="sectionSubText">{t("whatIhaveDone")}</p>
        <h2 className="sectionHeadText">{t("workExperience")}</h2>
      </div>

      <div className="flex flex-col mt-20">
        <VerticalTimeline
          lineColor={Theme === "dark" ? "#2196f350" : "#FFFFFF"}
        >
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} experience={experience} />
          ))}
        </VerticalTimeline>
      </div>
      <a
        href="/documents/salim-cv.pdf"
        className="btn mt-2"
        onClick={(e) => {
          console.log(e.currentTarget);
        }}
      >
        {t("downloadCv")} <CgSoftwareDownload className="ml-2" size={20} />
      </a>
    </section>
  );
};

export default Experience;
