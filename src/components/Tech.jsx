import { SectionWrapper } from "../hoc";
import { technologies } from "../database";

const Tech = () => {
  return (
    <section>
      <h4 className="sectionSubText" data-aos="fade-down">
        My main technologies
      </h4>
      <h2 className="sectionHeadText" data-aos="fade-down">
        Technologies.
      </h2>
      <br />
      <div className="flex flex-row flex-wrap justify-center gap-10">
        {technologies.map((technology, key) => (
          <div
            className="w-28 h-28 border-[1px] border-primary rounded-lg flex justify-center items-center shadow-card"
            key={technology.name}
            data-aos="fade-up"
            data-aos-delay={key * 200}
          >
            <img
              loading="lazy"
              className="max-w-[80%]"
              src={technology.icon}
              alt=""
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default SectionWrapper(Tech, "tech");
