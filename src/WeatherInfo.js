import React from "react";
import FormatDate from "./FormatDate";
import WeatherTemp from "./WeatherTemp";
import WeatherIcon from "./WeatherIcon";

export default function WeatherInfo(props) {
  function sunrise() {
    let date = new Date(props.data.sunrise * 1000);
    let hours = date.getHours();
    let minutes = date.getMinutes();

    if (hours < 10) {
      hours = `0${hours}`;
    }

    if (minutes < 10) {
      minutes = `0${minutes}`;
    }

    return (
      <span>
        {hours}:{minutes}
      </span>
    );
  }

  function sunset() {
    let date = new Date(props.data.sunset * 1000);
    let hours = date.getHours();
    let minutes = date.getMinutes();

    return (
      <span>
        {hours}:{minutes}
      </span>
    );
  }

  return (
    <div className="WeatherInfo">
      <h1>{props.data.city}</h1>
      <ul className="data">
        <li>
          <FormatDate date={props.data.date} />
        </li>
        <li className="text-capitalize">{props.data.description}</li>
        <li>Sunrise: {sunrise()}</li>
        <li>Sunset: {sunset()}</li>
      </ul>

      <div className="row mt-3">
        <div className="col-6">
          <div className="clearfix">
            <div>
              <WeatherIcon
                code={props.data.icon}
                width={128}
                height={128}
                alt={props.alt}
                transition={true}
              />
            </div>
          </div>
          <div className="temperature">
            <WeatherTemp celsius={props.data.temperature} />
          </div>
        </div>
        <div className="col-6">
          <div>
            <ul className="details">
              <li>Feels: {Math.round(props.data.feelsLike)}°C</li>
              <li>Humidity: {props.data.humidity}%</li>
              <li>Wind: {Math.round(props.data.wind)} Km/h</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
