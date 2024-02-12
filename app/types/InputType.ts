export const InputData = "input" as const;
export const ExampleInputData = "exampleInput" as const;
// TODO: Deprecating
export const PartOneExampleInputData = "partOneExampleInput" as const;
// TODO: Deprecating
export const PartTwoExampleInputData = "partTwoExampleInput" as const;

export type InputType =
  | typeof InputData
  | typeof ExampleInputData
  | typeof PartOneExampleInputData
  | typeof PartTwoExampleInputData;
