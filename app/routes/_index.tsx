import { Container, Title } from "@mantine/core";
import type { MetaFunction } from "@remix-run/node";

import { DayNavigation } from "~/components/UI/DayNavigation";

export const meta: MetaFunction = () => {
  return [
    { title: "Advent of Code 2023" },
    { name: "description", content: "Advent of Code 2023" },
  ];
};

const props = {
  bg: "var(--mantine-color-blue-light)",
  mt: "md",
};

export default function Index() {
  return (
    <Container size="lg" {...props}>
      <DayNavigation />
      <Title lh="xl" order={1}>
        Welcome to Joe's Advent of Code 2023
      </Title>
      <Title lh="md" order={2}>
        Please select a day!
      </Title>
    </Container>
  );
}
