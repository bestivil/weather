export type LocationType = {
  locSelected: string;
  onSelectedClick: (alignment: any) => void;
};

export type WeatherType = {
  label?: string;
  Temp?: number;
  Conditions?: string;
  wind?: number;
  feelslike?: number;
  datetime?: string;
  currTempImg?: string;
  precipMM?: number;
  windDir?: string;
  visibilityKM?: number;
  feelsLikeC?: number;
  time?: string;
  nextForecast?: Array<WeatherType>;
};
