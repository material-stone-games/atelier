import React from "react";
import { Composition, staticFile, type CalculateMetadataFunction } from "remotion";
import { AtelierIntro } from "./Video";
import type { Game, Timeline, VideoProps } from "./types";

// Data comes from `npm run prepare-all` (live hub games + narration timing), read fresh on every render.
const calculateMetadata: CalculateMetadataFunction<VideoProps> = async () => {
  const [timeline, data] = await Promise.all([
    fetch(staticFile("data/timeline.json")).then((r) => r.json() as Promise<Timeline>),
    fetch(staticFile("data/games.json")).then((r) => r.json() as Promise<{ games: Game[] }>),
  ]);
  return { durationInFrames: timeline.totalFrames, fps: timeline.fps, props: { timeline, games: data.games } };
};

export const Root: React.FC = () => (
  <Composition
    id="AtelierIntro"
    component={AtelierIntro}
    width={1920}
    height={1080}
    fps={30}
    durationInFrames={300}
    defaultProps={{ timeline: null, games: [] } as VideoProps}
    calculateMetadata={calculateMetadata}
  />
);
