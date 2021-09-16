'use strict';

document.addEventListener('DOMContentLoaded', ready);

function ready() {
  const locationEl = document.querySelector('.location-timezone');
  const temperatureEl = document.querySelector('.temp-degree');
  const descriptionEl = document.querySelector('.temp-description');
  const imageEl = document.querySelector('.location img');

  let long, lat, api;
  // let currentWeather = 1;
  // console.log(long, lat);
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(position => {
      long = position.coords.longitude;
      lat = position.coords.latitude;
      // long = 37.6156;
      // lat = 55.7522;
      // console.log(long, lat);
      api = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&units=metric&appid=96b719f966cdc765beb365e43ed94d6f`;
      // console.log(api);
      //slow process, so we need to use fetch -> then
      fetch(api)
        .then(response => {
          return response.json();
        })
        .then(data => {
          const temperature = data.main.temp.toFixed(0);
          const description = data.weather[0].description;
          const location = data.name + ', ' + data.sys.country;
          const icon = data.weather[0].icon;
          // console.log(temperature, description, location, icon);

          locationEl.innerHTML = location;
          descriptionEl.innerHTML = description;
          temperatureEl.innerHTML = temperature + ' \u2103';
          imageEl.src = `https://openweathermap.org/img/wn/${icon}@2x.png`;
        });
    });
  } else {
    alert('Please, allow geolocation to use the site');
  }
  // console.log(currentWeather);
}

const currentWeather1 = {
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

const wByCoords = {
  coord: { lon: 36.4592, lat: 54.4444 },
  weather: [
    { id: 804, main: 'Clouds', description: 'overcast clouds', icon: '04d' },
  ],
  base: 'stations',
  main: {
    temp: 9.36,
    feels_like: 8.45,
    temp_min: 9.36,
    temp_max: 9.36,
    pressure: 1019,
    humidity: 76,
  },
  visibility: 10000,
  wind: { speed: 2, deg: 290 },
  clouds: { all: 90 },
  dt: 1631793424,
  sys: {
    type: 1,
    id: 9017,
    country: 'RU',
    sunrise: 1631761729,
    sunset: 1631807368,
  },
  timezone: 10800,
  id: 553915,
  name: 'Kaluga',
  cod: 200,
};

// https://api.openweathermap.org/data/2.5/weather?lat=54.4444336&lon=36.4592259&appid=96b719f966cdc765beb365e43ed94d6f
