import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import common_ar from "./translations/ar/common.json";
import common_en from "./translations/en/common.json";
const ns = ["common"];

i18n.use(initReactI18next).init({
  ns,
  resources: {
    ar: {
      common: common_ar,
    },
    en: {
      common: common_en,
    },
  },
  lng: "ar",
  fallbackLng: "ar",

  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
