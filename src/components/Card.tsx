import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

export default function BasicCard({
  weather,
  label,
  img,
  conditions,
}: {
  weather?: any; // TODO: strongly type after testing
  label: string;
  img?: string;
  conditions?: string;
}) {
  return (
    <>
      <Card
        sx={{
          margin: "10px",
          textAlign: "center",
          maxWidth: "99%",
          backgroundColor: "#E6E6E6",
          overflow: "hidden",
          borderRadius: 8,
          boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
          marginTop: "10px",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(700px, 1fr))",
          gap: "10px",
        }}
      >
        <CardContent>
          <Typography
            sx={{ fontSize: 14, textAlign: "left" }}
            color="text.secondary"
            gutterBottom
          ></Typography>
          <Typography variant="h5" component="div"></Typography>
          <img src={img} alt={label}></img>
          <Typography
            sx={{ mb: 1.5 }}
            {...(label === "Current Temperature"
              ? {
                  fontSize: 29,
                  textAlign: "left",
                  marginLeft: 8,
                  fontWeight: "bold",
                }
              : { fontSize: 14 })}
            color="text.secondary"
          >
            {weather}
            {conditions}
          </Typography>
        </CardContent>
        <CardActions></CardActions>
      </Card>
    </>
  );
}
