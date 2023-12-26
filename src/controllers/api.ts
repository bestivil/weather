import { WeatherType } from "../types";



const fetchWeather = async (location: string, setWeatherInstance: (weather:WeatherType) => void) => {
    try {
        const response = await fetch('http://api.weatherapi.com/v1/current.json?key=b471c1780bd24c85ad5190222232012&q=' + location + '&aqi=no');
        const json = await response.json();
        
        const weatherData: WeatherType = {
            temperature: json.current.temp_c,
            condition: json.current.condition.text
        };
        

        setWeatherInstance(weatherData);
        return weatherData;

    } catch (error) {
        console.error("Error fetching weather data:", error);
    }

};

export default fetchWeather;
