'use strict';

document.addEventListener('DOMContentLoaded', ready);

function ready() {}

const currentWeather = {
  coord: { lon: 37.6156, lat: 55.7522 },
  weather: [
    { id: 804, main: 'Clouds', description: 'overcast clouds', icon: '04d' },
  ],
  base: 'stations',
  main: {
    temp: 282.67,
    feels_like: 280.99,
    temp_min: 282.28,
    temp_max: 283.44,
    pressure: 1020,
    humidity: 70,
    sea_level: 1020,
    grnd_level: 1001,
  },
  visibility: 10000,
  wind: { speed: 3.16, deg: 325, gust: 3.97 },
  clouds: { all: 100 },
  dt: 1631789944,
  sys: {
    type: 1,
    id: 9027,
    country: 'RU',
    sunrise: 1631761396,
    sunset: 1631807146,
  },
  timezone: 10800,
  id: 524901,
  name: 'Moscow',
  cod: 200,
};

const currentWeatherMetric = {
  coord: { lon: 37.6156, lat: 55.7522 },
  weather: [{ id: 500, main: 'Rain', description: 'light rain', icon: '10d' }],
  base: 'stations',
  main: {
    temp: 9.52,
    feels_like: 7.84,
    temp_min: 9.13,
    temp_max: 10.29,
    pressure: 1020,
    humidity: 70,
    sea_level: 1020,
    grnd_level: 1001,
  },
  visibility: 10000,
  wind: { speed: 3.16, deg: 325, gust: 3.97 },
  rain: { '1h': 0.13 },
  clouds: { all: 100 },
  dt: 1631790157,
  sys: {
    type: 1,
    id: 9027,
    country: 'RU',
    sunrise: 1631761396,
    sunset: 1631807146,
  },
  timezone: 10800,
  id: 524901,
  name: 'Moscow',
  cod: 200,
};
