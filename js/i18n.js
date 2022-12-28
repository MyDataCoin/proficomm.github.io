import i18n from 'i18next'
import Backend from 'i18next-http-backend'
import LanguageDetector from 'i18next-browser-languagedetector'
import { initReactI18next } from 'react-i18next'


i18n
  // Подключение бэкенда i18next
  .use(Backend)
  // Автоматическое определение языка 
  .use(LanguageDetector)
  // модуль инициализации
  .use (initReactI18next)
  .init({
    fallbackLng: "ru",
    whitelist:["ru", "en"],
    debug:true,
    detection: {
      order: ["localStorage", "cookie"],
      caches: ["localStorage", "cookie"],
    },
    interpolation: {
      escapeValue: false
    },
  backend: {
    loadpath:'bermetbakyt.github.io/proficommunications.github.io/locales/en/{{translation}}.json',
    loadPath: 'bermetbakyt.github.io/proficommunications.github.io/locales/ru/{{translation}}.json'
  }
})

export default i18n;