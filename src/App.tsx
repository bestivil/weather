/* eslint-disable react/button-has-type */
// <reference path="path/types.d.ts" />
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
  
  const [localStorageData, setLocalStorageData] = useState<string | null>(null);
  const [isCelsius, setisCelsius] = useState(true);

  useEffect(() => {
    // Fetch and set initial local storage data for favorite locations
    const favoriteLocations = localStorage.getItem('FavouriteLocations');
    setLocalStorageData(favoriteLocations || '[]'); // Ensure a default value of an empty array if null
  }, []);

  

  

  

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
            currentLocationView={location}
            localStorageData={localStorageData}
            setLocalStorageData={setLocalStorageData}
            // isCelsius={isCelsius}
          />
        </div>
      </div>
    </>
  );
};

export default App;
