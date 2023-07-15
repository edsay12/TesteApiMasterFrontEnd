import { initializeApp } from "firebase/app";
import * as firebaseAuth from "firebase/auth";

import { getFirestore } from "firebase/firestore";

export const firebaseApp = {
  apiKey: "AIzaSyAfB7Q-BSJhTiwo9lNNkMR27TOhY4QvxQw",
  authDomain: "gamerfinder-31a7b.firebaseapp.com",
  projectId: "gamerfinder-31a7b",
  storageBucket: "gamerfinder-31a7b.appspot.com",
  messagingSenderId: "958760335301",
  appId: "1:958760335301:web:926423aae61d8fbd2f3dac",
  measurementId: "G-RY69Y5HC8Q",
};

export const app = initializeApp(firebaseApp);
export const auth = firebaseAuth.initializeAuth(app,{
  persistence: firebaseAuth.browserLocalPersistence
});

export const db = getFirestore(app)

