import React from "react";
import WeatherIcon from "./WeatherIcon";

import "./styles.css";

export default function WeatherInfo(weather) {
  return (
    <div className="WeatherInfo">
      <div className="bgOverlay row">
        <div className=" col-6">
          <ul className="row cityAndIcon">
            <li className="col-12 cityName">
              <WeatherIcon code={weather.data.icon} />

              {weather.data.city}
            </li>
            <li className="col-12">
              {Math.round(weather.data.temperature)}°C | ?°F
            </li>
          </ul>
        </div>
        <div className="col-6 currentConditions">
          <ul>
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
