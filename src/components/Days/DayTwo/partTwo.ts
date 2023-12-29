import { convertMultiLineStringToArray } from "../../../utils/stringReader";
import { GameRecord } from "./GameRecord";

export const partTwoHandler = (data: string): number => {
  const records = convertMultiLineStringToArray(data).map(
    (record) => new GameRecord(record)
  );

  let sumOfThePowers = 0;

  records.forEach((record) => {
    sumOfThePowers += record.getPowerOfSet();
  });

  return sumOfThePowers ?? -1;
};
