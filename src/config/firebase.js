// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDDFViRa6S58xSHAvlYtswT4FZ4_lS4wSg",
  authDomain: "fir-login-b787d.firebaseapp.com",
  projectId: "fir-login-b787d",
  storageBucket: "fir-login-b787d.appspot.com",
  messagingSenderId: "595043753301",
  appId: "1:595043753301:web:05a7a49d9feb93ad59e3dc",
  measurementId: "G-R5JEX8M8HH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth = getAuth(app)
export const googleProvider = new GoogleAuthProvider()