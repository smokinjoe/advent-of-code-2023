import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

import { db } from "~/utils/db.server";

import { DayOne } from "~/components/days/DayOne/DayOne";
import { InputData } from "~/types/InputType";

export const loader = async () => {
  const day = await db.day.findUnique({
    where: { day: 1 },
  });

  const content = await db.dayInput.findFirst({
    where: {
      dayId: day?.id,
      type: InputData,
    },
  });

  const response: {
    day: number;
    sourceUrl: string;
    content: string;
  } = {
    day: day?.day ?? -1,
    sourceUrl: day?.sourceUrl ?? "https://lipsum.com",
    content: content?.content ?? "",
  };

  return json({ data: response });
};

export default function DayOneRoute() {
  const { data } = useLoaderData<typeof loader>();
  return <DayOne {...data} />;
}
