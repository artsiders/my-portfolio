import afb from "./assets/company/afb.webp"
import altplus from "./assets/company/altplus.webp"

import javascript from "./assets/tech/javascript.webp"
import typescript from "./assets/tech/typescript.webp"
import reactjs from "./assets/tech/reactjs.webp"
import tailwind from "./assets/tech/tailwind.webp"
import nodejs from "./assets/tech/nodejs.webp"
import mongodb from "./assets/tech/mongodb.webp"
import git from "./assets/tech/git.webp"

import contentCreator from "./assets/services/content-creator.webp"
import graphicDesigner from "./assets/services/graphic-designer.webp"
import mobile from "./assets/services/mobile.webp"
import web from "./assets/services/web.webp"

import altplusSite from "./assets/work/altplus.webp"
import comx from "./assets/work/comx.webp"
import campus from "./assets/work/campus.webp"
import maadana from "./assets/work/maadana.webp"
import smartbook from "./assets/work/smartbook.webp"
import socapco from "./assets/work/socapco.webp"

import testimonial1 from "./assets/testimonials/testimonial-1.webp";
import testimonial2 from "./assets/testimonials/testimonial-2.webp";
import testimonial3 from "./assets/testimonials/testimonial-3.webp";
import testimonial4 from "./assets/testimonials/testimonial-4.webp";
import testimonial5 from "./assets/testimonials/testimonial-5.webp";

import { TbSmartHome } from "react-icons/tb";
import { BiUser } from "react-icons/bi";
import { RiServiceLine, RiProjectorLine } from "react-icons/ri";
import { MdOutlinePermContactCalendar } from "react-icons/md";


export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
    description: "Création de sites web interactifs et fonctionnels pour répondre aux besoins spécifiques des clients.",
  },
  {
    title: "Graphic Designer",
    icon: graphicDesigner,
    description: "Conception d'éléments graphiques attrayants et visuellement percutants pour renforcer l'identité visuelle des marques.",
  },
  {
    title: "Mobile Developer",
    icon: mobile,
    description: "Développement d'applications mobiles pour offrir des expériences optimales sur les plateformes iOS et Android.",
  },
  {
    title: "Content Creator",
    icon: contentCreator,
    description: "Production de contenu original et engageant en ligne, pour susciter l'intérêt et l'engagement des audiences.",
  },
];

const technologies = [
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "git",
    icon: git,
  },
];

const experiences = [
  {
    title: "Web Developer",
    company_name: "Alt plus",
    icon: altplus,
    iconBg: "#EEEEEE",
    date: "March 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Assistant Chef Operation",
    company_name: "AFRILAND FIRST BANK",
    icon: afb,
    iconBg: "#EEE",
    date: "Oct 2022 - Feb 2023",
    points: [
      "télé-compensation des chèques provenant d'autres banques.",
      "Vérification des données numériques pour les transferts de fonds nationaux.",
    ],
  },
];

const testimonials = [
  {
    key: -1,
    image: testimonial1,
    name: "Mewe Loic",
    post: "Étudiant",
    message:
      "Je suis tellement reconnaissant d'avoir rencontré Mr Salim. Ses conseils et son soutien m'ont aidé à progresser dans mes études.",
  },
  {
    key: 0,
    image: testimonial2,
    name: "Merline Yassa",
    post: "Entrepreneur",
    message:
      "Les applications créées par Mr Salim sont vraiment incroyables. Elles ont transformé la façon dont je gère mon entreprise.",
  },
  {
    key: 1,
    image: testimonial3,
    name: "Moustapha Aka",
    post: "Directeur de l'hôtel Edkadi",
    message:
      "J'utilise le logiciel SmartBook développé par ces jeunes. C'est très efficace et cela a grandement amélioré notre système de réservation.",
  },
  {
    key: 2,
    image: testimonial4,
    name: "Cyril",
    post: "Étudiant",
    message:
      "La formation dispensée par Salim a été extrêmement bénéfique pour ma carrière. Je suis maintenant mieux préparé pour le monde professionnel.",
  },
  {
    key: 2,
    image: testimonial5,
    name: "Dimitri Mabon",
    post: "Développeur front-end",
    message:
      "Je suis impressionné par les compétences de Mr Salim en développement web. Travailler avec lui a été une expérience enrichissante.",
  },
];

const projects = [
  {
    name: "Atplus website",
    description:
      "The Alt plus website is a platform that showcases the services and achievements of this innovative startup. Alt plus pushes the boundaries of technology to provide personalized and high-quality IT solutions.",
    tags: [
      {
        name: "javascript",
        color: "blue-text-gradient",
      },
      {
        name: "bootstrap",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: altplusSite,
    link: "https://alt-plus.onrender.com/",
  },
  {
    name: "Comx shop",
    description:
      "Comx-front is a web application that allows users to easily and quickly create their own online store. With this application, you can create an online store to sell your products in just a few minutes, without the need for technical skills.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "TypeScript",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: comx,
    link: "https://comx-front.vercel.app/",
  },
  {
    name: "socapco cosmetic website",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "php",
        color: "blue-text-gradient",
      },
      {
        name: "bootstrap",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: socapco,
    link: "https://www.socapco-cosmetique.com/",
  },
  {
    name: "smartbook Accounting",
    description:
      "SmartBook is a comprehensive application for managing analytical accounting specifically designed to meet the specific needs of Edkadi Hotel. This application offers advanced features that allow the hotel to track and analyze its expenses and revenues in a detailed manner.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongoDB",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: smartbook,
    link: "http://smartbook.onrender.com/",
  },
  {
    name: "ma'adana cloud hosting",
    description: "Ma'adana Cloud Hosting is a reliable and innovative African cloud hosting service, providing top-notch hosting solutions for businesses and individuals.",
    tags: [
      {
        name: "wordpress",
        color: "blue-text-gradient",
      },
      {
        name: "php",
        color: "green-text-gradient",
      },
    ],
    image: maadana,
    link: "https://maadana.likupdigital.com/",
  },
  {
    name: "campus app",
    description:
      "Plateforme de gestion complète du parcours universitaire, regroupant bibliothèque numérique, gestion des notes, emploi du temps, communication et supports de cours numériques.",
    tags: [
      {
        name: "viteJS",
        color: "blue-text-gradient",
      },
      {
        name: "Typescript",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: campus,
    link: "https://campus-main-ui.onrender.com/",
  },
];


const nav = [
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
];

const skills = {
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
}

export { services, technologies, experiences, testimonials, projects, nav, skills };
