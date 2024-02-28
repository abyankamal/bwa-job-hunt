import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

type LangType = "en" | "id";

const useLang = () => {
  const [lang, setLang] = useState<LangType>("en");
  const { i18n } = useTranslation();

  const changeLang = (lang: LangType) => {
    setLang(lang);
    localStorage.setItem("lang", lang);
  };

  useEffect(() => {
    const lang = localStorage.getItem("lang");
    i18n.changeLanguage(lang as string);
  }, [lang]);

  return { lang, changeLang };
};

export default useLang;
