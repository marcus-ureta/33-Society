import "dotenv/config"

import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';

import { initializeApp } from "firebase-admin/app";
import { getFirestore, FieldValue } from "firebase-admin/firestore";

initializeApp({
    projectId: "society-33",
});

const db = getFirestore();

async function passwordGenerator() {
    const rl = readline.createInterface({ input, output });

    console.log(
        "Credential path:",
        process.env.GOOGLE_APPLICATION_CREDENTIALS
    );

    try {
        const input = await rl.question('Input Password: ');

        if (!input) {
            console.error("Password cannot be empty.");
            return;
        }

        const doc = await db.collection("registeredPasswords").add({
            password: input,
            isActive: true,
            createdAt: FieldValue.serverTimestamp(),
        });

        console.log(`Successfully added ${input} to database as document!`);
        console.log(`Document ID: ${doc.id}`);
    } catch (error) {
        console.error("Failed to add password:", error);
    } finally {
        rl.close();
    }
}

passwordGenerator();