/** "YYYY-MM" of the given instant in Korea time. */
export function pageMonthKey(date = new Date()): string {
  return new Intl.DateTimeFormat("en-CA", { timeZone: "Asia/Seoul", year: "numeric", month: "2-digit" }).format(date);
}

/** The KST month `months` before the month containing `date`, computed on the month key itself. */
export function monthKeyBefore(months: number, date = new Date()): string {
  const [year = 0, month = 1] = pageMonthKey(date).split("-").map(Number);
  const index = year * 12 + (month - 1) - months;
  return `${Math.floor(index / 12)}-${String((index % 12) + 1).padStart(2, "0")}`;
}
