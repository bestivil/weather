export type LocationType = {
	locSelected: string;
	onSelectedClick: (alignment: any) => void; };


export type WeatherType = {
	label?: string;
	Temperature?: number;
	Conditions?: string;
	["Wind Speed"]?: number;
	["Feels Like"]?: number;

};
