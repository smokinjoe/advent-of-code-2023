import { Link } from "@remix-run/react";

import { DayForm } from "~/components/DayForm";
import { DayProps } from "~/types/DayProps";

import { partOneHandler } from "./partOne";
import { partTwoHandler } from "./partTwo";
import { ExampleInputData, InputData } from "~/types/InputType";

export const DayThree = ({ day, sourceUrl, content }: DayProps) => {
  return (
    <DayForm
      day={`${day}`}
      sourceUrl={sourceUrl}
      partOneHandler={partOneHandler}
      partTwoHandler={partTwoHandler}
      inputData={content}
    >
      <nav>
        <Link to={`/day-three/${InputData}`}>Input Data</Link>
        <Link to={`/day-three/${ExampleInputData}`}>Example Input Data</Link>
      </nav>
    </DayForm>
  );
};
