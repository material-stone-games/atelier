import { describe, expect, it } from "vitest";
import { monthKeyBefore, pageMonthKey } from "../../functions/src/month";

describe("retention month", () => {
  it("evaluates exactly two KST months back on every scheduled run", () => {
    for (let month = 1; month <= 12; month += 1) {
      const run = new Date(`2026-${String(month).padStart(2, "0")}-01T03:00:00+09:00`);
      const expectedIndex = 2026 * 12 + (month - 1) - 2;
      const expected = `${Math.floor(expectedIndex / 12)}-${String((expectedIndex % 12) + 1).padStart(2, "0")}`;
      expect(monthKeyBefore(2, run)).toBe(expected);
    }
  });

  it("uses Korea time at month boundaries", () => {
    // 2026-03-01 00:30 KST is still February in UTC.
    const justAfterMidnight = new Date("2026-02-28T15:30:00Z");
    expect(pageMonthKey(justAfterMidnight)).toBe("2026-03");
    expect(monthKeyBefore(2, justAfterMidnight)).toBe("2026-01");
    expect(monthKeyBefore(2, new Date("2026-10-01T03:00:00+09:00"))).toBe("2026-08");
  });
});
