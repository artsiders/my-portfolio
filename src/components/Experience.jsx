import { VerticalTimeline } from "react-vertical-timeline-component";

import "react-vertical-timeline-component/style.min.css";

import { experiences } from "../database";
import { SectionWrapper } from "../hoc";
import ExperienceCard from "./ExperienceCard";

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
