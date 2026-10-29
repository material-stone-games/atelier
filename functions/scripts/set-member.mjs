import { getApps, initializeApp } from "firebase-admin/app";
import { getAuth } from "firebase-admin/auth";
import { FieldValue, Timestamp, getFirestore } from "firebase-admin/firestore";

// YouTube Data API cannot tell whether a viewer is a channel member, so members are granted manually.
const [email, daysArg = "31"] = process.argv.slice(2);
if (!email) {
  console.error("Usage: npm run set-member -- member@example.com [days|off]");
  process.exit(1);
}

if (!getApps().length) initializeApp();
const user = await getAuth().getUserByEmail(email);
const ref = getFirestore().doc(`users/${user.uid}`);

if (daysArg === "off") {
  await ref.set({ memberUntil: FieldValue.delete(), updatedAt: FieldValue.serverTimestamp() }, { merge: true });
  console.log(`Membership removed from ${email} (${user.uid}).`);
} else {
  const days = Number(daysArg);
  if (!Number.isFinite(days) || days <= 0) {
    console.error("days must be a positive number or 'off'.");
    process.exit(1);
  }
  const memberUntil = Timestamp.fromMillis(Date.now() + days * 24 * 60 * 60 * 1000);
  await ref.set({ memberUntil, updatedAt: FieldValue.serverTimestamp() }, { merge: true });
  console.log(`Membership granted to ${email} (${user.uid}) until ${memberUntil.toDate().toISOString()}.`);
}
