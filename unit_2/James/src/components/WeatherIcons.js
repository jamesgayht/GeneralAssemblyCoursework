import React from "react";
import "./WeatherIcons.css";

// Task 2:
// ----------
// Title: WeatherIcons Component
//
// Description:
// Create a new React component called WeatherIcons in a file named WeatherIcons.js.
// The component should accept props for img, conditions, and time.
// Update the JSX structure to work with the passed props.
//
// Example:
// <WeatherIcons img="sunny.png" conditions="Sunny" time="8:00 AM" />
//
// Write your solution in WeatherIcons.js

function WeatherIcons(props) {
  console.info("props >>> ", props);
  return (
    <div className="weather-icon">
      <div className="weather-data">
        <img src={props.img} alt={props.conditions}></img>
        <p>{props.conditions}</p>
        <p>{props.time}</p>
      </div>
    </div>
  );
}

export default WeatherIcons;
