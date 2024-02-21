import { Collection } from "./Oasis";

export const partTwoHandler = (data: string) => {
  const collection = new Collection(data);
  const result = collection.partTwo();
  return result;
};
