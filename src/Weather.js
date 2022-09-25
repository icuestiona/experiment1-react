import React from "react";
import "./weather.css";

export default function Weather() {
  let weatherData = {
    city: "Madrid",
    temperature: 25,
    date: "Thursday 16:15",
    description: "Clear-sky",
    imgUrl: "https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/clear-day.svg",
    humidity: 43,
    feelsLike: 26,
  };

  return (
    <div className="Weather">
      <div className="weatherapp">
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
                <h1 id="city">{weatherData.city}</h1>
                <br />
                <h2 className="temperature">
                  <span id="temperature">{weatherData.temperature}º</span>
                </h2>
                <a href=" " id="celsius-link" class="active" rel="noreferrer">
                  ºC
                </a>{" "}
                |
                <a href=" " id="fahrenheit-link" rel="noreferrer">
                  ºF
                </a>
                <br />
                <p id="temp-description">Clear sky</p>
                <h3 id="date-input">Thursday 16:00</h3>
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
          <span id="wind">{weatherData.wind}</span>m/sec
        </div>
        <div className="col-4">
          <strong>Humidity</strong>
          <br />
          💦
          <br />
          <span id="humidity">{weatherData.humidity}</span>%
        </div>
        <div className="col-4">
          <strong>Feels like</strong>
          <br />
          🌅
          <br />
          <span id="feels-like">{weatherData.feelsLike}</span>ºC
        </div>
      </div>
    </div>
  );
}
