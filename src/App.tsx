<<<<<<< HEAD
import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
=======
import logo from './logo.svg';
import './App.css';
import { useTranslation, Trans } from 'react-i18next';
import { Suspense } from 'react';
import Footer from './components/Footer'

const language:any = {
  en: { nativeName: 'English' },
  de: { nativeName: 'Deutsch' }
};

function App() {
  const { t, i18n } = useTranslation();

>>>>>>> 1dc4d6b9ffb8875a511ee17bc61aee82d4e04301
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
<<<<<<< HEAD
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
=======
        <div>
          {Object.keys(language).map((lng) => (
            <button key={lng} style={{ fontWeight: i18n.resolvedLanguage === lng ? 'bold' : 'normal' }} type="submit" onClick={() => i18n.changeLanguage(lng)}>
              {language[lng].nativeName}
            </button>
          ))}
        </div>
        <p>
          <Trans i18nKey="description.part1">
            Edit <code>src/App.js</code> and save to reload.
          </Trans>
>>>>>>> 1dc4d6b9ffb8875a511ee17bc61aee82d4e04301
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
<<<<<<< HEAD
          Learn React
        </a>
      </header>
=======
          {t('description.part2')}
        </a>
      </header>
      <Footer t={t} />
>>>>>>> 1dc4d6b9ffb8875a511ee17bc61aee82d4e04301
    </div>
  );
}

<<<<<<< HEAD
export default App;
=======
// here app catches the suspense from page in case translations are not yet loaded
export default function WrappedApp() {
  return (
    <Suspense fallback="...is loading">
      <App />
    </Suspense>
  );
}
>>>>>>> 1dc4d6b9ffb8875a511ee17bc61aee82d4e04301
