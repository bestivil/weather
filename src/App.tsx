/* eslint-disable react/button-has-type */
// <reference path="path/types.d.ts" />
import "./App.css";
import { useEffect, useState } from "react";
import { Locations } from "./constants";
import AC from "./components/AutoComplete";




const App = () => {

  const [location, setLocation] = useState(Locations[0]);
  const [temp, setTemp] = useState(0);

  
  useEffect(() => {
    const fetchWeather = async () => {
      const response = await fetch('http://api.weatherapi.com/v1/current.json?key=b471c1780bd24c85ad5190222232012&q=' + location + '&aqi=no');
      response.json().then(json => { 
        setTemp(json.current.temp_c);
      })
    }
    fetchWeather();
  },[location])

  useEffect(() => {
    console.log('The temperate is', temp)
  },[temp])
  
  return (
    <div>
      <AC locSelected={location} onSelectedClick={setLocation} />
    </div>
  );
};

export default App;
