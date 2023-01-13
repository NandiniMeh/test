import React, { useState } from 'react';
import './App.css';
import Info from './Card';

import snow from "./weathers/snow.jpeg";
import clear from "./weathers/clear.webp";
import clouds from "./weathers/clouds.jpeg";
import rain from "./weathers/rain.jpeg";
import smoke from "./weathers/smoke.jpeg";
import { Typography } from '@mui/material';
import { margin } from '@mui/system';

const api = {
  key: 'd52160e4c7db5a91c93345d0a751e9a8',
  base: "https://api.openweathermap.org/data/2.5/"
}

function App() {
  const [query, setQuery] = useState('');
  const [condition, setCondition] = useState('');
  const [res, setRes] = useState('');
  const [feels_like, setFeels_like] = useState('');
  const [T, setT] = useState('');

    const search = evt => {
    if (evt.key === "Enter") {
      fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
        .then(res => res.json())
        .then(result => {
          setCondition(result.weather?.[0].main)
          setFeels_like(result.main.feels_like)
          setT(result.main.temp)
          setRes(result)
          console.log(result)
          var currWeather = result.weather?.[0].main;
          if (currWeather === "Clouds") {

            document.body.style.backgroundImage = `url(${clouds})`;

          } else if (currWeather === "Clear") {

            document.body.style.backgroundImage = `url(${clear})`;

          } else if (currWeather === "Mist" ||
                     currWeather === "Smoke" ||
                     currWeather === "Haze" ||
                     currWeather === "Dust" ||
                     currWeather === "Fog" ||
                     currWeather === "Sand" ||
                     currWeather === "Ash" ||
                     currWeather === "Squall" ||
                     currWeather === "Tornado") {

            document.body.style.backgroundImage = `url(${smoke})`;

          } else if (currWeather === "Snow") {

            document.body.style.backgroundImage = `url(${snow})`;

          } else if (currWeather === "Rain" ||
                     currWeather === "Drizzle" ||
                     currWeather === "Thunderstorm") {

            document.body.style.backgroundImage = `url(${rain})`;

          }

        });
    }
  }

  return (
    <div className='main-div'>
      <main>
        <div className="search-box">
          <input 
            type="text"
            className="search-bar"
            placeholder="Enter City"
            onChange={e => setQuery(e.target.value)}
            value={query}
            onKeyPress={search}
            style = {{'text-align': 'center'}}
          />
        </div>
        <Info res={res} condition={condition} feels_like={feels_like} T={T} />
        </main>
    </div>
  );
}

export default App;
