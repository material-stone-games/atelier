import {
  GoogleAuthProvider,
  onAuthStateChanged,
  reauthenticateWithPopup,
  signInWithPopup,
  signOut,
  type User,
} from "firebase/auth";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  limit,
  onSnapshot,
  orderBy,
  query,
  where,
} from "firebase/firestore";
import { httpsCallable } from "firebase/functions";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { demoComments, demoGames, demoPosts } from "../data/demo";
import type {
  AuthState,
  Comment,
  Game,
  GameDraftInput,
  GameMetaInput,
  Post,
  StorageReport,
  TargetType,
  UserProfile,
} from "../types";
import { isAccessLevel } from "./access";
import { appConfig, hasFirebaseConfig } from "./config";
import { auth, db, functions, storage } from "./firebase";

export { hasFirebaseConfig };

const signedOut: AuthState = { user: null, profile: null, isAdmin: false, isSubscriber: false, isMember: false, loading: false };
let authListener: ((state: AuthState) => void) | null = null;

function isActive(value: UserProfile["youtubeVerifiedUntil"]): boolean {
  const date = value instanceof Date ? value : value?.toDate();
  return Boolean(date && date.getTime() > Date.now());
}

async function buildAuthState(user: User | null): Promise<AuthState> {
  if (!user) return signedOut;
  const token = await user.getIdTokenResult();
  const profile = await loadProfile(user);
  return {
    user,
    profile,
    isAdmin: token.claims.admin === true,
    isSubscriber: isActive(profile?.youtubeVerifiedUntil),
    isMember: isActive(profile?.memberUntil),
    loading: false,
  };
}

export function subscribeToAuth(callback: (state: AuthState) => void): () => void {
  if (!auth) {
    callback(signedOut);
    return () => undefined;
  }

  authListener = callback;
  callback({ ...signedOut, loading: true });
  const unsubscribe = onAuthStateChanged(auth, async (user) => callback(await buildAuthState(user)));
  return () => {
    authListener = null;
    unsubscribe();
  };
}

/** Re-reads the profile after server-side changes such as subscription verification. */
export async function refreshAuthState(): Promise<void> {
  if (auth && authListener) authListener(await buildAuthState(auth.currentUser));
}

async function loadProfile(user: User): Promise<UserProfile | null> {
  if (!db) return null;
  const snapshot = await getDoc(doc(db, "users", user.uid));
  const data = snapshot.data();
  if (!data) return null;
  return {
    uid: user.uid,
    displayName: data.displayName ?? user.displayName ?? user.email ?? "visitor",
    photoURL: data.photoURL ?? user.photoURL,
    role: data.role === "admin" ? "admin" : "user",
    youtubeVerifiedUntil: data.youtubeVerifiedUntil ?? null,
    memberUntil: data.memberUntil ?? null,
  };
}

export async function signInWithGoogle(): Promise<void> {
  if (!auth) throw new Error("Firebase 설정이 아직 연결되지 않았습니다.");
  const provider = new GoogleAuthProvider();
  provider.addScope("https://www.googleapis.com/auth/youtube.readonly");
  await signInWithPopup(auth, provider);
}

export async function verifyYoutubeSubscription(): Promise<{ verifiedUntil: string }> {
  if (!auth?.currentUser || !functions) throw new Error("Google 로그인 후 다시 시도해 주세요.");
  const provider = new GoogleAuthProvider();
  provider.addScope("https://www.googleapis.com/auth/youtube.readonly");
  const credentialResult = await reauthenticateWithPopup(auth.currentUser, provider);
  const credential = GoogleAuthProvider.credentialFromResult(credentialResult);
  if (!credential?.accessToken) throw new Error("YouTube 권한 동의를 완료하지 못했습니다.");
  const callable = httpsCallable<{ youtubeAccessToken: string }, { verifiedUntil: string }>(
    functions,
    "verifyYoutubeSubscription",
  );
  const result = await callable({ youtubeAccessToken: credential.accessToken });
  await refreshAuthState();
  return result.data;
}

export async function signOutUser(): Promise<void> {
  if (auth) await signOut(auth);
}

async function coverUrl(path?: string): Promise<string | undefined> {
  if (!path || !storage) return undefined;
  try {
    return await getDownloadURL(ref(storage, path));
  } catch {
    return undefined;
  }
}

