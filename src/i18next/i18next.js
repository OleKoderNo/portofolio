import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';
import { initReactI18next } from 'react-i18next';
import translationNO from '../../public/locales/no/translation.json';
import translationEN from '../../public/locales/en/translation.json'

const resources = {
  no: {
    translation: translationNO
  },
  en: {
    translation: translationEN
  }
}
i18n
  .use(Backend)
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    resources,
    fallbackLng: "no",
    debug: true,

    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
