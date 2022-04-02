import { axios } from "axios";
import React, { useState } from "react";
import "./styles.css";
import "./WeatherForecast.css";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);
  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }

  if (loaded) {
    return (
      <div className="WeatherForecast">
        <div className="row">
          <div className="col">
            <div className="WeatherForecast-day"> Thur.</div>
            <div>
              <WeatherIcon code="01d" size={32} />
            </div>
            <div className="WeatherForecast-temperatures">
              <span className="WeatherForecast-temperature-max">
                {forecast[0].temp.max}°
              </span>
              <span className="WeatherForecast-temperature-min">
                {forecast[0].temp.min}°
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    let apiKey = `3a94f3778290bfeee61278505dbbe51d`;
    let longitude = props.coordinates.lon;
    let latitude = props.coordinates.lat;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return null;
  }
}

//https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&appid={API key}
/*let apiKey = `3a94f3778290bfeee61278505dbbe51d`;
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`; */
