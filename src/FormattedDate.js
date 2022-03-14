import React from "react";

export default function FormattedDate(props) {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let day = days[props.date.getDay()];
  let hours = props.date.getHours();
  let minutes = props.date.getMinutes();
  let amPm = "am";
  return (
    <div>
      <h2>
        {day} {hours}:{minutes} {amPm}
      </h2>
    </div>
  );
}
