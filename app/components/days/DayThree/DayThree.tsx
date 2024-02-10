import { useState } from "react";

import { DayForm } from "~/components/DayForm";
import { DayProps } from "~/types/DayProps";

import { partOneHandler } from "./partOne";
import { partTwoHandler } from "./partTwo";

export const DayThree = ({ day, sourceUrl, content }: DayProps) => {
  const [inputContent, setInputContent] = useState(content[0].content);

  return (
    <DayForm
      day={`${day}`}
      sourceUrl={sourceUrl}
      partOneHandler={partOneHandler}
      partTwoHandler={partTwoHandler}
      inputData={inputContent}
    >
      <nav>
        {content.map((input, index) => (
          <button key={index} onClick={() => setInputContent(input.content)}>
            {input.title}
          </button>
        ))}{" "}
      </nav>
    </DayForm>
  );
};
