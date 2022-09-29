import React from "react";
import Weather from "./Weather";
import Footer from "./Footer";
import "./weather.css";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <p>Daily weather</p>
        <Weather defaultCity="Madrid" />
      </div>
      <Footer />
    </div>
  );
}
