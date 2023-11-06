import { BsBrowserEdge } from "react-icons/bs";
import { AiOutlineGithub } from "react-icons/ai";

const ProjectCard = ({
  name,
  description,
  tags,
  image,
  demo,
  sourceCode,
  thumbnail,
}) => {
  const mobile = window.matchMedia("(max-width: 640px)").matches;
  return (
    <div className="py-8 w-full sm:max-w-[90vw] lg:max-w-5xl relative z-0 mx-auto max-w-7xl">
      <div
        className="flex flex-col gap-4 lg:grid lg:grid-cols-[55%_auto]"
        data-aos="fade-up"
        data-aos-delay={50}
      >
        <img
          loading="lazy"
          src={mobile ? thumbnail : image}
          alt={name}
          width={mobile ? 546 : 1366}
          height={mobile ? 307 : 768}
          className="w-full h-fit border-2 border-white rounded-md shadow-card dark:shadow-none dark:border-transparent"
          data-aos="fade-up"
        />
        <div>
          <div className="py-3 px-8 sm:px-3">
            <span className="font-bold text-1xl md:text-2xl text-writing dark:text-white">
              {name}
            </span>
            <p className="mt-2 text-writing dark:text-white-100">
              {description}
            </p>
          </div>
          <div className="flex flex-wrap gap-2 py-3 px-8 sm:px-3">
            {tags.map((tag) => (
              <p key={tag.name} className={`${tag.color}`}>
                #{tag.name}
              </p>
            ))}
          </div>
          <div className="flex flex-wrap gap-2 p-3">
            <a
              target="_blank"
              rel="noreferrer"
              href={sourceCode}
              className={`!bg-gray-800 btn !w-full xs:!w-auto flex justify-between ${
                sourceCode
                  ? ""
                  : "pointer-events-none !bg-gray-800/40 dark:!bg-dark/10 dark:!border-gray-800"
              }`}
            >
              Code <AiOutlineGithub className="ml-2" />
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href={demo}
              className={`!w-full xs:!w-auto flex justify-between btn ${
                demo
                  ? ""
                  : "pointer-events-none !bg-primary/40 dark:!bg-dark/10 dark:!border-gray-800"
              }`}
            >
              Demo <BsBrowserEdge className="ml-2" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
