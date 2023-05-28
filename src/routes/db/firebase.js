// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCHb7r72TjcE22xhkBd8spI6_wgtBhEvRY",
  authDomain: "portfolio-contacts-c8759.firebaseapp.com",
  projectId: "portfolio-contacts-c8759",
  storageBucket: "portfolio-contacts-c8759.appspot.com",
  messagingSenderId: "546030283138",
  appId: "1:546030283138:web:690fa008997f042097c79b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);