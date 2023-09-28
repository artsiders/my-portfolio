import { RxExternalLink } from "react-icons/rx";
import Tilt from "react-tilt";

// import github from "../assets/tech/git.webp";
import { SectionWrapper } from "../hoc";
import { projects } from "../database";

const ProjectCard = ({
  name,
  description,
  tags,
  image,
  source_code_link,
  index,
}) => {
  return (
    <div data-aos="fade-up" data-aos-delay={index * 400}>
      <Tilt
        options={{ max: 45, scale: 1, speed: 450 }}
        className="bg-white dark:bg-tertiary p-2 rounded-md sm:w-[300px] w-full shadow-card"
      >
        <div className="relative w-full h-fit">
          <img
            loading="lazy"
            src={image}
            alt={name}
            className="w-full h-full object-cover rounded-md"
          />
          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className="bg-light dark:bg-tertiary w-10 h-10 rounded-full flex justify-center items-center cursor-pointer hover:bg-primary hover:text-white dark:hover:bg-primary transition-all"
            >
              {/* <img
                loading="lazy"
                src={github}
                alt="github"
                className="w-1/2 h-1/2 object-contain"
              /> */}
              <RxExternalLink />
            </div>
          </div>
        </div>
        <div className="p-3">
          <h3 className="font-bold text-[24px] text-writing dark:text-white">
            {name}
          </h3>
          <p className="mt-2 text-writing dark:text-secondary text-[14px]">
            {description}
          </p>
        </div>
        <div className="p-3 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p key={tag.name} className={`text-[14px] ${tag.color}`}>
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </div>
  );
};

const Works = () => {
  return (
    <>
      <div id="projects">
        <p className="sectionSubText" data-aos="fade-down">
          My work
        </p>
        <h2 className="sectionHeadText" data-aos="fade-down">
          Projects.
        </h2>
      </div>

      <div className="w-full flex">
        <p
          className="mt-3 text-writing dark:text-secondary text-[17px] max-w-3xl leading-[30px]"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Following projects showcases my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to live demos in it. It reflects my ability to solve complex
          problems, work with different technologies, and manage projects
          effectively.
        </p>
      </div>

      <div className="mt-20 flex flex-wrap gap-7 justify-center">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "");
