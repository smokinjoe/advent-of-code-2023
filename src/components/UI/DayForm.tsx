import { useState } from "react";
// import { useFile } from "../../hooks/useFile";
// import e from "express";

type DayFormProps = {
  day: string;
  sourceUrl: string;
  partOneHandler: (data: string) => number;
  partTwoHandler: (data: string) => number;
  inputSources?: string[];
};

export const DayForm = ({
  day,
  sourceUrl,
  partOneHandler,
  partTwoHandler,
}: // inputSources,
DayFormProps) => {
  const [data, setData] = useState("");
  const [result, setResult] = useState<number>(0);

  const handlePartOneClick = () => {
    const result = partOneHandler(data);
    setResult(result);
  };

  const handlePartTwoClick = () => {
    const result = partTwoHandler(data);
    setResult(result);
  };

  // const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
  //   const source = e.target.value;
  //   // setData(useFile(`${source}`));
  // };

  const handleTextAreaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setData(e.target.value);
  };

  return (
    <div>
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
          onChange={handleTextAreaChange}
        />
      </div>
      {/* <div>
        <select onChange={handleSelectChange}>
          {inputSources?.map((source) => (
            <option key={source} value={source}>
              {source}
            </option>
          ))}
        </select>
      </div> */}
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
