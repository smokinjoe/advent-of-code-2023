import type { Day } from "~/types/Day";
import {
  asDayInputType,
  type DayInput,
  type PrismaDayInput,
} from "~/types/DayInput";

export type DayResponse = {
  day: number;
  sourceUrl: string;
  content: DayInput[];
};

export const mapDataToDayResponse = (
  day: Day,
  dayInputs: PrismaDayInput[]
): DayResponse => {
  const result = dayInputs.map((input) => {
    return {
      id: input.id,
      title: input.title,
      type: asDayInputType(input.type),
      content: input.content,
    };
  });

  return {
    day: day?.day ?? -1,
    sourceUrl: day?.sourceUrl ?? "https://lisum.com",
    content: result,
  };
};
