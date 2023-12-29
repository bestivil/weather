import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';



export default function BasicCard({ weather, label }:any) {
  return (
    <Card sx={{ margin: '10px', textAlign: 'center', maxWidth: '95%', backgroundColor: "skyblue" }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {label}
        </Typography>
        <Typography variant="h5" component="div">
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
            {weather}
        </Typography>
      </CardContent>
      <CardActions>
      </CardActions>
    </Card>
  );
}