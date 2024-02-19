import { DayContainer } from "app/components/DayContainer";
import { DayProps } from "~/types/DayProps";

import { partOneHandler } from "./partOne";
import { partTwoHandler } from "./partTwo";

export const DayThree = (props: DayProps) => {
  return (
    <DayContainer
      {...props}
      partOneHandler={partOneHandler}
      partTwoHandler={partTwoHandler}
    />
  );
};
