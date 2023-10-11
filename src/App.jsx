import { BrowserRouter } from "react-router-dom";
import { createContext, useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Tech from "./components/Tech";
import Works from "./components/Works";
import Contact from "./components/Contact";
import Testimonials from "./components/Testimonials";

// Animation package
import Aos from "aos";
import "aos/dist/aos.css";
import Footer from "./components/Footer";
import { Toaster } from "react-hot-toast";
import i18next from "i18next";
import { initReactI18next } from "react-i18next";

// Récupérer la langue par défaut du navigateur
const browserLang = navigator.language.slice(0, 2);
const defaultLang = ["fr", "en"].includes(browserLang) ? browserLang : "en";

i18next.use(initReactI18next).init({
  lng: localStorage.getItem("language") || defaultLang,
  fallbackLng: "en",
  debug: true,
  resources: {
    en: {
      translation: {
        key: "hello world !",
        ready:
          "Ready to captivate your audience with stunning digital experiences?",
        hi: "Hi, I'm",
        iam: "I'm web developer, graphic designer, and online content creator.",
        letsgetsarted: "Let's get started",
        overview: "Overview.",
        aboutMe:
          "Passionate Full Stack Web and Mobile Developer, specialized in interface ergonomics and web design. 🌟 Creates responsive and optimized experiences for mobile devices. 📱💻 Available for free consultations.",
        contactMe: "Contact me",
        contactLinks: "Contact links",
        whatIhaveDone: "What I have done so far",
        workExperience: "Work Experience.",
        mainTechnologies: "My main technologies",
        seeMore: "See more...",
        myWork: "My work",
        projects: "Projects.",
        projectText:
          "Following projects showcases my skills and experience through real-world examples of my work. Each project is briefly described with links to live demos in it. It reflects my ability to solve complex problems, work with different technologies, and manage projects effectively.",
        clientsReviews: "MY CLIENT REVIEWS",
        testimonials: "Testimonials",
        testimonialsText:
          "Discover the testimonials of my satisfied clients. Their authentic and positive reviews testify to the quality of my services and my ability to meet their needs.",
        testimonial: "Testimonial",
        yourName: "Your Name",
        yourEmail: "Your email",
        yourMessage: "Your Message",
        pleasEname: "Please enter your name.",
        pleaseemail: "Please enter your email.",
        pleaseValidEmail: "Please enter a valid email.",
        pleaseMessage: "Please enter your message.",
        english: "english",
        french: "french",
      },
    },
    fr: {
      translation: {
        key: "bonjour tout le monde !",
        ready:
          "Prêt à captiver votre audience avec une expérience digitale incroyable ?",
        hi: "Salut, je suis",
        iam: "Je suis développeur web, designer graphique et créateur de contenu en ligne.",
        letsgetsarted: "Commençons",
        overview: "Apropos de moi.",
        aboutMe:
          "Développeur Full Stack Web et Mobile passionné, spécialisé dans l'ergonomie des interfaces et le design web. 🌟 Crée des expériences réactives et optimisées pour les appareils mobiles. 📱💻 Disponible pour des consultations gratuites.",
        contactMe: "Contactez-moi",
        contactLinks: "Liens de contact",
        whatIhaveDone: "Ce que j'ai accompli jusqu'à présent",
        workExperience: "Expérience professionnelle.",
        mainTechnologies: "Mes principales technologies",
        seeMore: "Voir plus...",
        myWork: "Mon travail",
        projects: "Projets.",
        projectText:
          "Les projets suivants présentent mes compétences et mon expérience à travers des exemples concrets de mon travail. Chaque projet est brièvement décrit avec des liens vers des démonstrations en direct. Cela reflète ma capacité à résoudre des problèmes complexes, à travailler avec différentes technologies et à gérer efficacement des projets.",
        clientsReviews: "AVIS DE MES CLIENTS",
        testimonials: "Témoignages",
        testimonialsText:
          "Découvrez les témoignages de mes clients satisfaits. Leurs avis authentiques et positifs témoignent de la qualité de mes services et de ma capacité à répondre à leurs besoins.",
        testimonial: "Témoignage",
        yourName: "Votre nom",
        yourEmail: "Votre email",
        yourMessage: "Votre message",
        pleasEname: "Veuillez entrer votre nom.",
        pleaseemail: "Veuillez entrer votre email.",
        pleaseValidEmail: "Veuillez entrer une adresse email valide.",
        pleaseMessage: "Veuillez entrer votre message.",
        english: "anglais",
        french: "français",
      },
    },
  },
});

export const ThemeContext = createContext("light");

const App = () => {
  useEffect(() => {
    Aos.init({
      duration: 600,
      offset: 100,
      // disable: "mobile",
    });
  }, []);
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    if (theme === "dark") {
      localStorage.setItem("theme", "dark");
    } else {
      localStorage.setItem("theme", "light");
    }
  }, [theme]);

  return (
    <ThemeContext.Provider
      value={{
        SetTheme: setTheme,
        Theme: theme,
      }}
    >
      <BrowserRouter>
        <div className="relative z-0 w-screen">
          <Toaster />
          <div
            className={`${
              theme === "light"
                ? "bg-hero-pattern-light"
                : "bg-hero-pattern-dark"
            } bg-cover bg-no-repeat bg-center`}
          >
            <Navbar />
            <Hero />
          </div>
          <About />
          <Experience />
          <Tech />
          <Works />
          <Testimonials />
          <div className="relative z-0 dark:bg-dark">
            <Contact />
          </div>
          <Footer />
        </div>
      </BrowserRouter>
    </ThemeContext.Provider>
  );
};

export default App;
