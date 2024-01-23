import { ScratchCardCollection } from "./ScratchCardCollection";

export const partTwoHandler = (data: string) => {
  const scratchCardCollection = new ScratchCardCollection(data);
  return scratchCardCollection.totalCardsWon;
};