function mapGame(snapshot: { id: string; data: () => Record<string, unknown> | undefined }): Game {
  const data = snapshot.data() ?? {};
  return {
    id: snapshot.id,
    title: String(data.title ?? "Untitled game"),
    titleKey: String(data.titleKey ?? ""),
    description: String(data.description ?? ""),
    coverPath: typeof data.coverPath === "string" ? data.coverPath : undefined,
    genres: Array.isArray(data.genres) ? data.genres.map(String) : [],
    accessLevel: isAccessLevel(data.accessLevel) ? data.accessLevel : "public",
    buildVersionId: String(data.buildVersionId ?? ""),
    buildStatus: data.buildStatus === "failed" || data.buildStatus === "processing" ? data.buildStatus : "published",
    buildRoot: typeof data.buildRoot === "string" ? data.buildRoot : undefined,
    buildError: typeof data.buildError === "string" ? data.buildError : undefined,
    pendingVersionId: typeof data.pendingVersionId === "string" ? data.pendingVersionId : undefined,
    likeCount: Number(data.likeCount ?? 0),
    createdAt: data.createdAt as Game["createdAt"],
    updatedAt: data.updatedAt as Game["updatedAt"],
  };
}

function mapPost(snapshot: { id: string; data: () => Record<string, unknown> | undefined }): Post {
  const data = snapshot.data() ?? {};
  return {
    id: snapshot.id,
    text: String(data.text ?? ""),
    imagePath: typeof data.imagePath === "string" ? data.imagePath : null,
    authorId: String(data.authorId ?? ""),
    authorName: String(data.authorName ?? "visitor"),
    likeCount: Number(data.likeCount ?? 0),
    commentCount: Number(data.commentCount ?? 0),
    monthKey: String(data.monthKey ?? ""),
    retentionStatus: data.retentionStatus === "preserved" ? "preserved" : "pending",
    createdAt: data.createdAt as Post["createdAt"],
  };
}

function mapComment(snapshot: { id: string; data: () => Record<string, unknown> | undefined }): Comment {
  const data = snapshot.data() ?? {};
  return {
    id: snapshot.id,
    targetType: data.targetType === "game" ? "game" : "post",
    targetId: String(data.targetId ?? ""),
    parentId: typeof data.parentId === "string" ? data.parentId : null,
    depth: data.depth === 1 ? 1 : 0,
    text: String(data.text ?? ""),
    authorId: String(data.authorId ?? ""),
    authorName: String(data.authorName ?? "visitor"),
    createdAt: data.createdAt as Comment["createdAt"],
  };
}

export function subscribeToGames(callback: (games: Game[]) => void): () => void {
  if (!db) {
    callback(demoGames);
    return () => undefined;
  }
  const gamesQuery = query(
    collection(db, "games"),
    where("buildStatus", "==", "published"),
    orderBy("updatedAt", "desc"),
  );
  return onSnapshot(gamesQuery, async (snapshot) => {
    const games = await Promise.all(
      snapshot.docs.map(async (item) => {
        const game = mapGame(item);
        return { ...game, coverUrl: await coverUrl(game.coverPath) };
      }),
    );
    callback(games);
  });
}

/** Admin-only: every game regardless of build status, newest first. */
export function subscribeToAllGames(callback: (games: Game[]) => void): () => void {
  if (!db) {
    callback(demoGames);
    return () => undefined;
  }
  const gamesQuery = query(collection(db, "games"), orderBy("updatedAt", "desc"));
  return onSnapshot(gamesQuery, (snapshot) => callback(snapshot.docs.map(mapGame)), () => callback([]));
}

export function subscribeToPosts(callback: (posts: Post[]) => void): () => void {
  if (!db) {
    callback(demoPosts);
    return () => undefined;
  }
  const postsQuery = query(collection(db, "posts"), orderBy("createdAt", "desc"), limit(50));
  return onSnapshot(postsQuery, async (snapshot) => {
    const posts = await Promise.all(
      snapshot.docs.map(async (item) => {
        const post = mapPost(item);
        return { ...post, imageUrl: await coverUrl(post.imagePath ?? undefined) };
      }),
    );
    callback(posts);
  });
}

export function subscribeToComments(
  targetType: TargetType,
  targetId: string,
  callback: (comments: Comment[]) => void,
): () => void {
  if (!db) {
    callback(demoComments.filter((comment) => comment.targetType === targetType && comment.targetId === targetId));
    return () => undefined;
  }
  const commentsQuery = query(
    collection(db, "comments"),
    where("targetType", "==", targetType),
    where("targetId", "==", targetId),
    orderBy("createdAt", "asc"),
  );
  return onSnapshot(commentsQuery, (snapshot) => callback(snapshot.docs.map(mapComment)));
}

export async function findGameById(gameId: string): Promise<Game | null> {
  if (!db) return demoGames.find((game) => game.id === gameId) ?? null;
  const snapshot = await getDoc(doc(db, "games", gameId));
  if (!snapshot.exists()) return null;
  const game = mapGame(snapshot);
  return { ...game, coverUrl: await coverUrl(game.coverPath) };
}

