import { Container } from "@mantine/core";

import { useState } from "react";

import { DayForm } from "~/components/UI/DayForm";
import { InputSelect } from "~/components/UI/InputSelect";
import { DayProps } from "~/types/DayProps";

type DayContainerProps = DayProps & {
  partOneHandler: (data: string) => number;
  partTwoHandler: (data: string) => number;
};

export const DayContainer = ({
  day,
  sourceUrl,
  content,
  partOneHandler,
  partTwoHandler,
}: DayContainerProps) => {
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
    <Container size="lg" {...props}>
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
