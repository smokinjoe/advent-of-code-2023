import { Link } from "react-router-dom";

export const DaysData = [
  { day: 1, title: "Day One", url: "day-one" },
  { day: 2, title: "Day Two", url: "day-two" },
  { day: 3, title: "Day Three", url: "day-three" },
  { day: 4, title: "Day Four", url: "day-four" },
  { day: 5, title: "Day Five", url: "day-five" },
  { day: 6, title: "Day Six", url: "day-six" },
];

export const DayNavigation = () => {
  return (
    <nav>
      <Link to="/">Home</Link>
      {DaysData.map((day) => (
        <Link key={day.day} to={`${day.url}`}>
          {day.title}
        </Link>
      ))}
    </nav>
  );
};
