/* eslint-disable camelcase */
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import * as RNLocalize from 'react-native-localize';
import en from './en';
import pt_br from './pt-br';

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources: {
      'en-US': en,
      'pt-BR': pt_br,
    },
    lng: RNLocalize.getLocales()[0].languageTag,
    fallbackLng: 'en-US',

    interpolation: {
      escapeValue: false,
    },
  });
