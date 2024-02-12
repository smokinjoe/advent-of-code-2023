import { LoaderFunction, json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { db } from "~/utils/db.server";

import { assertIsDefined } from "~/utils/asserts";
import {
  DayResponse,
  mapDataToDayResponse,
} from "~/utils/mapDataToDayResponse";

import { DayProps } from "~/types/DayProps";
import {
  DayOne,
  DayTwo,
  DayThree,
  DayFour,
  DayFive,
  DaySix,
  DaySeven,
  DayEight,
} from "~/components/days";

const dayComponents: Record<
  number,
  ({ day, sourceUrl, content }: DayProps) => JSX.Element
> = {
  1: DayOne,
  2: DayTwo,
  3: DayThree,
  4: DayFour,
  5: DayFive,
  6: DaySix,
  7: DaySeven,
  8: DayEight,
};

export const loader: LoaderFunction = async ({ params }) => {
  const dayId = params.dayId;

  assertIsDefined(dayId);

  const day = await db.day.findUnique({
    where: { day: Number(dayId) },
  });

  assertIsDefined(day);

  const dayInputs = await db.dayInput.findMany({
    where: { dayId: day.id },
    orderBy: { order: "asc" },
  });

  assertIsDefined(dayInputs);

  const response: DayResponse = mapDataToDayResponse(day, dayInputs);

  return json({ data: response });
};

export default function DayRoute() {
  const { data } = useLoaderData<{ data: DayResponse }>();
  if (data.day < 1) {
    throw new Error("Day not found");
  }

  const DayComponent = dayComponents[data.day];

  return <DayComponent {...data} />;
}
