import { Link } from "@remix-run/react";

import { DayForm } from "~/components/DayForm";
import { DayProps } from "~/types/DayProps";
import { InputData, ExampleInputData } from "~/types/InputType";

import { partOneHandler } from "./partOne";
import { partTwoHandler } from "./partTwo";

export const DaySix = ({ day, sourceUrl, content }: DayProps) => {
  return (
    <DayForm
      day={`${day}`}
      sourceUrl={sourceUrl}
      partOneHandler={partOneHandler}
      partTwoHandler={partTwoHandler}
      inputData={content}
    >
      <nav>
        <Link to={`/day-six/${InputData}`}>Input Data</Link>
        <Link to={`/day-six/${ExampleInputData}`}>Example Input Data</Link>
      </nav>
    </DayForm>
  );
};
