import "./App.css";
import { useEffect, useState } from "react";
import { Locations } from "./constants";
import fetchWeather from "./controllers/api";
import { WeatherType } from "./types";
import Favourites from "./components/Favourites";
import PrimaryRow from "./components/PrimaryRow";
import SecondaryRow from "./components/SecondaryRow";
import NavBar from "./components/NavBar";
import CFToggle from "./components/toggle";
import { slide as Menu } from "react-burger-menu";
import { styles } from "./helpers/burger-icon-styles";

export interface FavouriteCard {
  name: string;
  weather: number;
  weatherF: number;
}

const App = () => {
  const [location, setLocation] = useState(Locations[0]);
  const [WeatherInstance, setWeatherInstance] = useState<WeatherType>();
  const [favouritesCards, setfavouritesCards] = useState<
    FavouriteCard[] | null
  >(null);
  const [localStorageData, setLocalStorageData] = useState<string | null>(null);
  const [isCelsius, setisCelsius] = useState(true);
  const [isConnected, setisConnected] = useState(true);
  const [autocompleteData, setAutocompleteData] = useState<string>("London");

  let bgName = " ";

  const handleAlignment = (newAlignment: boolean) => {
    if (newAlignment !== null) {
      setisCelsius(newAlignment);
    }
  };

  useEffect(() => {
    const fetchAllFavouritesWeather = async () => {
      const favLocationsRaw = localStorage.getItem("FavouriteLocations");
      let favLocations = [] as any[];
      try {
        const parsedData = JSON.parse(favLocationsRaw || "{}");
        favLocations = Object.values(parsedData);
      } catch (error) {
        favLocations = [];
      }

      if (!Array.isArray(favLocations)) {
        favLocations = [];
      }

      const weatherDataPromises = favLocations.map(async (location) => {
        try {
          const weatherData = await fetchWeather(location, () => {});
          return {
            name: location,
            weather: weatherData?.TempC,
            weatherF: weatherData?.TempF,
          };
        } catch (error) {
          return null;
        }
      });

      const weatherDataArray = await Promise.all(weatherDataPromises);
      const validWeatherData = weatherDataArray.filter(
        (data): data is FavouriteCard => data !== null
      );
      setfavouritesCards(validWeatherData);
    };

    fetchAllFavouritesWeather();
  }, [localStorageData]);

  const handleRemove = (e: React.MouseEvent<HTMLButtonElement>) => {
    const existingData = JSON.parse(localStorageData || "{}");
    const currentKeys = Object.values(existingData);
    delete currentKeys[e.currentTarget.name as unknown as number];

    const newData: string[] = [];
    currentKeys.forEach((key) => {
      if (key !== "") {
        newData.push(key as string);
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
        setisConnected(true);
      } else {
        setisConnected(false);
      }
    };
    WeatherFetchFunction();
  }, [location]);

  if (!isConnected) {
    bgName = "bg-slate-800 h-screen";
  } else {
    bgName = "bg-slate-800 sm:h-full xl:h-screen";
  }

  return (
    <>
      <div className="block md:hidden">
        <Menu id="burger-menu" styles={styles}>
          <div className="h-screen flex flex-col">
            <div className=""></div>
            <CFToggle
              className="bg-neutral-200 mt-96 "
              isCelsius={isCelsius}
              newAlignment={handleAlignment}
            />
          </div>
        </Menu>
      </div>

      <div
        className={bgName}
        style={{
          backgroundSize: "cover",
          backgroundPosition: "center",

          display: "flex",
          flexDirection: "column",
          marginTop: "-0px",
        }}
      >
        <div className="flex flex-wrap justify-center gap-4">
          <NavBar
            location={location}
            setLocation={setLocation}
            localStorageData={localStorageData}
            setLocalStorageData={setLocalStorageData}
            isCelsius={isCelsius}
            setisCelsius={setisCelsius}
            setisConnected={setisConnected}
            autocompleteData={autocompleteData}
            setAutocompleteData={setAutocompleteData}
          />
        </div>

        {isConnected ? (
          <Favourites
            fav={favouritesCards}
            handleRemove={handleRemove}
            currentLocationView={location}
            localStorageData={localStorageData}
            setLocalStorageData={setLocalStorageData}
            CF={isCelsius}
          />
        ) : null}

        <div className="items-center w-full">
          <PrimaryRow
            weather={WeatherInstance}
            forecasts={WeatherInstance?.nextForecast}
            isCelsius={isCelsius}
            isConnected={isConnected}
            autoCompleteData={autocompleteData}
          />
          {isConnected && autocompleteData !== "" ? (
            <SecondaryRow
              weather={WeatherInstance}
              feels_like={
                isCelsius
                  ? WeatherInstance?.feelsLikeC
                  : WeatherInstance?.feelslikeF
              }
            />
          ) : null}
        </div>
      </div>
    </>
  );
};

export default App;
