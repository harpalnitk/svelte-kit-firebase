import firebaseConfig from "./env";
import { firestore } from "./firestore";

export async function initFirebase() {
  console.log('Inside Init Firebase');
  if (typeof window !== "undefined") {
    console.log('Inside Init Firebase Client');
    // You need to use firebase/app for the client side (BROWSER)
    const fb: any = (await import("firebase/app")).default;
    await import("firebase/auth");
    await import("firebase/firestore");
    await import("firebase/storage");
    // Initialize Firebase app only once

    console.log('Inside Init Firebase Client fb.apps.length', fb.apps.length);
	!fb.apps.length ? fb.initializeApp(firebaseConfig) : fb.app();
  console.log('Inside Init Firebase Client fb.apps.length', fb.apps.length);
  await firestore();
    return;
  }

  // On server we will access only public Databases and thus won't need firestore/auth
  // Below code will run on Node Server

  console.log('Inside Init Firebase Server');
  const fb: any = await import("firebase");
  if (fb.apps.length == 0) {
    fb.initializeApp(firebaseConfig);
    return;
  }
}