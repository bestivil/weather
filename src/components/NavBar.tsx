import AC from "./AutoComplete";
import FavIcon from "./FavIcon";
import CFToggle from "./toggle";
import { slide as Menu } from 'react-burger-menu'
import { styles } from '../helpers/burger-icon-styles'

export default function NavBar({
  location,
  setLocation,
  isCelsius,
  setisCelsius,
  localStorageData,
  setLocalStorageData,
}: {
  location: string;
  setLocation: (value: string) => void;
  isCelsius: boolean;
  setisCelsius: (value: boolean) => void;
  localStorageData: string | null;
  setLocalStorageData: (value: string) => void;
}) {
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
  return (
    <>
      
      <div className="w-full flex items-center justify-between rounded-full bg-[#E6E6E6] p-2 pr-6 md:pr-10 m-4 relative">
        
        <div className="flex-grow flex items-center justify-center space-x-4">
          <div className="">
          <AC className="w-[250px]" locSelected={location} onSelectedClick={setLocation} />
          </div>
          <div className="hidden md:block">
          <CFToggle isCelsius={isCelsius} newAlignment={setisCelsius} className="hidden sm:block" />
          </div>
        </div>
        <FavIcon location={location} onSelectedClick={handleAddLocation} />
      </div>
      
    </>
  );
}
