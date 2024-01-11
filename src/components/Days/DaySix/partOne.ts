import { RaceCollection } from "./RaceCollection";

export const partOneHandler = (input: string) => {
  const raceCollection = new RaceCollection(input);
  return raceCollection.partOneAnswer;
};
