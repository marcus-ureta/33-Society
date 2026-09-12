import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';

import { initializeApp } from "firebase/app";
import { getFunctions, httpsCallable } from "firebase/functions";

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
const functions = getFunctions(app);


async function passwordGenerator() {
    const rl = readline.createInterface({ input, output });

    try {
        const input = await rl.question('Input Password: ');

        const registerPassword = httpsCallable(functions, "registerPassword");

        const result = await registerPassword({
            password: input,
        });

        console.log(`Successfully added ${input} to database as document!`);
        console.log(result.data);
    } catch (error) {
        console.error("Failed to add password:", error);
    } finally {
        rl.close();
    }
}

passwordGenerator();