
import {setGlobalOptions} from "firebase-functions";
import {onRequest} from "firebase-functions/https";

import {onCall, HttpsError} from "firebase-functions/v2/https";
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