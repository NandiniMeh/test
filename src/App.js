import React, { useState } from "react";
import "./App.css";
import { TextField, Typography } from "@mui/material";
import WeatherDetail from "./WeatherDetail";
import {
  getTemperatureColor,
  getHumidityColor,
  getPressureColor,
  getCloudCoverageColor,
} from "./utils";
import CustomMap from "./CustomMap";
import { APIProvider } from "@vis.gl/react-google-maps";

const api = {
  key: "d52160e4c7db5a91c93345d0a751e9a8",
  base: "https://api.openweathermap.org/data/2.5/",
};

function App() {
  const [query, setQuery] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [display, setDisplay] = useState(false);

  const search = async (evt) => {
    if (evt.key === "Enter") {
      const response = await fetch(
        `${api.base}weather?q=${query}&units=metric&APPID=${api.key}`
      );
      const result = await response.json();
      if (response.ok) {
        setWeatherData(result);
        setDisplay(true);
      } else {
        alert(result.message);
        setDisplay(false);
      }
    }
  };

  const currentDate = new Date().toLocaleDateString(undefined, {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="app">
      <div className="search-sidebar">
        <TextField
          fullWidth
          label="Enter City"
          variant="outlined"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyPress={search}
          className="custom-textfield"
          style={{ marginBottom: 20 }}
        />

        <Typography variant="subtitle1" style={{ marginBottom: 20 }}>
          {currentDate}
        </Typography>
        {weatherData && display && (
          <div style={{ textAlign: "center", width: "100%" }}>
            <Typography variant="h6" style={{ textDecoration: "bold" }}>
              {weatherData.name}, {weatherData.sys.country}
            </Typography>
            <img
              src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
              alt="Weather Icon"
              style={{
                display: "block",
                margin: "auto",
                marginTop: "2%",
                marginBottom: "2%",
                width: "100px",
                height: "100px",
                backgroundColor: "#FFF",
                borderRadius: "50%",
                padding: "10px",
                border: "solid 1px black",
              }}
            />
            <Typography variant="body1">
              {weatherData.weather[0].main}
            </Typography>
            <Typography>{weatherData.weather[0].description}</Typography>
            <Typography
              variant="h1"
              style={{
                color: "#FFAC1C",
                display: "flex",
                justifyContent: "center",
                textShadow: `
                -1px -1px 0 #000,  
                1px -1px 0 #000,
                -1px  1px 0 #000,
                1px  1px 0 #000`,
              }}
            >
              <span style={{ lineHeight: 1 }}>
                {Math.round(weatherData.main.temp)}
              </span>
              <span
                style={{
                  verticalAlign: "super",
                  fontSize: "0.6em",
                  lineHeight: 2,
                }}
              >
                °C
              </span>
            </Typography>
            <Typography variant="body1">
              Feels like {Math.round(weatherData.main.feels_like)}°C
            </Typography>
            <div>
              <WeatherDetail
                label="High Temp"
                value={`${Math.round(weatherData.main.temp_max)}°C`}
                iconColor={getTemperatureColor(weatherData.main.temp_max)}
              />
              <WeatherDetail
                label="Low Temp"
                value={`${Math.round(weatherData.main.temp_min)}°C`}
                iconColor={getTemperatureColor(weatherData.main.temp_min)}
              />
              <WeatherDetail
                label="Humidity"
                value={`${weatherData.main.humidity}%`}
                iconColor={getHumidityColor(weatherData.main.humidity)}
              />
              <WeatherDetail
                label="Pressure"
                value={`${weatherData.main.pressure} mb`}
                iconColor={getPressureColor(weatherData.main.pressure)}
              />
              <WeatherDetail
                label="Cloud Coverage"
                value={`${weatherData.clouds.all}%`}
                iconColor={getCloudCoverageColor(weatherData.clouds.all)}
              />
            </div>
          </div>
        )}
      </div>
      <div className="info-area">
        <APIProvider apiKey="AIzaSyCDrJQkWUeRKG_Zj4W-KRbwUVhVQ_P4vJg">
          {weatherData && display && (
            <CustomMap
              key={`${weatherData.coord.lat}-${weatherData.coord.lon}`}
              latitude={weatherData.coord.lat}
              longitude={weatherData.coord.lon}
            />
          )}
        </APIProvider>
      </div>
    </div>
  );
}

export default App;
