export const handleAddLocation = ({ location }: { location: any }) => {
  //handling the adding
  const existingData = JSON.parse(
    localStorage.getItem("FavouriteLocations") || "{}"
  );

  const currentKeys = Object.keys(existingData);
  const nextKey =
    currentKeys.length === 0 ? 0 : Math.max(...currentKeys.map(Number)) + 1; //gets the next [key] value to append to end of localstorage array

  const newData = JSON.stringify({ ...existingData, [nextKey]: location });
  localStorage.setItem("FavouriteLocations", newData);

  // setLocalStorageData(newData);
};
