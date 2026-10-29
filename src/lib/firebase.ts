import { getApp, getApps, initializeApp, type FirebaseApp } from "firebase/app";
import { getAuth, type Auth } from "firebase/auth";
import { getFirestore, type Firestore } from "firebase/firestore";
import { getFunctions, type Functions } from "firebase/functions";
import { getStorage, type FirebaseStorage } from "firebase/storage";
import { appConfig, hasFirebaseConfig } from "./config";

let app: FirebaseApp | null = null;
let auth: Auth | null = null;
let db: Firestore | null = null;
let functions: Functions | null = null;
let storage: FirebaseStorage | null = null;

if (hasFirebaseConfig) {
  const config = {
    apiKey: appConfig.firebase.apiKey,
    authDomain: appConfig.firebase.authDomain,
    projectId: appConfig.firebase.projectId,
    storageBucket: appConfig.firebase.storageBucket,
    messagingSenderId: appConfig.firebase.messagingSenderId,
    appId: appConfig.firebase.appId,
    measurementId: appConfig.firebase.measurementId,
  };

  app = getApps().length > 0 ? getApp() : initializeApp(config);
  auth = getAuth(app);
  db = getFirestore(app);
  functions = getFunctions(app, appConfig.functionsRegion);
  storage = getStorage(app);
}

export { app, auth, db, functions, storage };
