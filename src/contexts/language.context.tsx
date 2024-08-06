import {
  createContext,
  FC,
  PropsWithChildren,
  useContext,
  useState,
  useEffect,
} from "react";
import i18n from "../i18n";
import { TranslationModel } from "../models/common";

const defaultLanguage = 0;

interface State {
  cultureCode: 0 | 1;
  changeLanguage: (code: 0 | 1) => void;
  getLocaleString: (translations: TranslationModel[]) => string;
  isRtl: boolean;
}

const initialState: State = {
  cultureCode: defaultLanguage,
  changeLanguage: () => null,
  getLocaleString: () => "",
  isRtl: false,
};

const LanguageContext = createContext<State>(initialState);

export const LanguageProvider: FC<PropsWithChildren> = ({ children }) => {
  const [cultureCode, setCultureCode] = useState<0 | 1>(() => {
    const storedLanguage = localStorage.getItem("cultureCode");
    return storedLanguage
      ? (parseInt(storedLanguage) as 0 | 1)
      : defaultLanguage;
  });

  useEffect(() => {
    i18n.changeLanguage(cultureCode === 0 ? "en" : "ar");
  }, [cultureCode]);

  const changeLanguage = (code: 0 | 1) => {
    i18n.changeLanguage(code === 0 ? "en" : "ar");
    setCultureCode(code);
    localStorage.setItem("cultureCode", code.toString());
  };

  const getLocaleString = (translations: TranslationModel[]): string => {
    const translation = translations.find((t) => t.cultureCode === cultureCode);
    return translation ? translation.name : "";
  };

  const isRtl = cultureCode === 1;

  return (
    <LanguageContext.Provider
      value={{ cultureCode, isRtl, changeLanguage, getLocaleString }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
