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
import en from "./assets/translation/en/translation.json";
import fr from "./assets/translation/fr/translation.json";

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
      translation: en,
    },
    fr: {
      translation: fr,
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
