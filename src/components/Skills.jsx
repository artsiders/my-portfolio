import { BiRightArrowAlt } from "react-icons/bi";
// import content
import { useState } from "react";
import { content } from "../Content";
// import modal package
import Modal from "react-modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    maxWidth: "23rem",
    width: "90%",
  },
  overlay: {
    padding: "2rem",
  },
};
Modal.setAppElement("#modal");

const Skills = () => {
  const { skills } = content;
  const [modalIsOpen, setIsOpen] = useState(false);
  const [selectSkill, setSelectSkill] = useState(null);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <section className="padding max-w-7xl mx-auto relative z-0" id="skills">
      {/* modal */}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        className="bg-red-400"
      >
        <div className="flex items-center gap-2">
          <img className="h-10" src={selectSkill?.logo} alt="..." />
          <h6>{selectSkill?.name}</h6>
        </div>
        <br />
        <ul className="list-decimal px-4 font-Poppins sm:text-sm text-xs !leading-7">
          <li>Lorem ipsum dolor sit, amet consectetur adipisicing.</li>
          <li>Lorem ipsum dolor sit, ame.</li>
          <li>Lorem ipsum dolor sit, amet consectetur</li>
          <li>
            Lorem ipsum dolor sit, amet dolor sit, amet consectetur adipisicing.
          </li>
          <li>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad est
            beatae quos rem.
          </li>
        </ul>
        <br />
        <div className="flex justify-end">
          <button onClick={closeModal} className="btn">
            Close
          </button>
        </div>
      </Modal>

      {/* content */}
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
              className="bg-white dark:bg-dark sm:cursor-pointer 
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
                <div
                  onClick={() => {
                    setSelectSkill(skill);
                    openModal();
                  }}
                  className="text-xl absolute top-3 right-3"
                >
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
