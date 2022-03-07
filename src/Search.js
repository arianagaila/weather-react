import React, { useState } from "react";
import axios from "axios";

import "./App.css";

export default function Search(props) {
  let [city, Setcity] = useState("");
  let [message, Setmessage] = useState(false);
  let [weather, Setweather] = useState({});

  function showTemperature(response) {
    Setmessage(true);
    console.log(response.data);

    Setweather({
      temperature: response.data.main.temp,
      description: response.data.weather[0].description,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      icon: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    let apiKey = "abe8133e2a18c1d21a8707cbc98dbdb8";
    let units = "metric";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
    axios.get(apiUrl).then(showTemperature);
  }

  function updateCity(event) {
    Setcity(event.target.value);
  }

  let form = (
    <form onSubmit={handleSubmit} className="Search" id="searchbar">
      <input type="search" placeholder="Type a city" onChange={updateCity} />
      <input type="submit" value="Search" />{" "}
    </form>
  );

  if (message) {
    return (
      <div>
        {form}
        <ul>
          <li>Temperature: {Math.round(weather.temperature)}℃</li>
          <li>Description: {weather.description}</li>
          <li>Wind speed: {Math.round(weather.wind)}km/h</li>
          <li>Humidity: {weather.humidity}%</li>
          <li>
            <img src={weather.icon} alt={weather.description} />
          </li>
        </ul>
      </div>
    );
  } else {
    return form;
  }
}
