const COUNTED_KEY_PREFIX = "atelier.gameViewCounted.";
const pending = new Map<string, Promise<number>>();

function alreadyCounted(gameId: string): boolean {
  try {
    return sessionStorage.getItem(COUNTED_KEY_PREFIX + gameId) !== null;
  } catch {
    return false;
  }
}

function markCounted(gameId: string): void {
  try {
    sessionStorage.setItem(COUNTED_KEY_PREFIX + gameId, "1");
  } catch {
    // Without storage a refresh counts again, which is acceptable for a rough metric.
  }
}

/**
 * Fetches a game's view total, asking the server to count the visit only the first time
 * in this tab. Overlapping calls (StrictMode effects, auth changes) share one request.
 */
export function trackGameView(gameId: string, send: (countView: boolean) => Promise<number>): Promise<number> {
  const inFlight = pending.get(gameId);
  if (inFlight) return inFlight;
  const countView = !alreadyCounted(gameId);
  const request = send(countView)
    .then((viewCount) => {
      if (countView) markCounted(gameId);
      return viewCount;
    })
    .finally(() => pending.delete(gameId));
  pending.set(gameId, request);
  return request;
}
