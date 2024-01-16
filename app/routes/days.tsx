// import { json } from "@remix-run/node";
import { Outlet } from "@remix-run/react";
import { DayNavigation } from "~/components/DayNavigation";

export default function DaysRoute() {
  return (
    <div>
      <h1>Welcome to Joe's Advent of Code 2023</h1>
      <DayNavigation />
      <main>
        <Outlet />
      </main>
    </div>
  );
}
