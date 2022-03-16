import React from "react";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

import "./styles.css";

export default function WeatherInfo(weather) {
  return (
    <div className="WeatherInfo">
      <div className="bgOverlay row">
        <div className=" col-6">
          <ul className="row cityAndIcon">
            <li className="col-12 cityName">
              <span className="float-left"> {weather.data.city} </span>
            </li>
            <li className="col-12">
              <WeatherTemperature celsius={weather.data.temperature} />
            </li>
          </ul>
        </div>
        <div className="col-6 currentConditions">
          <ul>
            <li>
              <WeatherIcon code={weather.data.icon} />
            </li>
            <li>Humidity: {weather.data.humidity}%</li>
            <li>Wind Speed: {weather.data.wind}</li>
          </ul>
        </div>
      </div>
      <div className="bgOverlay row">
        <p>Forecast will go here.</p>
        <div className=""></div>
      </div>
    </div>
  );
}
