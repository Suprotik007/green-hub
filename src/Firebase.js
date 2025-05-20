// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAFgW4fujky-GbsX2BI_gDxqvLuW2hddes",
  authDomain: "garden-king-auth.firebaseapp.com",
  projectId: "garden-king-auth",
  storageBucket: "garden-king-auth.firebasestorage.app",
  messagingSenderId: "6420600485",
  appId: "1:6420600485:web:daa56e511f0760e88adf4c"
};

// Initialize Firebase
 export const app = initializeApp(firebaseConfig);
export const auth =getAuth(app)