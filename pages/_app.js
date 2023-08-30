import React, { useEffect, useState } from "react";
import "../styles/globals.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import "../styles/globals.css";
import { FirebaseProvider } from "../components/firebaseProvider";

config.autoAddCss = false;

const MyApp = ({ Component }) => {
  return (
    <FirebaseProvider>
      <Component />
    </FirebaseProvider>
  );
};

export default MyApp;
