/* eslint-disable react/button-has-type */
// <reference path="path/types.d.ts" />
import "./App.css";
import { useEffect, useState } from "react";
import { Locations } from "./constants";
import AC from "./components/AutoComplete";
import BasicCard from "./components/Card";
import fetchWeather from "./controllers/api";
import { WeatherType } from "./types";
import { findTimeSlot } from "./controllers/timing";

const App = () => {
  const [location, setLocation] = useState(Locations[0]);
  const [WeatherInstance, setWeatherInstance] = useState<WeatherType>();
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
  console.log(WeatherInstance?.currTempImg.slice(2));

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
        <div>
          <BasicCard
            weather={WeatherInstance?.Temp}
            label="Current Temperature"
            img={`http://${WeatherInstance?.currTempImg?.slice(2) || ""}`}
            conditions={WeatherInstance?.Conditions}
          />
        </div>
      </div>
    </>
  );
};

export default App;
