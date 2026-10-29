export const MAX_POST_LENGTH = 100;
export const MAX_COMMENT_LENGTH = 50;
export const MAX_IMAGE_BYTES = 5 * 1024 * 1024;
export const MAX_BUILD_BYTES = 250 * 1024 * 1024;

export function normalizeTitle(title: string): string {
  return title.trim().replace(/\s+/g, " ").toLocaleLowerCase("ko-KR");
}

export function validatePostText(text: string): string | null {
  if (!text.trim()) return "내용을 입력해 주세요.";
  if (text.length > MAX_POST_LENGTH) return `글은 ${MAX_POST_LENGTH}자 이하로 작성해 주세요.`;
  return null;
}

export function validateCommentText(text: string): string | null {
  if (!text.trim()) return "댓글 내용을 입력해 주세요.";
  if (text.length > MAX_COMMENT_LENGTH) return `댓글은 ${MAX_COMMENT_LENGTH}자 이하로 작성해 주세요.`;
  return null;
}

export function validateImage(file: File): string | null {
  const allowed = ["image/jpeg", "image/png", "image/webp"];
  if (!allowed.includes(file.type)) return "JPG, PNG, WebP 이미지만 사용할 수 있습니다.";
  if (file.size > MAX_IMAGE_BYTES) return "이미지는 5MB 이하만 업로드할 수 있습니다.";
  return null;
}

export function validateBuild(file: File): string | null {
  if (!file.name.toLowerCase().endsWith(".zip")) return "웹빌드는 ZIP 파일이어야 합니다.";
  if (file.size > MAX_BUILD_BYTES) return "웹빌드 ZIP은 250MiB 이하만 업로드할 수 있습니다.";
  return null;
}
