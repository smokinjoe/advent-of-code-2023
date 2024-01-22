import { InputType } from "./InputType";

export type DayInput = {
  id: string;
  dayId: string;
  type: InputType;
  content: string;
};

export function asDayInputType(contentType: string): InputType {
  return contentType as InputType;
}
