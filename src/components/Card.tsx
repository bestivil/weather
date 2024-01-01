import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';



export default function BasicCard({ weather, label }:any) {

  return (
    <Card sx={{ margin: '10px', textAlign: 'center', maxWidth: '99%', backgroundColor: 'skyblue', opacity: '0.8', overflow: 'hidden', borderRadius: 8, boxShadow: '0 4px 6px rgba(0,0,0,0.1)'}}>
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