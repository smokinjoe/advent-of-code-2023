import { Link } from "@remix-run/react";

import { DayForm } from "~/components/DayForm";
import { DayProps } from "~/types/DayProps";
import {
  InputData,
  PartOneExampleInputData,
  PartTwoExampleInputData,
} from "~/types/InputType";

import { partOneHandler } from "../DayEight/partOne";
import { partTwoHandler } from "../DayEight/partTwo";

export const DayEight = ({ day, sourceUrl, content }: DayProps) => {
  return (
    <DayForm
      day={`${day}`}
      sourceUrl={sourceUrl}
      partOneHandler={partOneHandler}
      partTwoHandler={partTwoHandler}
      inputData={content}
    >
      <nav>
        <Link to={`/day-eight/${InputData}`}>Input Data</Link>
        <Link to={`/day-eight/${PartOneExampleInputData}`}>
          Part One Example Input Data
        </Link>
        <Link to={`/day-eight/${PartTwoExampleInputData}`}>
          Part Two Example Input Data
        </Link>
      </nav>
    </DayForm>
  );
};
