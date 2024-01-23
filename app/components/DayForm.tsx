import React, { useEffect, useState } from "react";
import { DayNavigation } from "./DayNavigation";

type DayFormProps = {
  day: string;
  sourceUrl: string;
  partOneHandler: (data: string) => number;
  partTwoHandler: (data: string) => number;
  inputData: string;
  children?: React.ReactNode;
};

export const DayForm = ({
  day,
  sourceUrl,
  partOneHandler,
  partTwoHandler,
  inputData,
  children,
}: DayFormProps) => {
  const [data, setData] = useState("");
  const [result, setResult] = useState<number>(0);

  useEffect(() => {
    setData(inputData);
  }, [inputData]);

  const handlePartOneClick = () => {
    const result = partOneHandler(data);
    setResult(result);
  };

  const handlePartTwoClick = () => {
    const result = partTwoHandler(data);
    setResult(result);
  };

  return (
    <div>
      <DayNavigation />
      {children}
      <h1>{`Day ${day}`}</h1>
      <p>
        <a href={sourceUrl} target="_blank" rel="noreferrer">
          Advent of Code link
        </a>
      </p>
      <div>
        <textarea
          cols={65}
          rows={20}
          value={data}
          onChange={(e) => setData(e.target.value)}
        />
      </div>
      <div>
        <button onClick={handlePartOneClick} disabled={data.length === 0}>
          Run Part One
        </button>
      </div>
      <div>
        <button onClick={handlePartTwoClick} disabled={data.length === 0}>
          Run Part Two
        </button>
      </div>

      <div>
        <input type="text" value={result} readOnly />
      </div>
    </div>
  );
};
