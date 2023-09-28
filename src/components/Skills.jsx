import { BiRightArrowAlt } from "react-icons/bi";
// import content
import { content } from "../Content";

const Skills = () => {
  const { skills } = content;

  return (
    <section className="padding max-w-7xl mx-auto relative z-0" id="skills">
      <div className="">
        <h4 className="sectionSubText" data-aos="fade-down">
          {skills.subtitle}
        </h4>
        <h2 className="sectionHeadText" data-aos="fade-down">
          {skills.title}.
        </h2>
        <br />
        <div className="flex flex-wrap gap-4 justify-center pt-10">
          {skills.skills_content.map((skill, i) => (
            <div
              key={i}
              data-aos="fade-up"
              data-aos-delay={i * 200}
              className="bg-white dark:bg-tertiary sm:cursor-pointer 
               relative group w-fit flex items-center
                gap-5 p-5 max-w-sm rounded-md border-[1px] border-primary"
            >
              <div>
                <img
                  src={skill.logo}
                  alt="..."
                  className="w-10 group-hover:scale-125 duration-200"
                />
              </div>
              <div>
                <h6>{skill.name}</h6>
                <p className="italic">{skill.para}</p>
                <div className="text-xl absolute top-3 right-3">
                  <BiRightArrowAlt />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
