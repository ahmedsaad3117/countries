import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";

import { Routess } from "./routes/routes";

import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import HttpApi from "i18next-http-backend";
import Navbar from "./componant/navbar";

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .use(LanguageDetector)
  .use(HttpApi)
  .init({
    supportedLngs: ["en", "fr", "ar"],

    fallbackLng: "en",
    detection: {
      order: [
        "cookie",
        "htmlTag",
        "localStorage",
        "sessionStorage",
        "navigator",
        "querystring",
        "path",
        "subdomain",
      ],
      caches: ["cookie"],
    },
    backend: {
      loadPath: "/assets/locales/{{lng}}/translation.json",
    },
  });

function App() {
  const { t } = useTranslation();

  return (
    <>
      
      <Router>
      <Navbar />
        <Routess />
      </Router>
    </>
  );
}

export default App;
