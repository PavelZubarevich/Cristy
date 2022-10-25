import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import ru from './locale/ru.json';
import eu from './locale/eu.json';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: eu,
      },
      ru: {
        translation: ru,
      },
    },
    lng: 'en',
    fallbackLng: 'en',
  });
