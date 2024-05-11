import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

const CFToggle = ({
  isCelsius,
  newAlignment,
  className,
}: {
  isCelsius: boolean;
  newAlignment: (newAlignment: boolean) => void;
  className?: string;
}) => {
  return (
    <ToggleButtonGroup
      color="primary"
      value={isCelsius}
      onChange={(event, nextAlignment) => newAlignment(nextAlignment)}
      exclusive
      sx={{ height: "10%" }}
      className={className}
    >
      <ToggleButton value={true}>Celsius</ToggleButton>
      <ToggleButton value={false}>Farenheit</ToggleButton>
    </ToggleButtonGroup>
  );
};

export default CFToggle;
