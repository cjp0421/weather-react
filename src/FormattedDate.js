import React from "react";

export default function FormattedDate(results) {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let day = days[results.date.getDay()];
  let hours = results.date.getHours();
  let minutes = results.date.getMinutes();
  let amPm = "am";
  return (
    <div>
      <h2>
        {day} {hours}:{minutes} {amPm}
      </h2>
    </div>
  );
}
