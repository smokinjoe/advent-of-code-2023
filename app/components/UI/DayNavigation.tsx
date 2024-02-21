import { Burger, Drawer, Space, NavLink } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";

export const DaysData = [
  { day: 1, title: "Day One", url: "/day-one" },
  { day: 2, title: "Day Two", url: "/day-two" },
  { day: 3, title: "Day Three", url: "/day-three" },
  { day: 4, title: "Day Four", url: "/day-four" },
  { day: 5, title: "Day Five", url: "/day-five" },
  { day: 6, title: "Day Six", url: "/day-six" },
  { day: 7, title: "Day Seven", url: "/day-seven" },
  { day: 8, title: "Day Eight", url: "/day-eight" },
  { day: 9, title: "Day Nine", url: "/day-nine" },
];

export const DayNavigation = () => {
  const [opened, { open, close }] = useDisclosure();

  const handleBurgerClick = () => {
    if (opened) {
      close();
      return;
    }

    open();
  };

  return (
    <Burger opened={opened} onClick={handleBurgerClick}>
      <Drawer opened={opened} onClose={close} title="Select a Day">
        <NavLink label="Home" key="home" href="/" />

        <Space h="sm" />

        {DaysData.map((day) => (
          <NavLink label={day.title} key={day.day} href={`/day/${day.day}`} />
        ))}
      </Drawer>
    </Burger>
  );
};
