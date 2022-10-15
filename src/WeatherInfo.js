import React from "react";
import FormatDate from "./FormatDate";
import WeatherTemp from "./WeatherTemp";
import WeatherIcon from "./WeatherIcon";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1>{props.data.city}</h1>
      <ul>
        <li>
          <FormatDate date={props.data.date} />
        </li>
        <li className="text-capitalize">{props.data.description}</li>
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
          <div className="details">
            <ul>
              <li>Humidity: {props.data.humidity}%</li>
              <li>Wind: {Math.round(props.data.wind)} Km/h</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
