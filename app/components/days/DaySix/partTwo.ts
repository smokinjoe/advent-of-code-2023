import { RaceCollection } from "./RaceCollection";

export const partTwoHandler = (input: string) => {
  const raceCollection = new RaceCollection(input);
  return raceCollection.partTwoAnswer;
};
