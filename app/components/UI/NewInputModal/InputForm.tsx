import { useState } from "react";

import {
  Container,
  Textarea,
  Button,
  Space,
  TextInput,
  Select,
} from "@mantine/core";

import { InputData, ExampleInputData, InputType } from "~/types/InputType";
import { useInputQuery } from "./useInputQuery";

type InputFormProps = {
  day: number;
};

export const InputForm = ({ day }: InputFormProps) => {
  // Inputs needed for:
  // title, type , content
  const { mutateAsync } = useInputQuery();

  const inputTypeData = [
    {
      label: "Input Data",
      value: InputData,
    },
    {
      label: "Example Input Data",
      value: ExampleInputData,
    },
  ];

  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");

  const [inputType, setInputType] = useState<InputType>(inputTypeData[0].value);

  const onClickHandler = () => {
    if (!inputType) {
      return;
    }

    const data = {
      type: inputType,
      title,
      content,
      day,
    };

    mutateAsync({ ...data });
  };

  return (
    <Container>
      <TextInput
        label="Title"
        placeholder="Title"
        onChange={(event) => setTitle(event.currentTarget.value)}
      />
      <Space h="md" />
      <Select
        defaultValue={inputTypeData[0].value}
        label="Select type"
        data={inputTypeData}
        onChange={(value) => {
          const _val = value ?? inputTypeData[0].value;
          setInputType(_val as InputType);
        }}
      />{" "}
      <Space h="md" />
      <Textarea
        label="Content"
        placeholder="Content"
        onChange={(event) => setContent(event.currentTarget.value)}
      />
      <Space h="md" />
      <Button onClick={onClickHandler}>Submit</Button>
    </Container>
  );
};
