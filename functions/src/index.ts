
import {setGlobalOptions} from "firebase-functions";
import {onRequest} from "firebase-functions/https";

import {onCall, HttpsError, CallableRequest } from "firebase-functions/v2/https";
import * as logger from "firebase-functions/logger";


setGlobalOptions({maxInstances: 10, region: "asia-east2"});

export const helloWorld = onRequest({ cors: true },(request, response) => {
    logger.info("Hello logs!", {structuredData: true});
    response.send("Hello from Firebase! Teehee");
});

export const getSystemStatus = onCall((request : any) => {
    logger.info('request receieved: ' + request);

    if (!request.auth) {
        throw new HttpsError("unauthenticated", "The function must be called while authenticated.");
    }

    return { status: "operational", timestamp: Date.now() };
});

interface authPasswordProps {
    password: string
}

export const authenticatePassword = onCall((request : CallableRequest<authPasswordProps>) => {

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