import { Link } from "@remix-run/react";

import { DayForm } from "~/components/DayForm";
import { DayProps } from "~/types/DayProps";
import { ExampleInputData, InputData } from "~/types/InputType";

import { partOneHandler } from "./partOne";
import { partTwoHandler } from "./partTwo";

export const DayTwo = ({ day, sourceUrl, content }: DayProps) => {
  return (
    <DayForm
      day={`${day}`}
      sourceUrl={sourceUrl}
      partOneHandler={partOneHandler}
      partTwoHandler={partTwoHandler}
      inputData={content}
    >
      <nav>
        <Link to={`/day-two/${InputData}`}>Input Data</Link>
        <Link to={`/day-two/${ExampleInputData}`}>Example Input Data</Link>
      </nav>
    </DayForm>
  );
};
