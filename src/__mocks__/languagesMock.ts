import '../languages';

jest.mock('react-native-localize', () => {
  return { getLocales: jest.fn().mockReturnValue([{ languageTag: 'en-US' }]) };
});

const getLocales = () => [
  { countryCode: 'US', languageTag: 'en-US', languageCode: 'en', isRTL: false },
];

const findBestAvailableLanguage = () => ({ languageTag: 'es', isRTL: 'false' });
const getNumberFormatSettings = () => ({
  decimalSeparator: '.',
  groupingSeparator: ',',
});

const getCalendar = () => 'gregorian'; // or "japanese", "buddhist"
const getCountry = () => 'ES'; // the country code you want
const getCurrencies = () => ['USD']; // can be empty array
const getTemperatureUnit = () => 'celsius'; // or "fahrenheit"
const getTimeZone = () => 'Ecuador/Guayaquil'; // the timezone you want
const uses24HourClock = () => true;
const usesMetricSystem = () => true;

const addEventListener = jest.fn();
const removeEventListener = jest.fn();

export {
  findBestAvailableLanguage,
  getLocales,
  getNumberFormatSettings,
  getCalendar,
  getCountry,
  getCurrencies,
  getTemperatureUnit,
  getTimeZone,
  uses24HourClock,
  usesMetricSystem,
  addEventListener,
  removeEventListener,
};
