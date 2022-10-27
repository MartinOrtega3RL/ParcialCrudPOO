// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBiiDC2prS9_IhbNZV9q60Pmz284yN5ctw",
  authDomain: "parcial-prog-96363.firebaseapp.com",
  projectId: "parcial-prog-96363",
  storageBucket: "parcial-prog-96363.appspot.com",
  messagingSenderId: "763134213940",
  appId: "1:763134213940:web:c7f976fd5f1b7eec162f61",
  measurementId: "G-Z211HK1E7X"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)