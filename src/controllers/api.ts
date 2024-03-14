import { WeatherType } from "../types";
import getNextThreeHours from "./Next3Hours";

const fetchWeather = async (
  location: string,
  setWeatherInstance: (weather: WeatherType) => void
) => {
  try {
    const response = await fetch(
      "http://api.weatherapi.com/v1/d=forecast.json?key=b471c1780bd24c85ad5190222232012&q=" +
        location +
        "&aqi=no"
    );
    const json = await response.json();

    const weatherData: WeatherType = {
      Temp: json.current.temp_c,
      currTempImg: json.current.condition.icon,
      Conditions: json.current.condition.text,
      wind: json.current.wind_mph,
      feelslike: json.current.feelslike_c,
      datetime: json.location.localtime,
      precipMM: json.current.precip_mm,
      windDir: json.current.wind_dir,
      visibilityKM: json.current.vis_km,
      feelsLikeC: json.current.feelslike_c,
      time: json.current.last_updated,
    };

    const next3Hours = getNextThreeHours(weatherData.time?.toString()!);

    const firstHour = json.forecast.forecastday[0].hour[next3Hours[0]];
    const secondHour = json.forecast.forecastday[0].hour[next3Hours[1]];
    const thirdHour = json.forecast.forecastday[0].hour[next3Hours[2]];

    const weatherDataNext1Hr: WeatherType = {
      Temp: firstHour.temp_c,
      currTempImg: firstHour.condition.icon,
      Conditions: firstHour.condition.text,
      wind: firstHour.wind_mph,
      feelslike: firstHour.feelslike_c,
      datetime: firstHour.localtime,
      precipMM: firstHour.precip_mm,
      windDir: firstHour.wind_dir,
      visibilityKM: firstHour.vis_km,
      feelsLikeC: firstHour.feelslike_c,
      time: next3Hours[0],
    };

    const weatherDataNext2Hr: WeatherType = {
      Temp: secondHour.temp_c,
      currTempImg: secondHour.condition.icon,
      Conditions: secondHour.condition.text,
      wind: secondHour.wind_mph,
      feelslike: secondHour.feelslike_c,
      datetime: secondHour.localtime,
      precipMM: secondHour.precip_mm,
      windDir: secondHour.wind_dir,
      visibilityKM: secondHour.vis_km,
      feelsLikeC: secondHour.feelslike_c,
      time: next3Hours[1],
    };

    const weatherDataNext3Hr: WeatherType = {
      Temp: thirdHour.temp_c,
      currTempImg: thirdHour.condition.icon,
      Conditions: thirdHour.condition.text,
      wind: thirdHour.wind_mph,
      feelslike: thirdHour.feelslike_c,
      datetime: thirdHour.localtime,
      precipMM: thirdHour.precip_mm,
      windDir: thirdHour.wind_dir,
      visibilityKM: thirdHour.vis_km,
      feelsLikeC: thirdHour.feelslike_c,
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
