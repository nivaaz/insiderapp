import { createUserWithEmailAndPassword } from "firebase/auth";
import { get, getDatabase, push, ref, set } from "firebase/database";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_apiKey,
  authDomain: process.env.NEXT_PUBLIC_authDomain,
  databaseURL: process.env.NEXT_PUBLIC_databaseURL,
  projectId: process.env.NEXT_PUBLIC_projectId,
  storageBucket: process.env.NEXT_PUBLIC_storageBucket,
  messagingSenderId: process.env.NEXT_PUBLIC_messagingSenderId,
  appId: process.env.NEXT_PUBLIC_appId,
  measurementId: process.env.NEXT_PUBLIC_measurementId,
};

// Initialize Realtime Database and get a reference to the service

export const addEmailToWaitlist = (app, email, customerType) => {
  const db = getDatabase(app);
  const postListRef = ref(db, "emailList");
  const newPostRef = push(postListRef);
  set(newPostRef, {
    customerType: customerType,
    email: email,
  });
};

export const getNumberOfSignUps = async (app) => {
  const db = getDatabase(app);
  const dbRef = ref(db, "emailList");
  let numSignup = "100+";

  const x = await get(dbRef)
    .then((snapshot) => {
      if (snapshot.exists()) {
        numSignup = Object.keys(snapshot?.val()).length;
        return numSignup;
      } else {
        console.log("No data available");
      }
    })
    .catch((error) => {
      console.error(error);
    });
  return x;
};

//  **** AUTH ****
export const createUser = async (auth, email, password) => {
  const usr = await createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      return user;
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      throw Error(errorMessage);
    });
  return usr;
};
