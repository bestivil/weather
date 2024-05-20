var __awaiter =
  (this && this.__awaiter) ||
  function (thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P
        ? value
        : new P(function (resolve) {
            resolve(value);
          });
    }
    return new (P || (P = Promise))(function (resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }
      function rejected(value) {
        try {
          step(generator["throw"](value));
        } catch (e) {
          reject(e);
        }
      }
      function step(result) {
        result.done
          ? resolve(result.value)
          : adopt(result.value).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  };
import express from "express";
import cors from "cors";
import fetch from "node-fetch";
const app = express();
app.use(cors());
const API_KEY = "b471c1780bd24c85ad5190222232012";
app.get("/weather", (req, res) =>
  __awaiter(void 0, void 0, void 0, function* () {
    const { location } = req.query;
    if (!location) {
      res.status(400).send("Location parameter is required");
      return;
    }
    console.log(location);
    const url = `https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${location}&aqi=no`;
    try {
      const response = yield fetch(url);
      const data = yield response.json();
      res.send(data);
    } catch (error) {
      console.error("Failed to fetch weather data:", error);
      res.status(500).send("Failed to fetch weather data");
    }
  })
);
app.get("/autocomplete", (req, res) =>
  __awaiter(void 0, void 0, void 0, function* () {
    const { location } = req.query;
    if (!location) {
      res.status(400).send("Location parameter is required");
      return;
    }
    const url = `https://api.weatherapi.com/v1/search.json?key=${API_KEY}&q=${location}&aqi=no`;
    try {
      const response = yield fetch(url);
      const data = yield response.json();
      res.send(data);
    } catch (error) {
      console.error("Failed to fetch autocomplete data:", error);
      res.status(500).send("Failed to fetch autocomplete data");
    }
  })
);
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
