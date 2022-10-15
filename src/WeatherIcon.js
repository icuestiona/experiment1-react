import React from "react";

import clearSkyDay from "./images/icons/01d.svg";
import clearSkyNight from "./images/icons/01n.svg";
import fewCloudsDay from "./images/icons/02d.svg";
import fewCloudsNight from "./images/icons/02n.svg";
import scatteredClouds from "./images/icons/03d.svg";
import brokenClouds from "./images/icons/04d.svg";
import showerRain from "./images/icons/09d.svg";
import rainDay from "./images/icons/10d.svg";
import rainNight from "./images/icons/10n.svg";
import thunderstorm from "./images/icons/11d.svg";
import snow from "./images/icons/13d.svg";
import mist from "./images/icons/50d.svg";

export default function WeatherIcon(props) {
  const codeMapping = {
    "01d": clearSkyDay,
    "01n": clearSkyNight,
    "02d": fewCloudsDay,
    "02n": fewCloudsNight,
    "03d": scatteredClouds,
    "03n": scatteredClouds,
    "04d": brokenClouds,
    "04n": brokenClouds,
    "09d": showerRain,
    "09n": showerRain,
    "10d": rainDay,
    "10n": rainNight,
    "11d": thunderstorm,
    "11n": thunderstorm,
    "13d": snow,
    "13n": snow,
    "50d": mist,
    "50n": mist,
  };

  return (
    <img
      src={codeMapping[props.code]}
      width={props.width}
      height={props.height}
      alt={""}
    />
  );
}
