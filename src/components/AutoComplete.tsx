import { TextField } from "@mui/material";
import Autocomplete from "@mui/material/Autocomplete";
import { LocationType } from "../types";
import { Locations } from "../constants";
import { SyntheticEvent } from "react";

export default function AC({ locSelected, onSelectedClick }: LocationType) {
  const handleClick = (event: SyntheticEvent, newValue: string | null) => {
    onSelectedClick(newValue);
  };

  return (
    <Autocomplete
      autoHighlight
      id="location-combo-box"
      options={Locations}
      sx={{ width: 300 }}
      value={locSelected}
      renderInput={(params) => (
        <TextField {...params} sx={{ input: { height: "10%" } }} />
      )}
      onChange={handleClick}
    />
  );
}
