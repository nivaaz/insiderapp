import React, { useEffect, useState } from "react";
import "../styles/globals.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { FirebaseContext } from "../components/firebaseProvider";
import { app } from "../components/firebase";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import "../styles/globals.css"
config.autoAddCss = false;

const MyApp = ({ Component, pageProps }) => {
  const [analytics, setanalytics] = useState(null);
  const [auth, setauth] = useState(null);
  useEffect(() => {
    setanalytics( getAnalytics(app));
    setauth( getAuth(app));
  }, []);
  return (
    <FirebaseContext.Provider value={{ app: app, auth: auth }}>
      <Component {...pageProps} />
    </FirebaseContext.Provider>
  );
};

export default MyApp;
