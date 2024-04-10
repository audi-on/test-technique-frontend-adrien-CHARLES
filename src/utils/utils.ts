import { episodes } from "../../mocks/episodes";
import type { Episode } from "../models/episode";

function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export const getLongData = async (): Promise<Episode[]> => {
  return [...episodes, ...episodes, ...episodes].map((e, index) => ({
    ...e,
    id: index.toString(),
  }));
};

export const getShortData = async (): Promise<Episode[]> => {
  return episodes
    .slice(0, 30)
    .map((e, index) => ({ ...e, id: index.toString() }));
};

export const getPendingData = async (): Promise<Episode[]> => {
  await sleep(10000);
  return getShortData();
};
