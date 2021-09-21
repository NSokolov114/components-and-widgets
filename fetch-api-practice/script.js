'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////
// const getCountryData = function (country) {
//   const request = new XMLHttpRequest();

//   request.open(
//     'GET',
//     `https://restcountries.eu/rest/v2/name/${country}?fullText=true`
//   );
//   request.send(); // sends request to the URL

//   request.addEventListener('load', function () {
//     const [data] = JSON.parse(this.responseText);
//     console.log(data);
//     const html = `
//     <article class="country">
//       <img class="country__img" src="${data.flag}" />
//       <div class="country__data">
//         <h3 class="country__name">${data.name}</h3>
//         <h4 class="country__region">${data.region}</h4>
//         <p class="country__row"><span>👫</span>${(
//           +data.population / 1000000
//         ).toFixed(1)} people</p>
//         <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
//         <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
//       </div>
//     </article>
//   `;
//     countriesContainer.insertAdjacentHTML('beforeend', html);
//     countriesContainer.style.opacity = 1;
//   });
// };

// getCountryData('ru');
// getCountryData('ca');
// getCountryData('us');

const renderCountry = function (data) {
  const html = `
    <article class="country">
      <img class="country__img" src="${data.flag}" />
      <div class="country__data">
        <h3 class="country__name">${data.name}</h3>
        <h4 class="country__region">${data.region}</h4>
        <p class="country__row"><span>👫</span>${(
          +data.population / 1000000
        ).toFixed(1)} people</p>
        <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
        <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
      </div>
    </article>
  `;
  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
};

// const getCountryAndNeighbour = function (country) {
//   // AJAX call country 1
//   const request = new XMLHttpRequest();
//   request.open(
//     'GET',
//     `https://restcountries.eu/rest/v2/name/${country}?fullText=true`
//   );
//   request.send();
//   request.addEventListener('load', function () {
//     const [data] = JSON.parse(this.responseText);
//     console.log(data);

//     // render country 11
//     renderCountry(data);

//     // get neighbour country 2
//     const [neighbour] = data.borders;
//     if (!neighbour) return;
//     const request2 = new XMLHttpRequest();
//     request2.open(
//       'GET',
//       `https://restcountries.eu/rest/v2/name/${
//         neighbour[0] + neighbour[1]
//       }?fullText=true`
//     );
//     request2.send();
//     request2.addEventListener('load', function () {
//       const [data2] = JSON.parse(this.responseText);
//       console.log(data2);
//       renderCountry(data2);
//     });
//   });
// };

// getCountryAndNeighbour('uk');

// const request = new XMLHttpRequest();

// request.open(
//   'GET',
//   `https://restcountries.eu/rest/v2/name/${country}?fullText=true`
// );
// request.send(); // sends request to the URL

// const request = fetch('https://restcountries.eu/rest/v2/name/ru?fullText=true');
// console.log(request);
// const getCountryData = function (country) {
//   fetch(`https://restcountries.eu/rest/v2/name/${country}?fullText=true`)
//     .then(function (response) {
//       console.log(response);
//       return response.json();
//     })
//     .then(function (data) {
//       console.log(data);
//       renderCountry(data[0]);
//     });
// };

// const getCountryData = function (country) {
//   fetch(`https://restcountries.eu/rest/v2/name/${country}?fullText=true`)
//     .then(response => {
//       console.log(response);
//       if (!response.ok) {
//         throw new Error(`Country not found (${response.status})`);
//       }
//       return response.json();
//     })
//     .then(data => {
//       renderCountry(data[0]);
//       // country 2
//       const neighbour = data[0].borders[0];
//       return fetch(`https://restcountries.eu/rest/v2/alpha/${neighbour}`);
//     })
//     .then(response => {
//       if (!response.ok) {
//         throw new Error(`Country not found (${response.status})`);
//       }
//       response.json();
//     })
//     .then(data => renderCountry(data))
//     .catch(err => console.error(err))
//     .finally(() => {
//       countriesContainer.style.opacity = 1;
//     });
// };

//////////////////////////////
// const getJSON = function (url, errorMsg = 'Something went wrong') {
//   return fetch(url).then(response => {
//     console.log(response);
//     if (!response.ok) {
//       throw new Error(`${errorMsg} (${response.status})`);
//     }
//     return response.json();
//   });
// };

// const getCountryData = function (country) {
//   getJSON(
//     `https://restcountries.eu/rest/v2/name/${country}?fullText=true`,
//     'Country not found'
//   )
//     .then(data => {
//       renderCountry(data[0]);
//       // country 2
//       const neighbour = data[0].borders[0];
//       if (!neighbour) throw new Error('No neighbours');
//       return getJSON(
//         `https://restcountries.eu/rest/v2/alpha/${neighbour}`,
//         'Country not found'
//       );
//     })
//     .then(data => renderCountry(data))
//     .catch(err => console.error(err))
//     .finally(() => {
//       countriesContainer.style.opacity = 1;
//     });
// };

