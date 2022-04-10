// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAa5A-VtgOaQdI_3HOHy2rJS-lGj9uLCAY",
  authDomain: "ema-john-simple-102dd.firebaseapp.com",
  projectId: "ema-john-simple-102dd",
  storageBucket: "ema-john-simple-102dd.appspot.com",
  messagingSenderId: "600340985224",
  appId: "1:600340985224:web:2fb640c1ef0c39c22f763d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;