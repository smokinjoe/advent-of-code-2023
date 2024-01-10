import { AdvancedGarden } from "./AdvancedGarden";

export const partTwoHandler = (data: string) => {
  const garden = new AdvancedGarden(data);
  return garden.lowestLocation;
};
