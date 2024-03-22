import React, { useEffect, useState } from "react";
// Import required MUI components
import FavCard from "./FavCard"; // Assuming this is a custom component for displaying a favorite location

const Favourites = ({
  currentLocationView,
  localStorageData,
  setLocalStorageData,
}: {
  currentLocationView: string;
  localStorageData: string | null;
  setLocalStorageData: (value: string | null) => void;
}) => {
  const [favourites, setFavourites] = useState<string[]>([]);

  useEffect(() => {
    const storedFavourites = JSON.parse(localStorageData || '[]');
    if (Array.isArray(storedFavourites)) {
      setFavourites(storedFavourites);
    } else {
      console.error('Stored favourites is not an array:', storedFavourites);
      // Handle this error case appropriately, maybe by setting an empty array
      setFavourites([]);
    }
  }, [localStorageData]);
  

  // Add a function to handle adding new favorites, updating both the state and localStorage
  const addFavorite = (location: string) => {
    const updatedFavourites = [...favourites, location];
    setFavourites(updatedFavourites);
    setLocalStorageData(JSON.stringify(updatedFavourites));
    localStorage.setItem('FavouriteLocations', JSON.stringify(updatedFavourites));
  };

  const removeFavorite = (locationToRemove: string) => {
    const updatedFavourites = favourites.filter(location => location !== locationToRemove);
    setFavourites(updatedFavourites);
    setLocalStorageData(JSON.stringify(updatedFavourites));
    localStorage.setItem('FavouriteLocations', JSON.stringify(updatedFavourites));
  };

 

  return (
    <div>
      
      {favourites.forEach((favLocation, index) => (
        <FavCard key={index} weatherC={favLocation} handleRemove={(e) => removeFavorite(favLocation)} />
      ))}
      <button onClick={() => addFavorite(currentLocationView)}>Add to Favorites</button>
    </div>
  );
};

export default Favourites;
