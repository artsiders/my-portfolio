import { TbSmartHome } from "react-icons/tb";
import { BiUser } from "react-icons/bi";
import { RiServiceLine, RiProjectorLine } from "react-icons/ri";
import { MdOutlinePermContactCalendar } from "react-icons/md";

export const content = {
  nav: [
    {
      link: "#home",
      icon: TbSmartHome,
    },
    {
      link: "#overview",
      icon: BiUser
    },
    {
      link: "#experience",
      icon: RiServiceLine,
    },
    {
      link: "#projects",
      icon: RiProjectorLine,
    },
    {
      link: "#contact",
      icon: MdOutlinePermContactCalendar,
    },
  ],
  skills: {
    title: "Skills",
    subtitle: "MY TOP SKILLS",
    skills_content: [
      {
        name: "Figma",
        para: "Lorem ipsum text  dummy",
        logo: 'figma',
      },
      {
        name: "Node js",
        para: "Lorem ipsum text  dummy",
        logo: 'nodejs',
      },
      {
        name: "Adobe Photoshop",
        para: "Lorem ipsum text  dummy",
        logo: 'ps',
      },
      {
        name: "React js",
        para: "Lorem ipsum text  dummy",
        logo: 'reactjs',
      },
      {
        name: "Sketch",
        para: "Lorem ipsum text  dummy",
        logo: 'sketch',
      },
      {
        name: "Python",
        para: "Lorem ipsum text  dummy",
        logo: 'python',
      },
    ],
  },
};
