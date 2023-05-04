import React, { useState } from "react";
import "./App.css";
import WeatherIcons from "./components/WeatherIcons";
import weatherData from "./weatherData";

// Task 3:
// ----------
// Title: Render WeatherIcons Components in App
//
// Description:
// In the App.js file, import the WeatherIcons component and the weatherData array.
// Loop over the weatherData array and create a WeatherIcons component for each element passed.
// Pass the required props (img, conditions, and time) to each WeatherIcons component.
// Render the WeatherIcons components inside the App component.
//
// Example:
// <App>
//   <WeatherIcons img="sunny.png" conditions="Sunny" time="8:00 AM" />
//   ...
// </App>

function App() {

  return (
    <>
      <div className="App">
        <div>
          <h1>My WeatherIcons App</h1>
        </div>
      </div>
      <section>
        {weatherData.map((wd) => (
          <WeatherIcons
            img={wd.img}
            conditions={wd.conditions}
            time={wd.time}
            key={wd.img}
          ></WeatherIcons>
        ))}
      </section>
    </>
  );
}

export default App;
