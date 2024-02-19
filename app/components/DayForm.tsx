import React, { useEffect, useState } from "react";
import { Textarea, Button, Flex, Space, TextInput } from "@mantine/core";

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

  // TODO: Fix this server-side rendered issue:
  // Warning: Prop `disabled` did not match. Server: "null" Client: "true"
  // const areButtonsDisabled = data.length > 0 ? false : true;
  const areButtonsDisabled = false;

  return (
    <>
      <DayNavigation />
      <h1>{`Day ${day}`}</h1>
      <p>
        <a href={sourceUrl} target="_blank" rel="noreferrer">
          Advent of Code link
        </a>
      </p>
      {children}
      <Space h="md" />
      <Textarea
        autosize
        resize="vertical"
        maxRows={25}
        cols={65}
        rows={15}
        value={data}
        onChange={(e) => setData(e.currentTarget.value)}
      />
      <Space h="md" />
      <Flex gap="sm">
        <Button onClick={handlePartOneClick} disabled={areButtonsDisabled}>
          Run Part One
        </Button>
        <Button onClick={handlePartTwoClick} disabled={areButtonsDisabled}>
          Run Part Two
        </Button>
      </Flex>
      <Space h="md" />

      <TextInput type="text" value={result} readOnly />
      <Space h="md" />
    </>
  );
};
