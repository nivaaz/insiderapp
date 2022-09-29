import React, { useEffect } from "react";
import "../styles/globals.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { FirebaseContext } from "../components/firebaseProvider";
config.autoAddCss = false;
import { app } from "../components/firebase";
import { getAnalytics } from "firebase/analytics";

const MyApp = ({ Component, pageProps }) => {
  useEffect(() => {
    const analytics = getAnalytics(app);
  }, []);
  return (
    <FirebaseContext.Provider value={app}>
      <Component {...pageProps} />
    </FirebaseContext.Provider>
  );
};

export default MyApp;
