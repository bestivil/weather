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
    const WeatherFunc = async () => {
      const weatherData =  await fetchWeather(location,setWeatherInstance);
      if (weatherData) {
        setWeatherInstance(weatherData);
      }

    };
    WeatherFunc();
    
  }, [location]);

  
  var arr = [];
  if (WeatherInstance) {
    let key: keyof typeof WeatherInstance;
    for (key in WeatherInstance) {
      console.log(WeatherInstance[key]);
      arr.push(<BasicCard weather={WeatherInstance[key]} label={key} />);
    };

  }
    

  return (
    <><div style={{margin: '10px auto', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
      <AC locSelected={location} onSelectedClick={setLocation} />
    </div >
    <div style={{ marginTop: '10px', display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(700px, 1fr))', gap: '10px' }}>
        {arr.map((card, index) => (
          <div key={index}>
            {card}
          </div>
        ))}
      </div>
    
    </>

  );
};

export default App;
