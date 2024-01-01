import { DayForm } from "../../UI/DayForm";

import { partOneHandler } from "./partOne";
import { partTwoHandler } from "./partTwo";

export const DayFour = () => {
  return (
    <DayForm
      day="Four"
      sourceUrl="https://adventofcode.com/2020/day/4"
      partOneHandler={partOneHandler}
      partTwoHandler={partTwoHandler}
    />
  );
};
