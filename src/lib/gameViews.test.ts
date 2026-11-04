import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { trackGameView } from "./gameViews";

describe("trackGameView", () => {
  beforeEach(() => {
    const store = new Map<string, string>();
    vi.stubGlobal("sessionStorage", {
      getItem: (key: string) => store.get(key) ?? null,
      setItem: (key: string, value: string) => void store.set(key, value),
    });
  });

  afterEach(() => vi.unstubAllGlobals());

  it("counts the first visit and only reads the total afterwards", async () => {
    const send = vi.fn(async (_countView: boolean) => 7);
    await expect(trackGameView("game", send)).resolves.toBe(7);
    await trackGameView("game", send);
    expect(send.mock.calls).toEqual([[true], [false]]);
  });

  it("counts each game separately", async () => {
    const send = vi.fn(async (_countView: boolean) => 1);
    await trackGameView("a", send);
    await trackGameView("b", send);
    expect(send.mock.calls).toEqual([[true], [true]]);
  });

  it("shares one request between overlapping calls", async () => {
    const send = vi.fn(async (_countView: boolean) => 3);
    const [first, second] = await Promise.all([trackGameView("game", send), trackGameView("game", send)]);
    expect([first, second]).toEqual([3, 3]);
    expect(send).toHaveBeenCalledTimes(1);
  });

  it("tries to count again when the request failed", async () => {
    const send = vi.fn<(countView: boolean) => Promise<number>>().mockRejectedValueOnce(new Error("offline")).mockResolvedValueOnce(2);
    await expect(trackGameView("game", send)).rejects.toThrow("offline");
    await expect(trackGameView("game", send)).resolves.toBe(2);
    expect(send.mock.calls).toEqual([[true], [true]]);
  });

  it("still works when storage is blocked", async () => {
    vi.stubGlobal("sessionStorage", {
      getItem: () => { throw new Error("blocked"); },
      setItem: () => { throw new Error("blocked"); },
    });
    await expect(trackGameView("game", async () => 5)).resolves.toBe(5);
  });
});
