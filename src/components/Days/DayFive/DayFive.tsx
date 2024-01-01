import { DayForm } from "../../UI/DayForm";

import { partOneHandler } from "./partOne";
import { partTwoHandler } from "./partTwo";

export const DayFive = () => {
  return (
    <DayForm
      day="Four"
      sourceUrl="https://adventofcode.com/2023/day/5"
      partOneHandler={partOneHandler}
      partTwoHandler={partTwoHandler}
    />
  );
};
