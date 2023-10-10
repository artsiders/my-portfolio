import { VerticalTimeline } from "react-vertical-timeline-component";

import "react-vertical-timeline-component/style.min.css";

import { experiences } from "../database";
import ExperienceCard from "./ExperienceCard";
import { useTranslation } from "react-i18next";

const Experience = () => {
  const { t } = useTranslation();
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
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} experience={experience} />
          ))}
        </VerticalTimeline>
      </div>
    </section>
  );
};

export default Experience;
