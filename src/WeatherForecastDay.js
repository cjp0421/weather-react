import React from "react";
import "./styles.css";
import "./WeatherForecast";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props) {
  return (
    <div>
      <div className="WeatherForecast-day">{props.forecast[0].temp.dt}</div>
      <div>
        <WeatherIcon code={props.forecast[0].weather[0].icon} size={32} />
      </div>
      <div className="WeatherForecast-temperatures">
        <span className="WeatherForecast-temperature-max">
          {props.forecast[0].temp.max}°
        </span>
        <span className="WeatherForecast-temperature-min">
          {props.forecast[0].temp.min}°
        </span>
      </div>
    </div>
  );
}
