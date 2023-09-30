import { RxExternalLink } from "react-icons/rx";

const ProjectCard = ({ name, description, tags, image, source_code_link }) => {
  return (
    <div className="bg-white dark:bg-tertiary p-2 rounded-md sm:w-[300px] w-full shadow-card dark:shadow-sm">
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
      <div className="p-3 flex flex-wrap gap-2">
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
