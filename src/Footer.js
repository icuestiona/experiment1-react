import React from "react";
import "./weather.css";

export default function Footer() {
  return (
    <div className="footer">
      <div className="coder">
        <a
          href="https://github.com/icuestiona/vanilla-weather-app"
          target="_blank"
          rel="noreferrer"
        >
          Open-source code{" "}
        </a>
        by Soraya Carvajal and hosted on{" "}
        <a
          href="https://gleeful-vacherin-d63ffc.netlify.app/"
          target="_blank"
          rel="noreferrer"
        >
          Netlify
        </a>
      </div>
    </div>
  );
}
