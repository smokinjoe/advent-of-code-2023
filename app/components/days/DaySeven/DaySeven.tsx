import { Link } from "@remix-run/react";

import { DayForm } from "~/components/DayForm";
import { DayProps } from "~/types/DayProps";
import { InputData, ExampleInputData } from "~/types/InputType";

import { partOneHandler } from "./partOne/partOne";
import { partTwoHandler } from "./partTwo/partTwo";

export const DaySeven = ({ day, sourceUrl, content }: DayProps) => {
  return (
    <DayForm
      day={`${day}`}
      sourceUrl={sourceUrl}
      partOneHandler={partOneHandler}
      partTwoHandler={partTwoHandler}
      inputData={content}
    >
      <nav>
        <Link to={`/day-seven/${InputData}`}>Input Data</Link>
        <Link to={`/day-seven/${ExampleInputData}`}>Example Input Data</Link>
      </nav>
    </DayForm>
  );
};
