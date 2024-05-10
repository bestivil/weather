import AC from "./AutoComplete";
import FavIcon from "./FavIcon";
import CFToggle from "./toggle";

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
      <div className=" flex flex-wrap items-center flex-row h-[10%] m-4 rounded-full bg-[#E6E6E6]">
        <div className="translate-x-[36px]">
          <AC locSelected={location} onSelectedClick={setLocation} />
        </div>
        <div className="translate-x-[48px]">
          <CFToggle isCelsius={isCelsius} newAlignment={setisCelsius} />
        </div>
        <FavIcon location={location} onSelectedClick={handleAddLocation} />
      </div>
    </>
  );
}
