import { convertMultiLineStringToArray } from "../../../utils/stringReader";
import { GameRecord } from "./GameRecord";

export const partOneHandler = (data: string): number => {
  const records = convertMultiLineStringToArray(data).map(
    (record) => new GameRecord(record)
  );

  let scoreSum = 0;

  records.forEach((record) => {
    scoreSum += record.getScore();
  });

  return scoreSum;
};
