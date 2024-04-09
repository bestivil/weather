import "./App.css";
import { useEffect, useState } from "react";
import { Locations } from "./constants";
import fetchWeather from "./controllers/api";
import { WeatherType } from "./types";
import Favourites from "./components/Favourites";
import PrimaryRow from "./components/PrimaryRow";
import SecondaryRow from "./components/SecondaryRow";
import NavBar from "./components/NavBar";


export interface FavouriteCard {
  name: string;
  weather: number;
}

const App = () => {
  const [location, setLocation] = useState(Locations[0]);
  const [WeatherInstance, setWeatherInstance] = useState<WeatherType>();
  const [favouritesCards, setfavouritesCards] = useState<FavouriteCard[] | null>(null);;
  const [localStorageData, setLocalStorageData] = useState<string | null>(null);
  const [isCelsius, setisCelsius] = useState(true);

  useEffect(() => {
    const fetchAllFavouritesWeather = async () => {
      // Attempt to parse the localStorage data or default to an empty array
      const favLocationsRaw = localStorage.getItem("FavouriteLocations");
      let favLocations = [] as any[];
      try {
        const parsedData = JSON.parse(favLocationsRaw || "{}");
        // Convert object to array
        favLocations =(Object.values(parsedData));
      } catch (error) {
        console.error('Error parsing favorite locations from localStorage:', error);
        favLocations = []; // Default to an empty array in case of error
      }
  
      // Ensure favLocations is an array
      if (!Array.isArray(favLocations)) {
        console.warn('FavouriteLocations is not an array:', favLocations);
        favLocations = []; // Default to an empty array if it's not an array
      }
  
      const weatherDataPromises = favLocations.map(async (location) => {
        try {
          // Here we use the fetchWeather directly and wait for its result
          const weatherData = await fetchWeather(location, () => {});
          // Assuming TempC is the weather data you want; adjust as necessary
          return { name: location, weather: weatherData?.TempC };
        } catch (error) {
          console.error('Error fetching weather for location:', location, error);
          return null; // Return null for failed requests
        }
      });
  
      const weatherDataArray = await Promise.all(weatherDataPromises);
      const validWeatherData = weatherDataArray.filter((data): data is FavouriteCard => data !== null);
      console.log('Valid weather data:', validWeatherData);
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

          <Favourites
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
