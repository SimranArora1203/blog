// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE,
  authDomain: "blog-f78c9.firebaseapp.com",
  projectId: "blog-f78c9",
  storageBucket: "blog-f78c9.appspot.com",
  messagingSenderId: "158760372299",
  appId: "1:158760372299:web:89e66a4adb80a9e99a25ce",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
