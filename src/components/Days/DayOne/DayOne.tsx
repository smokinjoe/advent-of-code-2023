import { DayForm } from "../../UI/DayForm";

import { partOneHandler } from "./partOne";
import { partTwoHandler } from "./partTwo";

export const DayOne = () => {
  return (
    <DayForm
      day="One"
      sourceUrl="https://adventofcode.com/2023/day/1"
      partOneHandler={partOneHandler}
      partTwoHandler={partTwoHandler}
      inputSources={[
        "dayOnePartOneExampleInput.txt",
        "dayOnePartTwoExampleInput.txt",
        "dayOneInput.txt",
      ]}
    />
  );
};
