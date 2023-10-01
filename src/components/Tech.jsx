import { technologies } from "../database";

const Tech = () => {
  return (
    <section className="padding max-w-7xl mx-auto relative z-0">
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
            className="bg-[#f7f7f7] dark:bg-tertiary w-28 h-28 border-2 border-white dark:border-transparent rounded-lg flex justify-center items-center shadow-card dark:shadow-none"
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

export default Tech;
