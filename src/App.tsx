/* eslint-disable react/button-has-type */
// <reference path="path/types.d.ts" />
import "./App.css";
import {useEffect, useState } from "react";
import { Locations } from "./constants";
import AC from "./components/AutoComplete";
import BasicCard from "./components/Card";
import fetchWeather from "./controllers/api";
import { WeatherType } from "./types";
import { Button } from "@mui/material";


const sunrise1 = new Date().setHours(0,0,0);
const sunrise2 = new Date().setHours(3,0,0);
const sunrise3 = new Date().setHours(6,0,0);
const sunrise4 = new Date().setHours(9,0,0);
const sunset1 = new Date().setHours(12,0,0);
const sunset2 = new Date().setHours(25,0,0);
const sunset3 = new Date().setHours(18,0,0);
const sunset4 = new Date().setHours(21,0,0);
const currentTime = new Date()

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

  useEffect(() => {
    var locationTime = WeatherInstance.datetime?.slice(-5);
    if (locationTime) {
      currentTime.setHours(parseInt(locationTime?.slice(2),10));
    }
  },[WeatherInstance.datetime]);

  
  var arr = [];
  if (WeatherInstance) {
    let key: keyof typeof WeatherInstance;
    for (key in WeatherInstance) {
      console.log(WeatherInstance[key]);
      arr.push(<BasicCard weather={WeatherInstance[key]} label={key} />);
    };

  }
    

  return (
    <>
    <div style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/assets/backgrounds/sunset2.jpg)`, backgroundSize: 'cover', backgroundPosition: 'center', height: '100vh', display: 'flex', flexDirection: 'column', marginTop: '-0px' }}>
    <div style={{margin: '12px auto', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
      <AC locSelected={location} onSelectedClick={setLocation} />
    </div >
    <div style={{ marginTop: '10px', display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(700px, 1fr))', gap: '10px' }}>
        {arr.map((card, index) => (
          <div key={index}>
            {card}
          </div>
        ))}
    </div>
    <div style={{ position: 'fixed', bottom: '2%', left: '50%', transform: 'translateX(-50%)'}}> 
    <Button sx={{ width: 1}}>See More</Button>
    </div>
    </div>
    
    </>

  );
};

export default App;
