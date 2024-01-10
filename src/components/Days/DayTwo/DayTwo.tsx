import { DayForm } from "../../UI/DayForm";

import { partOneHandler } from "./partOne";
import { partTwoHandler } from "./partTwo";

export const DayTwo = () => {
  return (
    <DayForm
      day="Two"
      sourceUrl="https://adventofcode.com/2023/day/2"
      partOneHandler={partOneHandler}
      partTwoHandler={partTwoHandler}
    />
  );
};
