import { useMutation } from "react-query";

import { InputType } from "~/types/InputType";

export type InputDataProps = {
  title: string;
  content: string;
  day: number;
  type: InputType;
};

// TODO: Move this elsewhere
const createInput = async (inputData: InputDataProps) => {
  const formData = new FormData();
  // formData.append("data", JSON.stringify(inputData));
  formData.append("title", inputData.title);
  formData.append("content", inputData.content);
  formData.append("day", inputData.day.toString());
  formData.append("type", inputData.type);

  const response = fetch("/api/input", {
    method: "PUT",
    body: formData,
  });

  return response;
};

export const useInputQuery = () => {
  return useMutation(createInput, {
    onSuccess: (data) => {
      console.log(data);
    },
  });
};
