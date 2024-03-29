import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { createContext, useEffect, useState, useContext } from "react";
import { firebaseConfig } from "./firebase";
import { initializeApp } from "firebase/app";

export const FirebaseContext = createContext({});

export const FirebaseProvider = ({ children }) => {
  const [analytics, setanalytics] = useState(null);
  const [auth, setauth] = useState(null);
  const [app, setApp] = useState(null);

  useEffect(() => {
    setApp(initializeApp(firebaseConfig));
  }, []);

  useEffect(() => {
    if (app) {
      setanalytics(getAnalytics(app));
      setauth(getAuth(app));
    } else {
      console.error("not init");
    }
  }, [app]);
 
  return (
    <FirebaseContext.Provider value={{ app, auth, analytics }}>
      {children}
    </FirebaseContext.Provider>
  );
};

export const useFirebase = ()=> (useContext(FirebaseContext));