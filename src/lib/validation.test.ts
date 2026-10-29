import { describe, expect, it } from "vitest";
import {
  MAX_BUILD_BYTES,
  MAX_COMMENT_LENGTH,
  MAX_POST_LENGTH,
  normalizeTitle,
  validateBuild,
  validateCommentText,
  validateImage,
  validatePostText,
} from "./validation";

describe("Atelier validation", () => {
  it("normalizes duplicate game titles", () => {
    expect(normalizeTitle("  Ember   Archive ")).toBe("ember archive");
  });

  it("enforces board and comment limits", () => {
    expect(validatePostText("a".repeat(MAX_POST_LENGTH))).toBeNull();
    expect(validatePostText("a".repeat(MAX_POST_LENGTH + 1))).toContain("100");
    expect(validateCommentText("a".repeat(MAX_COMMENT_LENGTH))).toBeNull();
    expect(validateCommentText("a".repeat(MAX_COMMENT_LENGTH + 1))).toContain("50");
  });

  it("accepts supported image types and rejects large files", () => {
    expect(validateImage(new File([new Uint8Array(2)], "cover.png", { type: "image/png" }))).toBeNull();
    expect(validateImage(new File([new Uint8Array(2)], "cover.gif", { type: "image/gif" }))).toContain("JPG");
    expect(validateImage(new File([new Uint8Array(5 * 1024 * 1024 + 1)], "cover.png", { type: "image/png" }))).toContain("5MB");
  });

  it("accepts only zip builds within the upload limit", () => {
    expect(validateBuild(new File([new Uint8Array(2)], "game.zip", { type: "application/zip" }))).toBeNull();
    expect(validateBuild(new File([new Uint8Array(2)], "game.tar", { type: "application/x-tar" }))).toContain("ZIP");
    expect(validateBuild(new File([new Uint8Array(MAX_BUILD_BYTES + 1)], "game.zip", { type: "application/zip" }))).toContain("250MiB");
  });
});
