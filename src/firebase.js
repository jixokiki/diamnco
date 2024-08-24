import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"; // Import Firestore

const firebaseConfig = {
    apiKey: "AIzaSyCsS1h4UzU881X3mbH_l7s7Ds6vxauyBrU",
    authDomain: "diamnco.firebaseapp.com",
    projectId: "diamnco",
    storageBucket: "diamnco.appspot.com",
    messagingSenderId: "896298082513",
    appId: "1:896298082513:web:7ae99bfe891af010aee5f0",
    measurementId: "G-NL8JHLRDX8"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app); // Initialize Firestore

export { auth, db };
