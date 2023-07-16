import { initializeApp } from "firebase/app";
import * as firebaseAuth from "firebase/auth";

import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCIpEbSVPLuEbcuqLZckYJD-S-Nqxvrtl0",
  authDomain: "reactapp-70a5c.firebaseapp.com",
  projectId: "reactapp-70a5c",
  storageBucket: "reactapp-70a5c.appspot.com",
  messagingSenderId: "407842479903",
  appId: "1:407842479903:web:6942f032729ae381189a2a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = firebaseAuth.initializeAuth(app,{
  persistence: firebaseAuth.browserLocalPersistence
});

export const db = getFirestore(app)

