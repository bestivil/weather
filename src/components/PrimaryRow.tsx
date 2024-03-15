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
    <>
      <div className="items-center flex flex-row justify-center m-2">
        <BasicCard
          weatherC={isCelsius ? weather?.TempC : weather?.TempF}
          label={label}
          conditions={weather?.Conditions}
          time="Now"
          img={`http://${weather?.currTempImg?.slice(2) || ""}`}
        />
        {forecasts?.map((forecast: any, index: number) => {
          return (
            <BasicCard
              weatherC={isCelsius ? forecast.TempC : forecast.TempF}
              label={label}
              img={`http://${forecast.currTempImg?.slice(2) || ""}`}
              conditions={forecast.Conditions}
              time={forecast.time}
              key={index}
            />
          );
        })}
      </div>
    </>
  );
}
