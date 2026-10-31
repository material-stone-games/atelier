import { getApp, getApps, initializeApp, type FirebaseApp } from "firebase/app";
import { initializeAppCheck, ReCaptchaEnterpriseProvider } from "firebase/app-check";
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
  // App Check must start before the other SDKs so their first requests carry a token.
  if (appConfig.appCheckSiteKey) {
    if (import.meta.env.DEV) (self as { FIREBASE_APPCHECK_DEBUG_TOKEN?: boolean }).FIREBASE_APPCHECK_DEBUG_TOKEN = true;
    initializeAppCheck(app, { provider: new ReCaptchaEnterpriseProvider(appConfig.appCheckSiteKey), isTokenAutoRefreshEnabled: true });
  }
  auth = getAuth(app);
  db = getFirestore(app);
  functions = getFunctions(app, appConfig.functionsRegion);
  storage = getStorage(app);
}

export { app, auth, db, functions, storage };
