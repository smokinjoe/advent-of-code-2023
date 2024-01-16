import { Link } from "react-router-dom";

export const DaysData = [
  { day: 1, title: "Day One", url: "days/one" },
  { day: 2, title: "Day Two", url: "days/two" },
  { day: 3, title: "Day Three", url: "days/three" },
  { day: 4, title: "Day Four", url: "days/four" },
  { day: 5, title: "Day Five", url: "days/five" },
  { day: 6, title: "Day Six", url: "days/six" },
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
