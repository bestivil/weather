import { WeatherType } from "../types";
import BasicCard from "./Card";

export default function PrimaryRow({
  weather,
  label,
  img,
  conditions,
  forecasts,
}: {
  weather?: number;
  label?: string;
  img?: string;
  conditions?: string;
  forecasts?: Array<WeatherType>;
}) {
  return (
    <>
      <div className="items-center flex flex-row justify-center m-2">
        <BasicCard
          weatherC={weather}
          label={label}
          conditions={conditions}
          time="Now"
          img={img || ""}
        />
        {forecasts?.map((forecast: any, index: number) => {
          return (
            <BasicCard
              weatherC={forecast.Temp}
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
