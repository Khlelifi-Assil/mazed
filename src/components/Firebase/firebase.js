// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBfm6WUMsnu-nVanKwmYVhfo9PrsS3aL0Q",
  authDomain: "mazed-af86f.firebaseapp.com",
  projectId: "mazed-af86f",
  storageBucket: "mazed-af86f.appspot.com",
  messagingSenderId: "575729686364",
  appId: "1:575729686364:web:7308ac1a8b71b3379a1399",
  measurementId: "G-LWQWJDMKRV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);