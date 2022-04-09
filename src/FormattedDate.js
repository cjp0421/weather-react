import React from "react";
import "./styles.css";

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
  let amPm = hours >= 12 ? "pm" : "am";
  hours = hours % 12 || 12;

  return (
    <div>
      <p>
        Last updated: {day}, {hours}:{minutes}
        {amPm}
      </p>
    </div>
  );
}
