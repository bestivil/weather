/* eslint-disable react/button-has-type */
// <reference path="path/types.d.ts" />
import "./App.css";
import { useEffect, useState } from "react";
import { Locations } from "./constants";
import fetchWeather from "./controllers/api";
import { WeatherType } from "./types";
import Favourites from "./components/Favourites";
import PrimaryRow from "./components/PrimaryRow";
import SecondaryRow from "./components/SecondaryRow";
import NavBar from "./components/NavBar";

const App = () => {
  const [location, setLocation] = useState(Locations[0]);
  const [WeatherInstance, setWeatherInstance] = useState<WeatherType>();
  const [favouritesCards, setfavouritesCards] = useState<String[] | null>(null);
  const [localStorageData, setLocalStorageData] = useState<string | null>(null);
  const [isCelsius, setisCelsius] = useState(true);

  useEffect(() => {
    const items = JSON.parse(localStorageData || "{}");
    const newData: string[] = [];
    Object.keys(items).forEach((key) => {
      newData.push(items[key as keyof typeof items]);
    });

    setfavouritesCards(newData);
  }, [localStorageData]);

  // Load the data from localstorage on first render
  useEffect(() => {
    const data = localStorage.getItem("FavouriteLocations");
    setLocalStorageData(data);
  }, []);

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
    const WeatherFetchFunction = async () => {
      const weatherData = await fetchWeather(location, setWeatherInstance);
      if (weatherData) {
        setWeatherInstance(weatherData);
      }
    };
    WeatherFetchFunction();
  }, [location]);

  return (
    <>
      <div
        className="bg-slate-800"
        style={{
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          marginTop: "-0px",
        }}
      >
        <NavBar
          location={location}
          setLocation={setLocation}
          localStorageData={localStorageData}
          setLocalStorageData={setLocalStorageData}
          isCelsius={isCelsius}
          setisCelsius={setisCelsius}
        />

        <div className="m-2 items-center">
          <PrimaryRow
            weather={WeatherInstance}
            forecasts={WeatherInstance?.nextForecast}
            isCelsius={isCelsius}
          />
          <SecondaryRow
            weather={WeatherInstance}
            feels_like={
              isCelsius
                ? WeatherInstance?.feelsLikeC
                : WeatherInstance?.feelslikeF
            }
          />
        </div>
        <div className="">
          <p className="ml-8 mt-4 text-white">Favourites</p>

          <Favourites //change to favourites row
            fav={favouritesCards}
            handleRemove={handleRemove}
            currentLocationView={location}
            localStorageData={localStorageData}
            setLocalStorageData={setLocalStorageData}
          />
        </div>
      </div>
    </>
  );
};

export default App;
