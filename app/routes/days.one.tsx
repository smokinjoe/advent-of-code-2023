import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import fs from "fs";

import { DayOne } from "~/components/days/DayOne/DayOne";

export const loader = async () => {
  const data = fs.readFileSync("/data/day1input.txt", "utf8");
  return json({ data });
};

export default function DayOneRoute() {
  const { data } = useLoaderData<typeof loader>();
  return <DayOne inputData={data} />;
}
