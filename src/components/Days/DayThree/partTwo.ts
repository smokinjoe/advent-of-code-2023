import { convertMultiLineStringToArray } from "../../../utils/stringReader";

import { EngineSchematic } from "./EngineSchematic";
/*
// Test data

467..114..
...*......
..35..633.
......#...
617*......
.....+.58.
..592.....
......755.
...$.*....
.664.598..

11....
.*....

11...
.*...
.10..

..23..
..*...
.....*
...55.
*/

export const partTwoHandler = (data: string): number => {
  const stringArray = convertMultiLineStringToArray(data);
  const engineSchematic = new EngineSchematic(stringArray);

  while (!engineSchematic.endOfSchematic) {
    engineSchematic.nextItem();
  }

  //   return engineSchematic.getSumOfGearRatios();
  return 0;
};
