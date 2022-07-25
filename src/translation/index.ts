import detector from "i18next-browser-languagedetector";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import en from "./json/en.json";
import pt from "./json/pt.json";

i18n
  .use(detector)
  .use(initReactI18next)
  .init({
    fallbackLng: "en",
    resources: { en: { translation: en }, pt: { translation: pt } },
  });
