/* eslint-disable react/button-has-type */
// <reference path="path/types.d.ts" />
import "./App.css";
import { useEffect, useState } from "react";
import { Locations } from "./constants";
import AC from "./components/AutoComplete";
import BasicCard from "./components/Card";
import fetchWeather from "./controllers/api";
import { WeatherType } from "./types";
import { Button } from "@mui/material";
import { findTimeSlot } from "./controllers/timing";

const App = () => {
  const [location, setLocation] = useState(Locations[0]);
  const [WeatherInstance, setWeatherInstance] = useState<WeatherType>({});
  const [backgroundTime, setBackgroundTime] = useState<string>();

  useEffect(() => {
    const WeatherFunc = async () => {
      const weatherData = await fetchWeather(location, setWeatherInstance);
      if (weatherData) {
        setWeatherInstance(weatherData);
        setBackgroundTime(
          findTimeSlot(weatherData?.datetime!.slice(-5).toString())
        );
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
    }
  }

  return (
    <>
      <div
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL}/assets/backgrounds/${backgroundTime}.jpg)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          marginTop: "-0px",
        }}
      >
        <div
          style={{
            margin: "12px auto",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <AC locSelected={location} onSelectedClick={setLocation} />
        </div>
        <div
          style={{
            marginTop: "10px",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(700px, 1fr))",
            gap: "10px",
          }}
        >
          {arr.map((card, index) => (
            <div key={index}>{card}</div>
          ))}
        </div>
        <div
          style={{
            position: "fixed",
            bottom: "2%",
            left: "50%",
            transform: "translateX(-50%)",
          }}
        >
          <Button sx={{ width: 1 }}>See More</Button>
        </div>
      </div>
    </>
  );
};

export default App;
