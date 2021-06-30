import firebase from "firebase/app";
import { firestore } from "./firestore";

export interface User {
    uid: string;
    email: string;
    photoURL?: string;
    displayName?: string;
  }


export const updateUser = async (uid: string, email: string, photoURL: string, displayName: string) =>{
const user: User = {
    uid:uid,
    email:email,
    photoURL: photoURL,
    displayName: displayName
}
try {
    const db = await firestore();
    console.log('DB');
    // const userRef = await db.collection("users").add(user);
    // console.log('userRef', userRef);
    // return userRef;
    const userRef = await db.doc(`users/${user.uid}`);
    await userRef.set(user, { merge: true });
    return true;
} catch (error) {
    console.log('Error in updating user', error);
    throw error;
}
  }