import { Link } from "@remix-run/react";

import { DayForm } from "~/components/DayForm";
import { DayProps } from "~/types/DayProps";
import {
  InputData,
  PartOneExampleInputData,
  PartTwoExampleInputData,
} from "~/types/InputType";

import { partOneHandler } from "./partOne";
import { partTwoHandler } from "./partTwo";

export const DayOne = ({ day, sourceUrl, content }: DayProps) => {
  return (
    <DayForm
      day={`${day}`}
      sourceUrl={sourceUrl}
      partOneHandler={partOneHandler}
      partTwoHandler={partTwoHandler}
      inputData={content}
    >
      <nav>
        <Link to={`/day-one/${InputData}`}>Input Data</Link>
        <Link to={`/day-one/${PartOneExampleInputData}`}>
          Part One Example Data
        </Link>
        <Link to={`/day-one/${PartTwoExampleInputData}`}>
          Part Two Example Data
        </Link>
      </nav>
    </DayForm>
  );
};
