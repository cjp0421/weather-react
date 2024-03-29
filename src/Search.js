import React, { useState } from "react";
import axios from "axios";
import FormattedDate from "./FormattedDate";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";
import "./styles.css";

export default function Search() {
  let defaultCity = "Saint Louis";
  const [city, setCity] = useState(defaultCity);
  const [results, setResults] = useState(false);
  const [weather, setWeather] = useState({});

  let displayWeather = (response) => {
    setWeather({
      city: response.data.name,
      coordinates: response.data.coord,
      date: new Date(response.data.dt * 1000),
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      icon: response.data.weather[0].icon,
      descripition: response.data.weather[0].description,
    });
    setResults(true);
  };

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
        <div>
          <WeatherInfo data={weather} />
        </div>
        <div className="bgOverlay row">
          <div>
            <FormattedDate date={weather.date} />
          </div>
          <div>
            <WeatherForecast coordinates={weather.coordinates} />
          </div>
        </div>
      </div>
    );
  } else {

    return form;
    //could enter the default city stuff here to make it the one that appears on load...
  }
}
