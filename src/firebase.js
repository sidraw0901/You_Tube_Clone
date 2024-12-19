// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAbz4BySDJFeFwg4h1MewWSPsmwcmdKBmQ",
  authDomain: "clone-8dc31.firebaseapp.com",
  projectId: "clone-8dc31",
  storageBucket: "clone-8dc31.appspot.com",
  messagingSenderId: "1025715092095",
  appId: "1:1025715092095:web:4f358249429e579fcc5d4a",
  measurementId: "G-2TV0WCFJW8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);