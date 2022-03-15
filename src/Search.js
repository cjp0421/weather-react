import React, { useState } from "react";
import axios from "axios";
import FormattedDate from "./FormattedDate";
import "./styles.css";

export default function Search() {
  const [city, setCity] = useState("");
  const [results, setResults] = useState(false);
  const [weather, setWeather] = useState({});

  function displayWeather(response) {
    setWeather({
      city: response.data.name,
      date: new Date(response.data.dt * 1000),
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      descripition: response.data.weather[0].description,
    });
    setResults(true);
  }

  function handleSubmit(event) {
    event.preventDefault();
    let apiKey = `3a94f3778290bfeee61278505dbbe51d`;
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(displayWeather);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  let form = (
    <div className="Search">
      <form onSubmit={handleSubmit}>
        <input
          type="search"
          placeholder="Enter a city..."
          onChange={updateCity}
        />
        <input type="submit" value="Search" />
      </form>
    </div>
  );

  if (results) {
    //The above is short for (results === true)
    return (
      <div className="Search">
        {form}
        <br />
        <FormattedDate date={weather.date} />
        <div className="bgOverlay row">
          <div className=" col-6">
            <ul className="row cityAndIcon">
              <li className="col-12 cityName">
                <img
                  className="weatherIcon"
                  src={weather.icon}
                  alt={weather.description}
                />
                {weather.city}
              </li>
              <li className="col-12">
                {Math.round(weather.temperature)}°C | ?°F
              </li>
            </ul>
          </div>
          <div className="col-6 currentConditions">
            <ul>
              <li>Humidity: {weather.humidity}%</li>
              <li>Wind Speed: {weather.wind}</li>
            </ul>
          </div>
        </div>
        <div className="bgOverlay row">
          <p>Forecast will go here.</p>
          <div className=""></div>
        </div>
      </div>
    );
  } else {
    return form;
  }
}
