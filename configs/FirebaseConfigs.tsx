// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDbPiKK76BAYN3zJK9RDd3yuSiQVf3j_jQ",
    authDomain: "ai-travel-planner-31c40.firebaseapp.com",
    projectId: "ai-travel-planner-31c40",
    storageBucket: "ai-travel-planner-31c40.appspot.com",
    messagingSenderId: "236257862136",
    appId: "1:236257862136:web:da164514a3e059a3f3f60d",
    measurementId: "G-7Z4HWVL3J7"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

