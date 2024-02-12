import { InputType } from "./InputType";

export type PrismaDayInput = {
  id: string;
  title: string;
  dayId: string;
  type: string;
  content: string;
};

export type DayInput = {
  id: string;
  title: string;
  type: InputType;
  content: string;
};

export function asDayInputType(contentType: string): InputType {
  return contentType as InputType;
}
