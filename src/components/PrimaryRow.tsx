import { WeatherType } from "../types";
import BasicCard from "./Card";

export default function PrimaryRow({
  weather,
  label,
  forecasts,
  isCelsius,
}: {
  weather?: WeatherType;
  label?: string;
  forecasts?: Array<WeatherType>;
  isCelsius: boolean;
}) {
  return (
      <div className="flex flex-wrap justify-center gap-4 m-3">
        <div className="w-full sm:w-1/3 md:w-1/3 xl:w-1/6 flex-grow flex">
        <BasicCard
          weatherC={isCelsius ? weather?.TempC : weather?.TempF}
          label={label}
          conditions={weather?.Conditions}
          time="Now"
          img={`http://${weather?.currTempImg?.slice(2) || ""}`}
          className="max-w-full"
        />
        </div>
        
        {forecasts?.map((forecast: any, index: number) => (
        <div className="w-full sm:w-1/3 md:w-1/3 xl:w-1/6 flex-grow flex" key={index}>
          <BasicCard
            weatherC={isCelsius ? forecast.TempC : forecast.TempF}
            label={label}
            img={`http://${forecast.currTempImg?.slice(2) || ""}`}
            conditions={forecast.Conditions}
            time={forecast.time}
            className="max-w-full"
          />
        </div>
      ))}
    </div>
  );
}
