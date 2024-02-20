import { Select } from "@mantine/core";

type SelectItem = {
  label: string;
  value: string;
};

type InputSelectProps = {
  inputData: SelectItem[];
  setInputData: (value: string) => void;
};

export const InputSelect = ({ inputData, setInputData }: InputSelectProps) => {
  const onChangeHandler = (value: string | null) => {
    const _val = value ?? inputData[0].value;
    setInputData(_val);
  };

  return (
    <Select
      defaultValue={inputData[0].value}
      label="Select input"
      data={inputData}
      onChange={onChangeHandler}
    />
  );
};
