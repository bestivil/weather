const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

const API_KEY = 'b471c1780bd24c85ad5190222232012';

// Route to handle API requests
app.get('/weather', async (req:any, res:any) => {
    const { location } = req.query; 
    const url = `https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${location}&aqi=no`;

    try {
        const response = await fetch(url);
        const data = await response.json();
        res.send(data);
    } catch (error) {
        console.error('Failed to fetch weather data:', error);
        res.status(500).send('Failed to fetch weather data');
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

export {};