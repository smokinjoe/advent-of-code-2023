import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

import { db } from "~/utils/db.server";
import { mapDataToDayResponse } from "~/utils/mapDataToDayResponse";
import { assertIsDefined } from "~/utils/asserts";

import { DayOne } from "~/components/days/DayOne/DayOne";

export const loader = async () => {
  const day = await db.day.findUnique({
    where: { day: 1 },
  });

  assertIsDefined(day);

  const dayInputs = await db.dayInput.findMany({
    where: { dayId: day.id },
    orderBy: { order: "asc" },
  });

  assertIsDefined(dayInputs);

  const response = mapDataToDayResponse(day, dayInputs);

  return json({ data: response });
};

export default function DayOneRoute() {
  const { data } = useLoaderData<typeof loader>();
  return <DayOne {...data} />;
}
