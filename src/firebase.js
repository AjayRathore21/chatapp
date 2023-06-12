// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCrl5rnGIISYRP3-znNgUSXPvXkoYNJ5FU",
  authDomain: "reactchatapp-f9abe.firebaseapp.com",
  projectId: "reactchatapp-f9abe",
  storageBucket: "reactchatapp-f9abe.appspot.com",
  messagingSenderId: "980927798227",
  appId: "1:980927798227:web:240d22ed420f2291e5ad26",
  measurementId: "G-HTH4D4TEJM",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
