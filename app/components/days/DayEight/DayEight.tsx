import { DayContainer } from "app/components/DayContainer";
import { DayProps } from "~/types/DayProps";

import { partOneHandler } from "../DayEight/partOne";
import { partTwoHandler } from "../DayEight/partTwo";

export const DayEight = (props: DayProps) => {
  return (
    <DayContainer
      {...props}
      partOneHandler={partOneHandler}
      partTwoHandler={partTwoHandler}
    />
  );
};
