import { DayForm } from "../../UI/DayForm";

import { partOneHandler } from "./partOne";
import { partTwoHandler } from "./partTwo";

export const DayThree = () => {
  return (
    <DayForm
      day="Three"
      sourceUrl="https://adventofcode.com/2020/day/3"
      partOneHandler={partOneHandler}
      partTwoHandler={partTwoHandler}
    />
  );
};
