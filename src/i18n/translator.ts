import translationsByLocale from './translationsByLocale';

const DEFAULT_LOCALE = 'en-gb';

const translator = (key: string) => {
  const translations = translationsByLocale[DEFAULT_LOCALE];
  return translations[key] || key;
};

export default translator;
