import { Garden } from "./Garden";

export const partOneHandler = (data: string) => {
  const garden = new Garden(data);
  return garden.lowestLocation;
};
