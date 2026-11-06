/**
 * Decides which game assets skip playGateway. Bytes streamed through a function bill as
 * Cloud Run internet egress, so heavy binaries redirect to a signed Cloud Storage URL instead.
 *
 * Only passive binaries qualify. HTML, CSS and JS stay on the gateway: they resolve relative URLs
 * against their own final URL, which after a redirect would be an unsigned path on Cloud Storage.
 * Workers also refuse cross-origin redirects, and unknown types default to the gateway for safety.
 */
const DIRECT_EXTENSIONS = new Set([
  "glb", "gltf", "bin", "ktx2", "hdr", "wasm", "data", "pck", "unityweb", "bundle",
  "png", "jpg", "jpeg", "webp", "gif", "avif",
  "ogg", "mp3", "wav", "m4a", "aac", "flac", "mp4", "webm",
  "woff", "woff2", "ttf", "otf",
]);

export function isDirectAsset(path: string): boolean {
  const basePath = path.replace(/\.(gz|br)$/, "").toLowerCase();
  const name = basePath.slice(basePath.lastIndexOf("/") + 1);
  const dot = name.lastIndexOf(".");
  return dot >= 0 && DIRECT_EXTENSIONS.has(name.slice(dot + 1));
}

const SIGNED_WINDOW_MS = 6 * 60 * 60 * 1000;

/** Browsers may cache a direct asset this long; matches the shortest time a signed URL stays valid. */
export const DIRECT_ASSET_CACHE_CONTROL = `private, max-age=${SIGNED_WINDOW_MS / 1000}`;

/**
 * Pins signed URLs to a fixed window so every session in it gets the same URL and hits the browser
 * cache. Each URL outlives the 2-hour play session that requested it by at least 4 hours.
 */
export function signedUrlWindow(now: number): { accessibleAt: Date; expires: Date } {
  const start = now - (now % SIGNED_WINDOW_MS);
  return { accessibleAt: new Date(start), expires: new Date(start + 2 * SIGNED_WINDOW_MS) };
}
