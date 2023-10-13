import { BsBrowserEdge } from "react-icons/bs";
import { AiOutlineGithub } from "react-icons/ai";
import { RxExternalLink } from "react-icons/rx";
import { useState } from "react";
import Portal from "./Portal";
import { IoMdClose } from "react-icons/io";
import { t } from "i18next";

const ProjectCard = ({
  name,
  description,
  tags,
  thumbnail,
  image,
  demo,
  sourceCode,
}) => {
  const [visible, setVisible] = useState(false);
  return (
    <div className="bg-[#f7f7f7] dark:bg-tertiary border-2 dark:border-transparent border-white p-2 rounded-md sm:w-[300px] w-full shadow-none md:shadow-card dark:shadow-sm">
      <div className="relative w-full cursor-pointer h-[160px] bg-gray-200 dark:bg-[#251246]">
        <img
          loading="lazy"
          src={thumbnail}
          alt={name}
          width={268}
          height={151}
          className="object-cover w-full h-full border-2 border-white rounded-md dark:border-transparent"
          onClick={() => setVisible(true)}
        />
        <div className="absolute w-10 h-10 top-2 right-2">
          <div
            onClick={() => window.open(demo, "_blank")}
            className="flex items-center justify-center w-10 h-10 transition-all rounded-full cursor-pointer shadow-neomorphism dark:shadow-none bg-light/50 dark:bg-tertiary/30 backdrop-blur-md hover:bg-light dark:hover:bg-tertiary/50"
          >
            <RxExternalLink />
          </div>
        </div>
      </div>
      <div className="p-3">
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            setVisible(true);
          }}
          className="font-bold text-[24px] text-writing dark:text-white line-clamp-1 hover:text-primary dark:hover:text-primary transition-all"
        >
          {name}
        </a>
        <p className="mt-2 text-writing dark:text-secondary text-[14px] line-clamp-5">
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

      {visible && (
        <Portal setVisible={setVisible}>
          <div className="sticky left-0 flex items-center justify-between w-full p-3 py-6 border-b-2 rounded-b-lg -top-6 bg-white/30 dark:bg-dark/30 backdrop-blur-lg h-14 border-b-writing/20 dark:border-b-primary/30">
            <h1 className="text-writing dark:text-white border-b-writing/10">
              {t("projects")}
            </h1>
            <span
              onClick={() => setVisible(false)}
              className="p-2 text-red-500 bg-red-300 rounded-full shadow-lg cursor-pointer dark:bg-red-500/30"
            >
              <IoMdClose />
            </span>
          </div>
          <div className="py-8 w-full max-w-[90vw] lg:max-w-5xl">
            <div className="flex flex-col gap-4 md:flex-row">
              <img
                loading="lazy"
                src={image}
                alt={name}
                width={1366}
                height={768}
                className="w-full md:w-[60%] h-fit border-2 border-white rounded-md shadow-card dark:shadow-none dark:border-transparent"
                onClick={() => setVisible(true)}
              />
              <div>
                <div className="p-3">
                  <span className="font-bold text-1xl md:text-2xl text-writing dark:text-white">
                    {name}
                  </span>
                  <p className="mt-2 text-writing dark:text-secondary">
                    {description}
                  </p>
                </div>
                <div className="flex flex-wrap gap-2 p-3">
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
        </Portal>
      )}
    </div>
  );
};

export default ProjectCard;
