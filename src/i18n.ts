import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import common_ar from "./translations/ar/common.json";
import common_en from "./translations/en/common.json";
import auth_ar from "./translations/ar/auth.json";
import auth_en from "./translations/en/auth.json";
import student_ar from "./translations/ar/student.json";
import student_en from "./translations/en/student.json";

const ns = ["common", "auth", "student"];

i18n.use(initReactI18next).init({
  ns,
  resources: {
    ar: {
      common: common_ar,
      auth: auth_ar,
      student: student_ar,
    },
    en: {
      common: common_en,
      auth: auth_en,
      student: student_en,
    },
  },
  lng: "ar",
  fallbackLng: "ar",

  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
