import AsyncStorage from "@react-native-async-storage/async-storage";
import { initializeApp } from "firebase/app";
import { getAuth, setPersistence, browserLocalPersistence } from "firebase/auth"; 

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

// Initialize Firebase Auth
export const auth = getAuth(app);

// // Set persistence using AsyncStorage
// setPersistence(auth, browserLocalPersistence)
//   .then(() => {
//     console.log("Persistence enabled");
//   })
//   .catch((error) => {
//     console.error("Error enabling persistence:", error);
//   });
