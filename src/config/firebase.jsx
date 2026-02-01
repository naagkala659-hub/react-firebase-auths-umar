// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBLyXiP_Px-h8-kpuhPJxOZOZ9yIGINJQI",
  authDomain: "reactwebauth-175dd.firebaseapp.com",
  projectId: "reactwebauth-175dd",
  storageBucket: "reactwebauth-175dd.firebasestorage.app",
  messagingSenderId: "21422380730",
  appId: "1:21422380730:web:0eba94ffce40f487e39483"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export default auth