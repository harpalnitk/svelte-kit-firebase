import firebaseConfig from "./env";

export async function initFirebase() {
  if (typeof window !== "undefined") {
    // You need to use firebase/app for the client side (BROWSER)
    const fb: any = (await import("firebase/app")).default;
    await import("firebase/auth");
    await import("firebase/firestore");
    await import("firebase/storage");
    // Initialize Firebase app only once
	!fb.apps.length ? fb.initializeApp(firebaseConfig) : fb.app()
    return;
  }

  // On server we will access only public Databases and thus won't need firestore/auth
  // Below code will run on Node Server
  const fb: any = await import("firebase");
  if (fb.apps.length == 0) {
    fb.initializeApp(firebaseConfig);
    return;
  }
}