
import {setGlobalOptions} from "firebase-functions";

import {onCall, CallableRequest } from "firebase-functions/v2/https";
import * as logger from "firebase-functions/logger";

import { initializeApp } from "firebase-admin/app";
import { getFirestore, FieldValue } from "firebase-admin/firestore";

initializeApp();

const db = getFirestore();

setGlobalOptions({maxInstances: 10, region: "asia-east2"});


interface authPasswordProps {
    password: string
}

export const authenticatePassword = onCall( async (request : CallableRequest<authPasswordProps>) => {

    const userInput = request.data.password;

    try{
        const getMatchedPassword = await db.collection('registeredPasswords').where('isActive', '==', true)
            .where('password', '==', userInput).limit(1).get();

        if(getMatchedPassword.empty) {
            return {
                authToken: null,
                success: false,
                errorMessage: 'No matching passwords!'
            }
        }

        return {
            authToken: '',
            success: true
        }

        
    }catch (e) {
        logger.info(e);

        return {
            authToken: null,
            success: false,
            errorMessage: 'Unexpected Error. Please try again later.'
        }
    }
})

export const registerPassword = onCall(async (request) => {
    const { password } = request.data;

    if (!password || typeof password !== "string") {
        throw new Error("Invalid password");
    }

    const db = getFirestore();

    const doc = await db.collection("registeredPasswords").add({
        password,
        isActive: true,
        createdAt: FieldValue.serverTimestamp(),
    });

    return {
        success: true,
        id: doc.id,
    };
});