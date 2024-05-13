import { TextField } from "@mui/material";
import Autocomplete from "@mui/material/Autocomplete";
import { LocationType } from "../types";
import { Locations } from "../constants";
import { SyntheticEvent, useEffect, useState } from "react";
import { getAutocompleteData } from "../controllers/api";



export default function AC({ locSelected, onSelectedClick, className, onChangeTypedValue, citySearch }: {locSelected: string;
  onSelectedClick: (alignment: any) => void;
  onChangeTypedValue: (value: string) => void;
  className?: string; // used for tailwind
  citySearch: string[];}) {

  

 
  
  const Locations2 = ["London","New York"]

  const handleClick = (event: SyntheticEvent, newValue: string | null) => {
    onSelectedClick(newValue);
  };

  const handleChangeValue = (event: SyntheticEvent, newValue: string | null) => {
    onChangeTypedValue(newValue!);
  };




  return (
    <Autocomplete
      className={className}
      autoHighlight
      id="location-combo-box"
      options={citySearch.length > 0 ? citySearch : Locations2}
      renderInput={(params) => (
        <TextField {...params} sx={{ input: { height: "10%" } }} />
      )}
      onInputChange={handleChangeValue}
      onChange={handleClick}
    />
  );
}
