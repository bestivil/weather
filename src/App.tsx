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
import Favourites from "./components/Favourites";

const App = () => {
  const [location, setLocation] = useState(Locations[0]);
  const [WeatherInstance, setWeatherInstance] = useState<WeatherType>();
  const [backgroundTime, setBackgroundTime] = useState<string>();
  const [favouritesCards, setfavouritesCards] = useState<String | null>(null);

  const items = { ...localStorage };
  console.log(items);

  useEffect(() => {
    setfavouritesCards(localStorage.getItem("Fav"));
  }, [favouritesCards]);

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

  const handleClick = () => {
    localStorage.setItem("Fav", location);
  };

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
        <div className=" flex items-center flex-row bg-[#E6E6E6] h-[96px] shadow-gray-200 ">
          <div className="translate-x-[18px]">
            <AC locSelected={location} onSelectedClick={setLocation} />
          </div>
          <button
            className={` bg-white-200 rounded-lg flex p-[20px] bk-icon ml-auto ring-black ${
              location === localStorage.getItem("Fav")
                ? `fill-yellow-300`
                : `hover:fill-yellow-300`
            } hover:duration-50  translate-x-24`}
            onClick={handleClick}
          >
            <svg
              className="mr-[19px]"
              height="24"
              width="24"
              viewBox="0 0 24 24"
              role="presentation"
              aria-hidden="true"
            >
              <path d="M23.555 8.729a1.505 1.505 0 0 0-1.406-.98h-6.087a.5.5 0 0 1-.472-.334l-2.185-6.193a1.5 1.5 0 0 0-2.81 0l-.005.016-2.18 6.177a.5.5 0 0 1-.471.334H1.85A1.5 1.5 0 0 0 .887 10.4l5.184 4.3a.5.5 0 0 1 .155.543l-2.178 6.531a1.5 1.5 0 0 0 2.31 1.684l5.346-3.92a.5.5 0 0 1 .591 0l5.344 3.919a1.5 1.5 0 0 0 2.312-1.683l-2.178-6.535a.5.5 0 0 1 .155-.543l5.194-4.306a1.5 1.5 0 0 0 .433-1.661z"></path>
            </svg>{" "}
            <span className="pl-2 text-black">Favourite</span>
          </button>
        </div>

        <div className="mt-4">
          <BasicCard
            weather={WeatherInstance?.Temp}
            label="Current Temperature"
            img={`http://${WeatherInstance?.currTempImg?.slice(2) || ""}`}
            conditions={WeatherInstance?.Conditions}
          />
        </div>
        <div className="mt-4">
          <p className="m-5">Favourites</p>
          <Favourites fav={favouritesCards} />
        </div>
      </div>
    </>
  );
};

export default App;
