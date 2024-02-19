import { DayContainer } from "~/components/UI/DayContainer";
import { DayProps } from "~/types/DayProps";

import { partOneHandler } from "./partOne/partOne";
import { partTwoHandler } from "./partTwo/partTwo";

export const DaySeven = (props: DayProps) => {
  return (
    <DayContainer
      {...props}
      partOneHandler={partOneHandler}
      partTwoHandler={partTwoHandler}
    />
  );
};
