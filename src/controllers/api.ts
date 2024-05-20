// controllers/api.ts
import { WeatherType } from "../types";
import getNextThreeHours from "./Next3Hours";

const NEXT_PUBLIC_API_BASE_URL = 'http://localhost:3000';

const getApiBaseUrl = () => {
  if (typeof window !== 'undefined') {
    return process.env.NEXT_PUBLIC_API_BASE_URL || '';
  } else {
    return `https://${process.env.VERCEL_URL}` || process.env.NEXT_PUBLIC_API_BASE_URL;
  }
};

const fetchWeather = async (
  location: string,
  setWeatherInstance: (weather: WeatherType) => void
) => {
  location = location || "London";
  try {
    const response = await fetch(
      `${getApiBaseUrl()}/api/weather?location=${location}`
    );
    const json = await response.json();

    const weatherData: WeatherType = {
      TempC: json.current.temp_c,
      TempF: json.current.temp_f,
      currTempImg: json.current.condition.icon,
      Conditions: json.current.condition.text,
      wind: json.current.wind_mph,
      feelslikeF: json.current.feelslike_f,
      datetime: json.location.localtime,
      rainfall: json.current.precip_mm,
      windDir: json.current.wind_dir,
      visibility: json.current.vis_km,
      feelsLikeC: json.current.feelslike_c,
      time: json.current.last_updated,
    };

    const next3Hours = getNextThreeHours(weatherData.time?.toString()!);

    const firstHour = json.forecast.forecastday[0].hour[next3Hours[0]];
    const secondHour = json.forecast.forecastday[0].hour[next3Hours[1]];
    const thirdHour = json.forecast.forecastday[0].hour[next3Hours[2]];

    const weatherDataNext1Hr: WeatherType = {
      TempC: firstHour.temp_c,
      TempF: firstHour.temp_f,
      currTempImg: firstHour.condition.icon,
      Conditions: firstHour.condition.text,
      time: next3Hours[0],
    };

    const weatherDataNext2Hr: WeatherType = {
      TempC: secondHour.temp_c,
      TempF: secondHour.temp_f,
      currTempImg: secondHour.condition.icon,
      Conditions: secondHour.condition.text,
      time: next3Hours[1],
    };

    const weatherDataNext3Hr: WeatherType = {
      TempC: thirdHour.temp_c,
      TempF: thirdHour.temp_f,
      currTempImg: thirdHour.condition.icon,
      Conditions: thirdHour.condition.text,
      time: next3Hours[2],
    };

    weatherData.nextForecast = [
      weatherDataNext1Hr,
      weatherDataNext2Hr,
      weatherDataNext3Hr,
    ];

    setWeatherInstance(weatherData);

    return weatherData;
  } catch (error) {
    console.error("Error fetching weather data:", error);
  }
};

export default fetchWeather;

// Function to fetch autocomplete data from the server
export const getAutocompleteData = async (
  location: string | null,
  setWeatherData2: (weather: string) => void
) => {
  try {
    const response = await fetch(
      `${getApiBaseUrl()}/api/autocomplete?location=${location}`
    );
    const json = await response.json();

    return json.map((item: any) => item.name);
  } catch (error) {
    console.error("Error fetching autocomplete data:", error);
  }
};
