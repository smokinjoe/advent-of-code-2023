import { DayContainer } from "~/components/UI/DayContainer";
import { DayProps } from "~/types/DayProps";

import { partOneHandler } from "./partOne";
import { partTwoHandler } from "./partTwo";

export const DaySix = (props: DayProps) => {
  return (
    <DayContainer
      {...props}
      partOneHandler={partOneHandler}
      partTwoHandler={partTwoHandler}
    />
  );
};
