import { useState } from "react";
import { DayNavigation } from "./DayNavigation";

type DayFormProps = {
  day: string;
  sourceUrl: string;
  partOneHandler: (data: string) => number;
  partTwoHandler: (data: string) => number;
  inputData?: string;
};

export const DayForm = ({
  day,
  sourceUrl,
  partOneHandler,
  partTwoHandler,
  inputData,
}: DayFormProps) => {
  const [data, setData] = useState(inputData ?? "");
  const [result, setResult] = useState<number>(0);

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
      <h1>{`Day ${day}`}</h1>
      <p>
        <a href={sourceUrl} target="_blank" rel="noreferrer">
          source
        </a>
      </p>
      <div>
        <textarea
          cols={20}
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
