import { BrowserRouter } from "react-router-dom";
import { createContext, useEffect, useState } from "react";
import Cookies from "js-cookie";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Tech from "./components/Tech";
import Works from "./components/Works";
import Contact from "./components/Contact";
import Testimonials from "./components/Testimonials";
// import Skills from "./components/Skills";

// Animation package
import Aos from "aos";
import "aos/dist/aos.css";
import Footer from "./components/Footer";

export const ThemeContext = createContext("light");

const App = () => {
  useEffect(() => {
    Aos.init({
      duration: 600,
      offset: 100,
      // disable: "mobile",
    });
  }, []);
  const [theme, setTheme] = useState(Cookies.get("theme"));

  useEffect(() => {
    return () => {
      if (theme) {
        if (theme === "dark") {
          document.documentElement.classList.add("dark");
          document.documentElement.classList.remove("light");
        } else {
          document.documentElement.classList.add("light");
          document.documentElement.classList.remove("dark");
        }
      } else {
        Cookies.set("theme", "light");
      }
    };
  }, []);
  return (
    <ThemeContext.Provider
      value={{
        SetTheme: setTheme,
        Theme: theme,
      }}
    >
      <BrowserRouter>
        <div className="relative z-0 w-screen">
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
          {/* <Skills /> */}
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
