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
            Coded by{" "}
            <a
              href="https://stellar-donut-875afe.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Soraya Carvajal
            </a>{" "}
            , open-sourced on{" "}
            <a
              href="https://github.com/icuestiona/experiment1-react"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>{" "}
            and hosted on{" "}
            <a
              href="https://sage-queijadas-9e8532.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              Netlify
            </a>
          </small>
        </footer>
      </div>
    </div>
  );
}
