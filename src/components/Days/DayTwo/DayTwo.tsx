import * as React from "react";
import { useState } from "react";

import { partOneHandler } from "./partOne";
import { partTwoHandler } from "./partTwo";

export const DayTwo = () => {
  const [data, setData] = useState("");
  const [dayTwoResult, setDayTwoResult] = useState<number>(0);

  const handlePartOneClick = () => {
    const result = partOneHandler(data);
    setDayTwoResult(result);
  };

  const handlePartTwoClick = () => {
    const result = partTwoHandler(data);
    setDayTwoResult(result);
  };

  return (
    <div className="App">
      <h1>Day Two</h1>
      <p>
        <a
          href="https://adventofcode.com/2023/day/2"
          target="_blank"
          rel="noreferrer"
        >
          source
        </a>
      </p>
      <div>
        <textarea
          cols={20}
          rows={20}
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
        <input type="text" value={dayTwoResult} readOnly />
      </div>
    </div>
  );
};
