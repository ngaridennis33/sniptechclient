// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE,
  authDomain: "sniptech-blog.firebaseapp.com",
  projectId: "sniptech-blog",
  storageBucket: "sniptech-blog.appspot.com",
  messagingSenderId: "947479345581",
  appId: "1:947479345581:web:379a726e79e7c9e9c50924",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
