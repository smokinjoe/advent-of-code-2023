import { ScratchCardCollection } from "./ScratchCardCollection";

export const partOneHandler = (data: string) => {
  const scratchCardCollection = new ScratchCardCollection(data);
  return scratchCardCollection.totalPrizeScore;
};
