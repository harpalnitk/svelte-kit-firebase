import type firebase from "firebase/app";

let db: firebase.firestore.Firestore = null;

export async function firestore(): Promise<firebase.firestore.Firestore> {
  if (db) {
    console.log('Db is already present');
    return db;
  }

  // Checks for the client
  if (typeof window !== "undefined") {
    const fb: any = (await import("firebase/app")).default;
    console.log('Inside firestore fb.apps.length', fb.apps.length);
    db = await fb.firestore() as firebase.firestore.Firestore;
    console.log('Db of client is being returned');
    return db;
  }

  const fb: any = await import("firebase");
  console.log('Db of server is being returned');
  db = await fb.apps[0].firestore() as firebase.firestore.Firestore;
  return db;
}