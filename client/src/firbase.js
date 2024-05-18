// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "urban-nest-22037.firebaseapp.com",
  projectId: "urban-nest-22037",
  storageBucket: "urban-nest-22037.appspot.com",
  messagingSenderId: "489024719030",
  appId: "1:489024719030:web:19569527818e33cea1fe17"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);