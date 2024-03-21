// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCLrsX-OlAdcTYCmx6cVE1Ausm4MN8c2_c",
  authDomain: "netflixgpt-ababd.firebaseapp.com",
  projectId: "netflixgpt-ababd",
  storageBucket: "netflixgpt-ababd.appspot.com",
  messagingSenderId: "889644672419",
  appId: "1:889644672419:web:0416efd987e42c81cb6616",
  measurementId: "G-C089ZLG6YK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth()