import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

const CFToggle = ({
  isCelsius,
  newAlignment,
}: {
  isCelsius: boolean;
  newAlignment: (value: boolean) => void;
}) => {
  return (
    <ToggleButtonGroup
      color="primary"
      value={isCelsius}
      onChange={(event, nextAlignment) => newAlignment(nextAlignment)}
      exclusive
      sx={{ height: "10%" }}
    >
      <ToggleButton value={true}>Celsius</ToggleButton>
      <ToggleButton value={false}>Farenheit</ToggleButton>
    </ToggleButtonGroup>
  );
};

export default CFToggle;
