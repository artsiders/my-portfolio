import { RxExternalLink } from "react-icons/rx";

const ProjectCard = ({ name, description, tags, image, source_code_link }) => {
  return (
    <div className="bg-[#f7f7f7] dark:bg-tertiary border-2 dark:border-transparent border-white p-2 rounded-md sm:w-[300px] w-full shadow-none md:shadow-card dark:shadow-sm">
      <div className="relative w-full h-fit">
        <img
          loading="lazy"
          src={image}
          alt={name}
          className="object-cover w-full h-full border-2 border-white rounded-md dark:border-transparent"
        />
        <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
          <div
            onClick={() => window.open(source_code_link, "_blank")}
            className="flex items-center justify-center w-10 h-10 transition-all rounded-full cursor-pointer bg-light/10 dark:bg-tertiary/30 backdrop-blur-md hover:bg-light/50 dark:hover:bg-tertiary/50"
          >
            <RxExternalLink />
          </div>
        </div>
      </div>
      <div className="p-3">
        <a
          href="#"
          className="font-bold text-[24px] text-writing dark:text-white"
        >
          {name}
        </a>
        <p className="mt-2 text-writing dark:text-secondary text-[14px]">
          {description}
        </p>
      </div>
      <div className="flex flex-wrap gap-2 p-3">
        {tags.map((tag) => (
          <p key={tag.name} className={`text-[14px] ${tag.color}`}>
            #{tag.name}
          </p>
        ))}
      </div>
    </div>
  );
};

export default ProjectCard;