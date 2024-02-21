import { Collection } from "./Oasis";

export const partOneHandler = (data: string) => {
  const collection = new Collection(data);
  const result = collection.partOne();
  return result;
};
