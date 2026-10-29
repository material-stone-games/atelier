import { getApps, initializeApp } from "firebase-admin/app";
import { getAuth } from "firebase-admin/auth";

const email = process.argv[2];
if (!email) {
  console.error("Usage: npm run set-admin -- admin@example.com");
  process.exit(1);
}

if (!getApps().length) initializeApp();
const auth = getAuth();
const user = await auth.getUserByEmail(email);
await auth.setCustomUserClaims(user.uid, { ...(user.customClaims ?? {}), admin: true });
console.log(`Admin claim granted to ${email} (${user.uid}). Sign out and sign in again to refresh the token.`);
