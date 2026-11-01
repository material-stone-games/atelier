// Keep in sync with src/lib/access.ts so the hub and the server agree on the rotation.
export type AccessLevel = "public" | "login" | "subscriber" | "member" | "private";

const WEEK_MS = 7 * 24 * 60 * 60 * 1000;
const KST_OFFSET_MS = 9 * 60 * 60 * 1000;
// 1970-01-01 was a Thursday; shifting by 3 days makes weeks start on Monday (KST).
const MONDAY_SHIFT_MS = 3 * 24 * 60 * 60 * 1000;
const ROTATION_MIN = 3;
const ROTATION_MAX = 5;

export function isAccessLevel(value: unknown): value is AccessLevel {
  return value === "public" || value === "login" || value === "subscriber" || value === "member" || value === "private";
}

const EMAIL_PATTERN = /^[^\s@,]+@[^\s@,]+\.[^\s@,]+$/;
export const MAX_ALLOWED_EMAILS = 100;

/** Unique lowercase emails, or null when the input is not a list of valid addresses. */
export function normalizeEmailList(value: unknown): string[] | null {
  if (value === undefined) return [];
  if (!Array.isArray(value)) return null;
  const emails = [...new Set(value.map((item) => (typeof item === "string" ? item.trim().toLowerCase() : "")))];
  if (emails.length > MAX_ALLOWED_EMAILS || emails.some((email) => email.length > 254 || !EMAIL_PATTERN.test(email))) return null;
  return emails;
}

export function weekIndex(date = new Date()): number {
  return Math.floor((date.getTime() + KST_OFFSET_MS + MONDAY_SHIFT_MS) / WEEK_MS);
}

function seededRandom(seed: number): () => number {
  let state = seed | 0;
  return () => {
    state = (Math.imul(state, 1664525) + 1013904223) | 0;
    return (state >>> 0) / 0x100000000;
  };
}

/** Subscriber games that everyone may play this week (3–5, stable for the whole KST week). */
export function weeklyRotationIds(subscriberGameIds: string[], date = new Date()): Set<string> {
  const random = seededRandom(weekIndex(date));
  const count = ROTATION_MIN + Math.floor(random() * (ROTATION_MAX - ROTATION_MIN + 1));
  const shuffled = [...subscriberGameIds].sort();
  for (let index = shuffled.length - 1; index > 0; index -= 1) {
    const swap = Math.floor(random() * (index + 1));
    [shuffled[index], shuffled[swap]] = [shuffled[swap] as string, shuffled[index] as string];
  }
  return new Set(shuffled.slice(0, count));
}
