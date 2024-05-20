import { VercelRequest, VercelResponse } from '@vercel/node';
import fetch from 'node-fetch';

const API_KEY = 'b471c1780bd24c85ad5190222232012';

export default async (req: VercelRequest, res: VercelResponse) => {
  const requestURL = req.url || '';
  const { pathname, searchParams } = new URL(requestURL, `http://${req.headers.host}`);
  const location = searchParams.get('location');

  if (!location) {
    res.status(400).send('Location parameter is required');
    return;
  }

  try {
    if (pathname === '/api/weather') {
      const url = `https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${location}&aqi=no`;
      const response = await fetch(url);
      const data = await response.json();
      res.send(data);
    } else if (pathname === '/api/autocomplete') {
      const url = `https://api.weatherapi.com/v1/search.json?key=${API_KEY}&q=${location}&aqi=no`;
      const response = await fetch(url);
      const data = await response.json();
      res.send(data);
    } else {
      res.status(404).send('Not Found');
    }
  } catch (error) {
    console.error('Failed to fetch data:', error);
    res.status(500).send('Failed to fetch data');
  }
};
