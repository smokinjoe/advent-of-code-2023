import { DayForm } from "~/components/DayForm";
import { DayProps } from "~/types/DayProps";

import { partOneHandler } from "./partOne";
import { partTwoHandler } from "./partTwo";

export const DayOne = ({ inputData }: DayProps) => {
  return (
    <DayForm
      day="One"
      sourceUrl="https://adventofcode.com/2023/day/1"
      partOneHandler={partOneHandler}
      partTwoHandler={partTwoHandler}
      inputData={inputData}
    />
  );
};
