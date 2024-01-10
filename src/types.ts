export type LocationType = {
  locSelected: string;
  onSelectedClick: (alignment: any) => void;
};

export type WeatherType = {
  label?: string;
  Temp?: number;
  Conditions?: string;
  ["Wind Speed"]?: number;
  ["Feels Like"]?: number;
  datetime?: string;
  currTempImg: string;
};
