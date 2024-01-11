import { DayForm } from "../../UI/DayForm";

import { partOneHandler } from "./partOne";
import { partTwoHandler } from "./partTwo";

export const DaySix = () => {
  return (
    <DayForm
      day="Six"
      sourceUrl="https://adventofcode.com/2020/day/6"
      partOneHandler={partOneHandler}
      partTwoHandler={partTwoHandler}
    />
  );
};
