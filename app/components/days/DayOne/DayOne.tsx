import { Container } from "@mantine/core";

import { useState } from "react";

import { DayForm } from "~/components/DayForm";
import { DayProps } from "~/types/DayProps";

import { partOneHandler } from "./partOne";
import { partTwoHandler } from "./partTwo";
import { InputSelect } from "~/components/InputSelect";

export const DayOne = ({ day, sourceUrl, content }: DayProps) => {
  const [inputContent, setInputContent] = useState<string>(content[0].content);

  const inputData = content.map((input) => {
    return {
      label: input.title,
      value: input.content,
    };
  });

  const props = {
    bg: "var(--mantine-color-blue-light)",
    mt: "md",
  };

  return (
    <Container size="sm" {...props}>
      <DayForm
        day={`${day}`}
        sourceUrl={sourceUrl}
        partOneHandler={partOneHandler}
        partTwoHandler={partTwoHandler}
        inputData={inputContent}
      >
        <InputSelect inputData={inputData} setInputData={setInputContent} />
      </DayForm>
    </Container>
  );
};
