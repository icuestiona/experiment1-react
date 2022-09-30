import React, { useState } from "react";
import axios from "axios";
import "./weather.css";
import "./App";
import FormatDate from "./FormatDate";
import WeatherTemp from "./WeatherTemp";

export default function Weather(props) {
  const [weather, setWeather] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);
  const [loading, setLoading] = useState(false);

  function displayWeather(response) {
    setCity();
    setLoading(true);
    setWeather({
      city: response.data.name,
      temperature: Math.round(response.data.main.temp),
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      date: new Date(response.data.dt * 1000),
      feelsLike: Math.round(response.data.main.feels_like),
    });
  }

  function alertNotFound() {
    setLoading(false);
    setWeather({});
  }

  function handleSubmit(event) {
    event.preventDefault();

    search();
  }

  function displayCity(event) {
    setCity(event.target.value);
  }

  function search() {
    let apiKey = `ec906dafd44a254d26b9dd410c431070`;
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(displayWeather).catch(alertNotFound);
  }

  if (loading) {
    return (
      <div className="weather">
        <div className="app-container">
          <form onSubmit={handleSubmit}>
            <div className="row-2">
              <div className="col-9">
                <input
                  type="search"
                  className="form-control search search-bar"
                  placeholder="Enter city name"
                  autoFocus="off"
                  autoComplete="off"
                  onChange={displayCity}
                />
                <input
                  type="submit"
                  value="search"
                  className="col-3 btn btn-primary shadow.sm"
                />
                <button
                  type="button"
                  value="current"
                  className="col-3 btn btn-light shadow.sm"
                  id="currentSearchButton"
                >
                  Current location
                </button>
              </div>
            </div>
          </form>
          <div className="card mb-3">
            <div className="row g-0">
              <div className="col-md-4">
                <img
                  src="https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/clear-day.svg"
                  width="150"
                  alt="clear-sky"
                  id="icon"
                />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h1 id="city">{weather.city}</h1>
                  <br />
                  <h2 className="weather-temp">
                    <span id="weather-temp">
                      <WeatherTemp celsius={weather.temperature} />
                    </span>
                  </h2>

                  <br />
                  <h3 id="date-input">
                    <FormatDate date={weather.date} />
                  </h3>
                  <h5 id="temp-description">{weather.description}</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-4">
            <strong>Wind</strong>
            <br />
            💨
            <br />
            <span id="wind">{Math.round(weather.wind)}</span>km/h
          </div>
          <div className="col-4">
            <strong>Humidity</strong>
            <br />
            💦
            <br />
            <span id="humidity">{weather.humidity}</span>%
          </div>
          <div className="col-4">
            <strong>Feels like</strong>
            <br />
            🌅
            <br />
            <span id="feelsLike">{weather.feelsLike}</span>ºC
          </div>
        </div>
      </div>
    );
  } else {
    search();
    return <p>Loading...</p>;
  }
}
