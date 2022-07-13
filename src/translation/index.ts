import i18n from "i18next";
import detector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

import pt from "./json/pt.json";
import en from "./json/en.json";

i18n
  .use(detector)
  .use(initReactI18next)
  .init({
    fallbackLng: "en",
    resources: { en: { translation: en }, pt: { translation: pt } }
  });
