import { createUserWithEmailAndPassword, sendEmailVerification, reload } from "firebase/auth";
import { doc, setDoc, serverTimestamp } from "firebase/firestore";
import { auth, database } from "../firebase";

import { type FormAnswers } from '@/portal/SignUp'

export async function createAccount(email: string, password: string) {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);

    const user = userCredential.user;

    await sendEmailVerification(user);

    return user;
}

export async function checkVerification(formData: FormAnswers) {
    const user = auth.currentUser;

    if (!user) {
        throw new Error("No user is currently signed in.");
    }

    // Refresh the user's Auth information
    await reload(user);

    if (!user.emailVerified) {
        throw new Error("Your email has not been verified yet.");
    }

    if(formData.email === user.email)
    {
        await setDoc(doc(database, "users", user.uid), {
            ...formData,
            createdAt: serverTimestamp(),
        });
    }
    else
    {
        await setDoc(doc(database, "users", user.uid), {
            ...formData,
            registeredEmail: user.email,
            createdAt: serverTimestamp(),
        });
    }
}