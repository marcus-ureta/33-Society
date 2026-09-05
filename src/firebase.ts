import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDi1suVEaddQO9uQLhfO_L0Ome7KYxwAro",
    authDomain: "society-33.firebaseapp.com",
    projectId: "society-33",
    storageBucket: "society-33.firebasestorage.app",
    messagingSenderId: "337627806420",
    appId: "1:337627806420:web:8902f635a5599e06f59941",
    measurementId: "G-N19HYCF249"
};


const app = initializeApp(firebaseConfig);

export const database = getFirestore(app);
export const auth = getAuth(app);