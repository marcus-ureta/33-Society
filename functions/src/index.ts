
import {setGlobalOptions} from "firebase-functions";

import {onCall, CallableRequest } from "firebase-functions/v2/https";
import * as logger from "firebase-functions/logger";

import { initializeApp } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";

initializeApp();

const db = getFirestore();

setGlobalOptions({maxInstances: 10, region: "asia-east2"});


interface authPasswordProps {
    password: string
}

export const authenticatePassword = onCall( async (request : CallableRequest<authPasswordProps>) => {

    const password = request.data.password;

    logger.info(password);

    // return a boolean based on the fetched password from database
    const getDbPassword = 'ballslover69'

    if(password === getDbPassword) {
        return{
            authToken: '692301',
            success: true
        }
    }

    return{
        authToken: null,
        success: false
    }
})