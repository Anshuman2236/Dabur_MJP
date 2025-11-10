// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'  
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCfuMao_CRcMC3LIru11-YdTZVAhsJ5Low",
  authDomain: "learn-d0c78.firebaseapp.com",
  projectId: "learn-d0c78",
  storageBucket: "learn-d0c78.appspot.com",
  messagingSenderId: "58264623982",
  appId: "1:58264623982:web:2f785c94e82dcc97cd7f7f",
  measurementId: "G-W1ZZDDMXX3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)