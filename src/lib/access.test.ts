import { describe, expect, it } from "vitest";
import type { AuthState } from "../types";
import { accessPermission, weekIndex, weeklyRotationIds } from "./access";

const ids = Array.from({ length: 12 }, (_, index) => `game-${index}`);
const anonymous: AuthState = { user: null, profile: null, isAdmin: false, isSubscriber: false, isMember: false, loading: false };
const signedIn = { ...anonymous, user: {} as AuthState["user"] };

describe("weekly rotation", () => {
  it("picks 3 to 5 games and is stable within a KST week", () => {
    const monday = new Date("2026-10-26T00:00:00+09:00");
    const sunday = new Date("2026-11-01T23:59:00+09:00");
    const picked = weeklyRotationIds(ids, monday);
    expect(picked.size).toBeGreaterThanOrEqual(3);
    expect(picked.size).toBeLessThanOrEqual(5);
    expect([...weeklyRotationIds(ids, sunday)]).toEqual([...picked]);
    expect(weekIndex(sunday) + 1).toBe(weekIndex(new Date("2026-11-02T00:00:00+09:00")));
  });

  it("matches the server implementation", async () => {
    const server = await import("../../functions/src/access");
    for (let week = 0; week < 60; week += 1) {
      const date = new Date(Date.UTC(2026, 0, 1) + week * 7 * 24 * 60 * 60 * 1000);
      expect([...weeklyRotationIds(ids, date)]).toEqual([...server.weeklyRotationIds(ids, date)]);
    }
  });

  it("does not depend on input order", () => {
    const date = new Date("2026-10-29T12:00:00+09:00");
    expect([...weeklyRotationIds([...ids].reverse(), date)].sort()).toEqual([...weeklyRotationIds(ids, date)].sort());
  });
});

describe("access permission", () => {
  const rotation = new Set(["free"]);

  it("opens rotated subscriber games to everyone", () => {
    expect(accessPermission({ id: "free", accessLevel: "subscriber" }, anonymous, rotation).allowed).toBe(true);
    expect(accessPermission({ id: "locked", accessLevel: "subscriber" }, anonymous, rotation)).toEqual({ allowed: false, reason: "login" });
    expect(accessPermission({ id: "locked", accessLevel: "subscriber" }, signedIn, rotation)).toEqual({ allowed: false, reason: "subscriber" });
  });

  it("keeps member games for members and admins only", () => {
    const game = { id: "early", accessLevel: "member" as const };
    expect(accessPermission(game, { ...signedIn, isSubscriber: true }, rotation)).toEqual({ allowed: false, reason: "member" });
    expect(accessPermission(game, { ...signedIn, isMember: true }, rotation).allowed).toBe(true);
    expect(accessPermission(game, { ...signedIn, isAdmin: true }, rotation).allowed).toBe(true);
  });
});
