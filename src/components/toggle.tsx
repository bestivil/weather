import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

const CFToggle = ({
  alignment,
  newAlignment,
}: {
  alignment: string;
  newAlignment: (value: string) => void;
}) => {
  return (
    <ToggleButtonGroup
      color="primary"
      value={alignment}
      onChange={(event, nextAlignment) => newAlignment(nextAlignment as string)}
      exclusive
    >
      <ToggleButton value="celsius">Celsius</ToggleButton>
      <ToggleButton value="farenheit">Farenheit</ToggleButton>
    </ToggleButtonGroup>
  );
};

export default CFToggle;