export async function findGameByTitle(title: string): Promise<Game | null> {
  if (!db) return demoGames.find((game) => game.title.toLocaleLowerCase() === title.trim().toLocaleLowerCase()) ?? null;
  const snapshot = await getDocs(query(collection(db, "games"), where("titleKey", "==", title), limit(1)));
  if (snapshot.empty) return null;
  const game = mapGame(snapshot.docs[0]);
  return { ...game, coverUrl: await coverUrl(game.coverPath) };
}

export async function createOrUpdateGameDraft(input: GameDraftInput): Promise<{
  gameId: string;
  buildPath: string;
  coverPath: string;
}> {
  if (!functions) throw new Error("Firebase Functions 설정이 아직 연결되지 않았습니다.");
  const callable = httpsCallable<GameDraftInput, { gameId: string; buildPath: string; coverPath: string }>(
    functions,
    "createOrUpdateGameDraft",
  );
  return (await callable(input)).data;
}

async function callAdmin<Input, Output>(name: string, input: Input): Promise<Output> {
  if (!functions) throw new Error("Firebase Functions 설정이 아직 연결되지 않았습니다.");
  return (await httpsCallable<Input, Output>(functions, name)(input)).data;
}

export function updateGameMeta(input: GameMetaInput): Promise<{ ok: boolean }> {
  return callAdmin("updateGameMeta", input);
}

export function deleteGame(gameId: string): Promise<{ ok: boolean }> {
  return callAdmin("deleteGame", { gameId });
}

export function getStorageReport(): Promise<StorageReport> {
  return callAdmin("storageReport", {});
}

export function deleteStorageOrphans(paths: string[]): Promise<{ deleted: number }> {
  return callAdmin("deleteStorageOrphans", { paths });
}

export async function uploadFile(
  path: string,
  file: File,
  onProgress?: (progress: number) => void,
): Promise<void> {
  if (!storage) throw new Error("Firebase Storage 설정이 아직 연결되지 않았습니다.");
  await new Promise<void>((resolve, reject) => {
    const task = uploadBytesResumable(ref(storage!, path), file, { contentType: file.type });
    task.on(
      "state_changed",
      (snapshot) => onProgress?.(snapshot.totalBytes ? snapshot.bytesTransferred / snapshot.totalBytes : 0),
      reject,
      () => resolve(),
    );
  });
}

export async function createPost(text: string, hasImage: boolean): Promise<{ postId: string; imagePath?: string }> {
  if (!functions) throw new Error("Firebase Functions 설정이 아직 연결되지 않았습니다.");
  const callable = httpsCallable<{ text: string; hasImage: boolean }, { postId: string; imagePath?: string }>(
    functions,
    "createPost",
  );
  return (await callable({ text, hasImage })).data;
}

export async function toggleLike(targetType: TargetType, targetId: string): Promise<{ liked: boolean; likeCount: number }> {
  if (!functions) throw new Error("Firebase Functions 설정이 아직 연결되지 않았습니다.");
  const callable = httpsCallable<
    { targetType: TargetType; targetId: string },
    { liked: boolean; likeCount: number }
  >(functions, "toggleLike");
  return (await callable({ targetType, targetId })).data;
}

export async function createComment(
  targetType: TargetType,
  targetId: string,
  text: string,
  parentId?: string,
): Promise<{ commentId: string }> {
  if (!functions) throw new Error("Firebase Functions 설정이 아직 연결되지 않았습니다.");
  const callable = httpsCallable<
    { targetType: TargetType; targetId: string; text: string; parentId?: string },
    { commentId: string }
  >(functions, "createComment");
  return (await callable({ targetType, targetId, text, parentId })).data;
}

export async function getPlaySession(gameId: string): Promise<{ playUrl?: string; playPath?: string }> {
  if (!functions) return {};
  const callable = httpsCallable<{ gameId: string }, { playUrl?: string; playPath?: string }>(functions, "getPlaySession");
  const result = (await callable({ gameId })).data;
  if (result.playUrl || !result.playPath || !appConfig.functionsBaseUrl) return result;
  return { ...result, playUrl: `${appConfig.functionsBaseUrl}/playGateway${result.playPath}` };
}

export function authStateSubscription(callback: (user: User | null) => void): () => void {
  if (!auth) {
    callback(null);
    return () => undefined;
  }
  return onAuthStateChanged(auth, callback);
}

export function getCurrentUser(): User | null {
  return auth?.currentUser ?? null;
}

export function getDisplayName(user: User | null): string {
  return user?.displayName ?? user?.email ?? "visitor";
}

export async function uploadBoardImage(postId: string, file: File, onProgress?: (progress: number) => void): Promise<void> {
  await uploadFile(`board-images/${postId}/image`, file, onProgress);
}

export function getConfiguredYoutubeUrl(): string {
  return appConfig.youtubeUrl;
}

export function getConfiguredDiscordUrl(): string {
  return appConfig.discordUrl;
}
