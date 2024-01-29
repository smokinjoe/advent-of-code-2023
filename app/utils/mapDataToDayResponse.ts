import type { Day } from "~/types/Day";
import type { DayInput } from "~/types/DayInput";

export type DayResponse = {
  day: number;
  sourceUrl: string;
  content: string;
};

export const mapDataToDayResponse = (
  day: Day,
  content: DayInput
): DayResponse => {
  const response: DayResponse = {
    day: day?.day ?? -1,
    sourceUrl: day?.sourceUrl ?? "https://lipsum.com",
    content: content?.content ?? "",
  };

  return response;
};
