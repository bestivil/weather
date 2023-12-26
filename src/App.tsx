/* eslint-disable react/button-has-type */
// <reference path="path/types.d.ts" />
import "./App.css";
import {useEffect, useState } from "react";
import { Locations } from "./constants";
import AC from "./components/AutoComplete";
import BasicCard from "./components/Card";
import fetchWeather from "./controllers/api";
import { WeatherType } from "./types";




const App = () => {
  const [location, setLocation] = useState(Locations[0]);
  const [WeatherInstance, setWeatherInstance] = useState<WeatherType>({});

  

  useEffect(() => {
    const Func = async () => {
      const weatherData =  await fetchWeather(location,setWeatherInstance);
      if (weatherData) {
        setWeatherInstance(weatherData);
      }

    };
    Func();
    
  }, [location]);
  
  return (
      <><div>
      <AC locSelected={location} onSelectedClick={setLocation} />
    </div><BasicCard weather={WeatherInstance} /></>

  );
};

export default App;
