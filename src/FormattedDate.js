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
  let minutes =
    (results.date.getMinutes() < 10 ? "0" : "") + results.date.getMinutes();

  return (
    <div>
      <p>
        Last updated: {day}, {hours}:{minutes}
      </p>
    </div>
  );
}
