import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./assets/translation/en/translation.json";
import fr from "./assets/translation/fr/translation.json";

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

export default i18next;
