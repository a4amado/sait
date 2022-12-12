// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyCPHSsraLEMa2Hu41OVACMV_nslUgJyqUU",
  authDomain: "sait-5fd26.firebaseapp.com",
  projectId: "sait-5fd26",
  storageBucket: "sait-5fd26.appspot.com",
  messagingSenderId: "505856707076",
  appId: "1:505856707076:web:e5bc46d5e979c8eee94351",
  measurementId: "G-CXPZ214N2C"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage(app);
export const db = getFirestore(app);
