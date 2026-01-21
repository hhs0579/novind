// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCqPuJf-em_mhuw_pSOKcNsH8Z-SDMPhHM",
  authDomain: "novi-ee9b7.firebaseapp.com",
  projectId: "novi-ee9b7",
  storageBucket: "novi-ee9b7.firebasestorage.app",
  messagingSenderId: "39292294520",
  appId: "1:39292294520:web:5b0bac2967ac0dbf1b248d",
  measurementId: "G-X6K98VQXQR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Analytics (only in browser environment)
let analytics = null;
if (typeof window !== 'undefined') {
  analytics = getAnalytics(app);
}

export { app, analytics };

