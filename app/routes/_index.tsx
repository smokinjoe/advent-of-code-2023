import type { MetaFunction } from "@remix-run/node";
import { DayNavigation } from "~/components/DayNavigation";

export const meta: MetaFunction = () => {
  return [
    { title: "Advent of Code 2023" },
    { name: "description", content: "Advent of Code 2023" },
  ];
};

export default function Index() {
  return (
    <div>
      <h1>Welcome to Joe's Advent of Code 2023</h1>
      <DayNavigation />
      <div>
        <h1>Please select a day!</h1>
      </div>
    </div>
  );
}
