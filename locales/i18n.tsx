import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';

import en from './en.json';

function i18n() {
  i18next.use(initReactI18next).init({
    compatibilityJSON: 'v3',
    resources: {
      en: {
        translation: en,
      },
    },
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });
}

export default i18n;
