export type LocationType = {
  locSelected: string;
  onSelectedClick: (alignment: any) => void;
  onChangeTypedValue: (value: string) => void;
  className?: string;
  citySearch: string[];
};

export type WeatherType = {
  label?: string;
  TempC: number;
  TempF: number;
  Conditions?: string;
  wind?: number;
  feelslikeF?: number;
  datetime?: string;
  currTempImg?: string;
  rainfall?: number;
  windDir?: string;
  visibility?: number;
  feelsLikeC?: number;
  time?: string;
  nextForecast?: Array<WeatherType>;
};
