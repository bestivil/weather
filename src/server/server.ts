import express, { Request, Response } from 'express';
import cors from 'cors';
import fetch from 'node-fetch';

const app = express();
app.use(cors());

const API_KEY = 'b471c1780bd24c85ad5190222232012';

app.get('/weather', async (req: Request, res: Response) => {
    const { location } = req.query;
    console.log("WORKING");

    if (!location) {
        res.status(400).send('Location parameter is required');
        return;
    }
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

app.get('/autocomplete', async (req: Request, res: Response) => {
    const { location } = req.query;

    if (!location) {
        res.status(400).send('Location parameter is required');
        return;
    }

    const url = `https://api.weatherapi.com/v1/search.json?key=${API_KEY}&q=${location}&aqi=no`;

    try {
        const response = await fetch(url);
        const data = await response.json();
        res.send(data);
    } catch (error) {
        console.error('Failed to fetch autocomplete data:', error);
        res.status(500).send('Failed to fetch autocomplete data');
    }
});

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});