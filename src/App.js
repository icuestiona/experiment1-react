import React from "react";
import "./App.css";
import Weather from "./Weather.js";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Madrid" />
        <footer>
          <small>
            This project was coded by{" "}
            <a
              href="https://stellar-donut-875afe.netlify.app/about.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              Soraya Carvajal
            </a>{" "}
            and is {""}
            <a
              href="https://github.com/icuestiona/react-weather-app"
              target="_blank"
              rel="noreferrer"
            >
              open-sourced on Github
            </a>
          </small>
        </footer>
      </div>
    </div>
  );
}
