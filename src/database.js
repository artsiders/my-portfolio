import afb from "./assets/company/afb.webp";
import altplus from "./assets/company/altplus.webp";

import typescript from "./assets/tech/typescript.webp";
import reactjs from "./assets/tech/reactjs.webp";
import tailwind from "./assets/tech/tailwind.webp";
import nodejs from "./assets/tech/nodejs.webp";
import mongodb from "./assets/tech/mongodb.webp";
import mysql from "./assets/tech/mysql.webp";
import php from "./assets/tech/php.webp";
import git from "./assets/tech/git.webp";

import contentCreator from "./assets/services/content-creator.webp";
import graphicDesigner from "./assets/services/graphic-designer.webp";
import mobile from "./assets/services/mobile.webp";
import web from "./assets/services/web.webp";

import thumbAltplusSite from "./assets/work/thumb_altplus.webp";
import thumbComx from "./assets/work/thumb_comx.webp";
import thumbCampus from "./assets/work/thumb_campus.webp";
import thumbMaadana from "./assets/work/thumb_maadana.webp";
import thumbSmartbook from "./assets/work/thumb_smartbook.webp";
import thumbSocapco from "./assets/work/thumb_socapco.webp";

import altplusSite from "./assets/work/altplus.webp";
import comx from "./assets/work/comx.webp";
import campus from "./assets/work/campus.webp";
import maadana from "./assets/work/maadana.webp";
import smartbook from "./assets/work/smartbook.webp";
import socapco from "./assets/work/socapco.webp";

import testimonial1 from "./assets/testimonials/testimonial-1.webp";
import testimonial2 from "./assets/testimonials/testimonial-2.webp";
import testimonial3 from "./assets/testimonials/testimonial-3.webp";
import testimonial4 from "./assets/testimonials/testimonial-4.webp";
import testimonial5 from "./assets/testimonials/testimonial-5.webp";

import { TbSmartHome } from "react-icons/tb";
import { BiUser } from "react-icons/bi";
import { RiServiceLine, RiProjectorLine } from "react-icons/ri";
import { MdOutlinePermContactCalendar } from "react-icons/md";

const services = [
  {
    title: "Web Developer",
    icon: web,
    description:
      "Creating interactive and functional websites to meet the specific needs of clients.",
  },
  {
    title: "Graphic Designer",
    icon: graphicDesigner,
    description:
      "Designing visually appealing and impactful graphic elements to enhance the visual identity of brands.",
  },
  {
    title: "Mobile Developer",
    icon: mobile,
    description:
      "Developing mobile applications to provide optimal experiences on iOS and Android platforms.",
  },
  {
    title: "Content Creator",
    icon: contentCreator,
    description:
      "Producing original and engaging online content to capture the interest and engagement of audiences.",
  },
];

const technologies = [
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
    name: "PHP",
    icon: php,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Mysql",
    icon: mysql,
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
    link: "https://alt-plus.onrender.com/",
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
    link: "https://www.afrilandfirstbank.com/",
    points: [
      "Check tele-clearing from other banks.",
      "Verification of digital data for domestic fund transfers.",
    ],
  },
];

const testimonials = [
  {
    key: -1,
    image: testimonial1,
    name: "Loic Durand",
    post: "Étudiant",
    message:
      "I am so grateful to have met Mr. Salim. His advice and support have helped me make progress in my studies.",
  },
  {
    key: 0,
    image: testimonial2,
    name: "Merline Yassa",
    post: "Entrepreneur",
    message:
      "The applications created by Mr. Salim are truly incredible. They have transformed the way I manage my business.",
  },
  {
    key: 1,
    image: testimonial3,
    name: "Moustapha Aka",
    post: "Directeur de l'hôtel Edkadi",
    message:
      "I use the SmartBook software developed by these young individuals. It is highly effective and has greatly improved our reservation system.",
  },
  {
    key: 2,
    image: testimonial4,
    name: "Cyril feussi",
    post: "Étudiant",
    message:
      "The training provided by Salim has been extremely beneficial for my career. I am now better prepared for the professional world.",
  },
  {
    key: 2,
    image: testimonial5,
    name: "Dimitri Mabon",
    post: "Développeur front-end",
    message:
      "I am impressed by Mr. Salim's web development skills. Working with him has been a rewarding experience.",
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
    thumbnail: thumbAltplusSite,
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
    thumbnail: thumbComx,
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
    thumbnail: thumbSocapco,
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
    thumbnail: thumbSmartbook,
    link: "http://smartbook.onrender.com/",
  },
  {
    name: "ma'adana cloud hosting",
    description:
      "Ma'adana Cloud Hosting is a reliable and innovative African cloud hosting service, providing top-notch hosting solutions for businesses and individuals.",
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
    thumbnail: thumbMaadana,
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
    thumbnail: thumbCampus,
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
    icon: BiUser,
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

export { services, technologies, experiences, testimonials, projects, nav };
