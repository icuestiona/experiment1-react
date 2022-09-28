import React from "react";
import "./weather.css";

export default function SearchForm() {
  return (
    <div className="searchForm">
      <form>
        <div className="row-2">
          <div className="col-9">
            <input
              type="search"
              className="form-control search search-bar"
              placeholder="Enter your city here"
              id="searchInput"
              autoFocus="off"
              autoComplete="off"
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
    </div>
  );
}
