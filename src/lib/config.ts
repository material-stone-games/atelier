export const APP_BASE_PATH = "/atelier";

const env = import.meta.env;

export const appConfig = {
  firebase: {
    apiKey: env.VITE_FIREBASE_API_KEY as string | undefined,
    authDomain: env.VITE_FIREBASE_AUTH_DOMAIN as string | undefined,
    projectId: env.VITE_FIREBASE_PROJECT_ID as string | undefined,
    storageBucket: env.VITE_FIREBASE_STORAGE_BUCKET as string | undefined,
    messagingSenderId: env.VITE_FIREBASE_MESSAGING_SENDER_ID as string | undefined,
    appId: env.VITE_FIREBASE_APP_ID as string | undefined,
    measurementId: env.VITE_FIREBASE_MEASUREMENT_ID as string | undefined,
  },
  functionsRegion: (env.VITE_FIREBASE_FUNCTIONS_REGION as string | undefined) ?? "asia-northeast3",
  functionsBaseUrl: (env.VITE_FUNCTIONS_BASE_URL as string | undefined)?.replace(/\/$/, ""),
  youtubeChannelId: (env.VITE_YOUTUBE_CHANNEL_ID as string | undefined)?.trim(),
  youtubeUrl: (env.VITE_YOUTUBE_URL as string | undefined) ?? "https://www.youtube.com/@materialstone",
  discordUrl: (env.VITE_DISCORD_URL as string | undefined) ?? "https://discord.gg/",
};

export const hasFirebaseConfig = Boolean(
  appConfig.firebase.apiKey &&
    appConfig.firebase.authDomain &&
    appConfig.firebase.projectId &&
    appConfig.firebase.storageBucket &&
    appConfig.firebase.messagingSenderId &&
    appConfig.firebase.appId,
);
