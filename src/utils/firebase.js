// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE,
  authDomain: "blog-4e000.firebaseapp.com",
  projectId: "blog-4e000",
  storageBucket: "blog-4e000.appspot.com",
  messagingSenderId: "313492196966",
  appId: "1:313492196966:web:e29920b0fa3282b0e527a7"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);