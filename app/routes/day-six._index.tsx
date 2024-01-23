import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

import { db } from "~/utils/db.server";
import { mapDataToDayResponse } from "~/utils/mapDataToDayResponse";
import { assertIsDefined } from "~/utils/asserts";

import { DaySix } from "~/components/days/DaySix/DaySix";
import { InputData } from "~/types/InputType";
import { asDayInputType } from "~/types/DayInput";

export const loader = async () => {
  const day = await db.day.findUnique({
    where: { day: 6 },
  });

  assertIsDefined(day);

  const content = await db.dayInput.findFirst({
    where: {
      dayId: day?.id,
      type: InputData,
    },
  });

  assertIsDefined(content);
  const enhancedContent = {
    ...content,
    type: asDayInputType(content.type),
  };

  const response = mapDataToDayResponse(day, enhancedContent);

  return json({ data: response });
};

export default function DaySixRoute() {
  const { data } = useLoaderData<typeof loader>();
  return <DaySix {...data} />;
}
