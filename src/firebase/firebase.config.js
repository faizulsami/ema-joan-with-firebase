// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCygf2PHgRUEKDxCsSYgqIq-B6uatlI_lE",
  authDomain: "ema-joan-with-firebase.firebaseapp.com",
  projectId: "ema-joan-with-firebase",
  storageBucket: "ema-joan-with-firebase.appspot.com",
  messagingSenderId: "385404707935",
  appId: "1:385404707935:web:01a399ece80487d09827ea"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;