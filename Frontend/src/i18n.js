import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import HttpApi from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(HttpApi) // Load translations from files
  .use(LanguageDetector) // Detect language automatically
  .use(initReactI18next) // Bind i18n to React
  .init({
    fallbackLng: 'en', // Default language
    supportedLngs: ['en', 'ja', 'ta', 'sv', 'zh', 'hi', 'kn', 'ml', 'te'],
    backend: {
      loadPath: '/locales/{{lng}}/translation.json', // File path for translations
    },
    detection: {
      order: ['path', 'cookie', 'localStorage', 'htmlTag'], // Language detection methods
      caches: ['cookie'], // Cache user language in cookies
    },
    interpolation: {
      escapeValue: false, // React already escapes values
    },
  });

// Log current language and loaded resources after initialization
i18n.on('initialized', (options) => {
  console.log('Current Language:', i18n.language);  // Logs the current language
  console.log('Resources:', i18n.store.data);      // Logs all the loaded translation resources
});

export default i18n;
