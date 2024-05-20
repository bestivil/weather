import AC from "./AutoComplete";
import FavIcon from "./FavIcon";
import CFToggle from "./toggle";
import { useEffect, useState } from "react";
import { getAutocompleteData } from "../controllers/api";

export default function NavBar({
  location,
  setLocation,
  isCelsius,
  setisCelsius,
  localStorageData,
  setLocalStorageData,
  setisConnected,
  autocompleteData,
  setAutocompleteData,
}: {
  location: string;
  setLocation: (value: string) => void;
  isCelsius: boolean;
  setisCelsius: (value: boolean) => void;
  localStorageData: string | null;
  setLocalStorageData: (value: string) => void;
  setisConnected: (value: boolean) => void;
  autocompleteData: string;
  setAutocompleteData: (value: string) => void;
}) {
  const [citySearchArray, setCitySearchArray] = useState<string[]>([]);

  const handleAddLocation = () => {
    //handling the adding
    const existingData = JSON.parse(localStorageData || "{}");

    const currentKeys = Object.keys(existingData);
    const nextKey =
      currentKeys.length === 0 ? 0 : Math.max(...currentKeys.map(Number)) + 1; //gets the next [key] value to append to end of localstorage array

    const newData = JSON.stringify({ ...existingData, [nextKey]: location });
    localStorage.setItem("FavouriteLocations", newData);

    setLocalStorageData(newData);
  };
  useEffect(() => {
    const getACInputs = async () => {
      const weatherDataAC = await getAutocompleteData(
        autocompleteData,
        setAutocompleteData
      );
      if (weatherDataAC) {
        setCitySearchArray(weatherDataAC);
      } else {
        setisConnected(false);
      }
    };
    getACInputs();
  }, [autocompleteData]);

  return (
    <>
      <div className="w-full flex items-center rounded-full bg-[#E6E6E6] p-2 pr-6 md:pr-10 m-4 relative">
        <div className="flex-grow flex justify-center space-x-4">
          <div className="">
            <AC
              className="w-[175px] sm:w-[250px] md:w-[250px] lg:w-[500px]"
              locSelected={location}
              onSelectedClick={setLocation}
              onChangeTypedValue={setAutocompleteData}
              citySearch={citySearchArray}
            />
          </div>
          <div className="hidden md:block">
            <CFToggle
              isCelsius={isCelsius}
              newAlignment={setisCelsius}
              className="hidden sm:block"
            />
          </div>
        </div>
        <FavIcon location={location} onSelectedClick={handleAddLocation} />
      </div>
    </>
  );
}
