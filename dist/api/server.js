"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_fetch_1 = __importDefault(require("node-fetch"));
const API_KEY = 'b471c1780bd24c85ad5190222232012';
exports.default = async (req, res) => {
    const requestUrl = req.url || '';
    const fullUrl = new URL(requestUrl, `http://${req.headers.host}`);
    const { pathname, searchParams } = fullUrl;
    const location = searchParams.get('location');
    console.log('Request location:', location);
    if (!location) {
        res.status(400).send('Location parameter is required');
        return;
    }
    try {
        if (pathname === '/api/weather') {
            const url = `https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${location}&aqi=no`;
            const response = await (0, node_fetch_1.default)(url);
            const data = await response.json();
            res.send(data);
        }
        else if (pathname === '/api/autocomplete') {
            const url = `https://api.weatherapi.com/v1/search.json?key=${API_KEY}&q=${location}&aqi=no`;
            const response = await (0, node_fetch_1.default)(url);
            const data = await response.json();
            res.send(data);
        }
        else {
            res.status(404).send('Not Found');
        }
    }
    catch (error) {
        console.error('Failed to fetch data:', error);
        res.status(500).send('Failed to fetch data');
    }
};
