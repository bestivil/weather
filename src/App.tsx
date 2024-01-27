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
  const [favouritesCards, setfavouritesCards] = useState<String[] | null>(null);
  const [localStorageData, setLocalStorageData] = useState<string | null>(null);

  useEffect(() => {
    const items = JSON.parse(localStorageData || "{}");
    const newData: string[] = [];
    Object.keys(items).forEach((key) => {
      newData.push(items[key as keyof typeof items]);
    });

    setfavouritesCards(newData);
  }, [localStorageData]);

  const handleFavIconClick = () => {
    //handling the adding
    const existingData = JSON.parse(localStorageData || "{}");

    const currentKeys = Object.keys(existingData);
    const nextKey =
      currentKeys.length === 0 ? 0 : Math.max(...currentKeys.map(Number)) + 1; //gets the next [key] value to append to end of localstorage array

    const newData = JSON.stringify({ ...existingData, [nextKey]: location });
    localStorage.setItem("FavouriteLocations", newData);

    setLocalStorageData(newData); //TODO: strongly type
  };

  const handleRemove = (e: React.MouseEvent<HTMLButtonElement>) => {
    const existingData = JSON.parse(localStorageData || "{}");
    const currentKeys = Object.values(existingData);
    delete currentKeys[e.currentTarget.name as unknown as number];

    const newData: string[] = [];
    currentKeys.forEach((key) => {
      if (key !== "") {
        newData.push(key as string); //TODO: push location back into array
      }
    });

    localStorage.setItem("FavouriteLocations", JSON.stringify({ ...newData }));
    setLocalStorageData(JSON.stringify(newData));
  };

  useEffect(() => {
    const WeatherFunc = async () => {
      // calls the API and sets WeatherInstance and Background time to base image.
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
              location === localStorage.getItem("Fav") //TODO: colouring display from localStorage
                ? `fill-yellow-300`
                : `hover:fill-yellow-300`
            } hover:duration-50  translate-x-24`}
            onClick={handleFavIconClick}
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
          <Favourites fav={favouritesCards} handleRemove={handleRemove} />
        </div>
      </div>
    </>
  );
};

export default App;