// btn.addEventListener('click', function () {
//   getCountryData('us');
// });

// getCountryData('au');

///////////////////////////////////////
// Coding Challenge #1

// In this challenge you will build a function 'whereAmI' which renders a country ONLY based on GPS coordinates. For that, you will use a second API to geocode coordinates.

// Here are your tasks:

// PART 1
// 1. Create a function 'whereAmI' which takes as inputs a latitude value (lat) and a longitude value (lng) (these are GPS coordinates, examples are below).

// const getCountryData = function (country) {
//   fetch(`https://restcountries.eu/rest/v2/name/${country}?fullText=true`)
//     .then(response => {
//       console.log(response);
//       if (!response.ok) {
//         throw new Error(`Country not found (${response.status})`);
//       }
//       return response.json();
//     })
//     .then(data => {
//       renderCountry(data[0]);
//       // country 2
//       const neighbour = data[0].borders[0];
//       return fetch(`https://restcountries.eu/rest/v2/alpha/${neighbour}`);
//     })
//     .then(response => {
//       if (!response.ok) {
//         throw new Error(`Country not found (${response.status})`);
//       }
//       response.json();
//     })
//     .then(data => renderCountry(data))
//     .catch(err => console.error(err))
//     .finally(() => {
//       countriesContainer.style.opacity = 1;
//     });
// };
// let country;
// function getLocation(coords) {
//   fetch(
//     `https://nominatim.openstreetmap.org/reverse?lat=${coords[0]}&lon=${coords[1]}&format=json`
//   )
//     .then(response => response.json())
//     .then(data => {
//       console.log(`Your address is: ${data.display_name}`);
//       country = data.address.country_code;
//       getCountryData(country);
//     })
//     .catch(err => console.log(`There's some kind of error: ${err}`));
// }

function whereAmI(lat, lng) {
  const coords = [lat, lng];
  fetch(
    `https://nominatim.openstreetmap.org/reverse?lat=${coords[0]}&lon=${coords[1]}&format=json`
  )
    .then(response => {
      if (!response.ok)
        throw new Error(`Problem with geocoding ${response.status}`);
      return response.json();
    })
    .then(data => {
      console.log(`Your address is: ${data.display_name}`);
      return fetch(
        `https://restcountries.eu/rest/v2/name/${data.address.country_code}?fullText=true`
      );
    })
    .then(response => {
      if (!response.ok) {
        throw new Error(`Country not found (${response.status})`);
      }
      return response.json();
    })
    .then(data => {
      renderCountry(data[0]);
    })
    .catch(err => console.log(`There's some kind of error: ${err.message}`));
}

whereAmI(51, 0);
whereAmI(19, 73);
whereAmI(-33, 18);

// 2. Do 'reverse geocoding' of the provided coordinates. Reverse geocoding means to convert coordinates to a meaningful location, like a city and country name. Use this API to do reverse geocoding: https://geocode.xyz/api.
// The AJAX call will be done to a URL with this format: https://geocode.xyz/52.508,13.381?geoit=json. Use the fetch API and promises to get the data. Do NOT use the getJSON function we created, that is cheating 😉
// 3. Once you have the data, take a look at it in the console to see all the attributes that you recieved about the provided location. Then, using this data, log a messsage like this to the console: 'You are in Berlin, Germany'
// 4. Chain a .catch method to the end of the promise chain and log errors to the console
// 5. This API allows you to make only 3 requests per second. If you reload fast, you will get this error with code 403. This is an error with the request. Remember, fetch() does NOT reject the promise in this case. So create an error to reject the promise yourself, with a meaningful error message.

// PART 2
// 6. Now it's time to use the received data to render a country. So take the relevant attribute from the geocoding API result, and plug it into the countries API that we have been using.
// 7. Render the country and catch any errors, just like we have done in the last lecture (you can even copy this code, no need to type the same code)

// TEST COORDINATES 1: 52.508, 13.381 (Latitude, Longitude)
// TEST COORDINATES 2: 19.037, 72.873
// TEST COORDINATES 2: -33.933, 18.474

// GOOD LUCK 😀

const sample = {
  place_id: 134656441,
  licence:
    'Data © OpenStreetMap contributors, ODbL 1.0. https://osm.org/copyright',
  osm_type: 'way',
  osm_id: 181267193,
  lat: '54.43983945293409',
  lon: '36.45831273281098',
  display_name:
    'Ахлебинино, сельское поселение Село Ахлебинино, Peremyshlsky District, Kaluga Oblast, Central Federal District, 249812, Russia',
  address: {
    village: 'Ахлебинино',
    municipality: 'сельское поселение Село Ахлебинино',
    county: 'Peremyshlsky District',
    state: 'Kaluga Oblast',
    region: 'Central Federal District',
    postcode: '249812',
    country: 'Russia',
    country_code: 'ru',
  },
  boundingbox: ['54.4383009', '54.4428131', '36.4291136', '36.4660751'],
};
