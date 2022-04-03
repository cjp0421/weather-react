import React from "react";
import "./styles.css";
import "./WeatherForecast";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props) {
  function maxTemperature() {
    let temperature = Math.round(props.forecast.temp.max);
    return `${temperature}°`;
  }
  function minTemperature() {
    let temperature = Math.round(props.forecast.temp.min);
    return `${temperature}°`;
  }

  function day() {
    let date = new Date(props.forecast.dt * 1000);
    let day = date.getDay();

    let days = ["Sun.", "Mon.", "Tues.", "Wed.", "Thurs.", "Fri.", "Sat."];

    return `${days[day]}`;
  }

  return (
    <div className="WeatherForecastDay">
      <div className="row">
        <div className="col">
          <div className="WeatherForecast-day">{day()}</div>
          <div>
            <WeatherIcon code={props.forecast.weather[0].icon} size={32} />
          </div>
          <div className="WeatherForecast-temperatures">
            <span className="WeatherForecast-temperature-max">
              {maxTemperature()}
            </span>
            <span className="WeatherForecast-temperature-min">
              {minTemperature()}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
