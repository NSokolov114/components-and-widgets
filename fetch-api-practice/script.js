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
  // countriesContainer.style.opacity = 1;
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
function getLocation(coords) {
  fetch(`https://geocode.xyz/${coords[0]},${coords[1]}?geoit=json`)
    .then(response => response.json())
    .then(data => console.log(`${data.city}, ${data.country}`));
}

function whereAmI(lat, lng) {
  const coords = [lat, lng];
  getLocation(coords);
}

whereAmI(51, -0.1);
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

const test = {
  statename: {},
  distance: '0.000',
  elevation: '20',
  osmtags: {
    wikipedia: 'en:City of Westminster',
    wikidata: 'Q179351',
    website: 'https://www.westminster.gov.uk/',
    name: 'City of Westminster',
    ISO3166_2: 'GB-WSM',
    ref_gss: 'E09000033',
    ons_code: '00BK',
    admin_level: '8',
    designation: 'inner_london_borough',
    boundary: 'administrative',
    council_name: 'Westminster City Council',
    type: 'boundary',
    source_ons_code: 'OS_OpenData_CodePoint Codelist.txt',
  },
  state: 'UK',
  latt: '51.50354',
  city: 'LONDON',
  prov: 'UK',
  intersection: {
    distance: '0.075',
    xlat: '51.50287',
    xlon: '-0.127725',
    street2: 'Downing Street',
    street1: 'KING CHARLES STREET',
  },
  geocode: 'LONDON-MCRXA',
  geonumber: '3154700960970',
  country: 'United Kingdom',
  stnumber: '1',
  staddress: 'DOWNING STREET',
  inlatt: '51.50354',
  alt: {
    loc: {
      staddress: 'DOWNING STREET',
      stnumber: '1',
      postal: 'SW1A2AA',
      latt: '51.50354',
      city: 'LONDON',
      prov: 'UK',
      longt: '-0.12768',
      class: {},
    },
  },
  timezone: 'Europe/London',
  region: 'Greater London, England',
  postal: 'SW1A2AA',
  poi: {
    website: 'http://www.westminster-abbey.org',
    name_lt: 'Vestminsterio vienuolynas',
    toilets_wheelchair: 'yes',
    poilon: '-0.12752',
    name_uk: 'Вестмінстерське абатство',
    whc_criteria: 'i,ii,iv',
    heritage_operator: 'whc',
    id: '364313092',
    name_en: 'Westminster Abbey',
    name_cs: 'Westminsterské opatství',
    name_he: 'מנזר וסטמינסטר',
    name: 'Westminster Abbey',
    denomination: 'anglican',
    addr_postcode: 'SW1P 3PA',
    name_gl: 'Abadía de Westminster',
    layer: '1',
    addr_housenumber: '20',
    addr_city: 'London',
    building: 'yes',
    name_hi: 'वेस्ट्मिन्स्टर ऍबी',
    wikimedia_commons: 'Category:Westminster_Abbey',
    name_fr: 'Abbaye de Westminster',
    wikipedia: 'en:Westminster Abbey',
    name_ja: 'ウエストミンスター大寺院',
    name_zh: '威斯敏斯特修道院（西敏寺）',
    heritage: '1',
    name_be: 'Вэстмінстэрскае абацтва',
    name_ru: 'Вестминстерское аббатство',
    ref_whc: '426',
    wikidata: 'Q5933',
    poilat: '51.49943',
    tourism: 'attraction',
    religion: 'christian',
    opening_hours: 'Mo-Sa 09:30-16:00',
    wheelchair: 'yes',
    addr_housename: 'Westminster Abbey',
    name_es: 'Abadía de Westminster.',
    name_af: 'Westminster Abbey',
    building_colour: '#dacaa8',
    addr_street: "Dean's Yard",
    note: 'heights estimated',
    amenity: 'place_of_worship',
    name_pl: 'Opactwo Westminsterskie',
    poidist: '0.457',
    name_cy: 'Abaty San Steffan',
  },
  longt: '-0.12768',
  remaining_credits: {},
  confidence: '1',
  inlongt: '-0.12768',
  class: {},
  adminareas: {
    admin6: {
      name_be_tarask: 'Лёндан',
      name_lt: 'Londonas',
      name_uk: 'Лондон',
      boundary: 'administrative',
      is_in_iso_3166_2: 'GB-ENG',
      name_en: 'London',
      name_el: 'Λονδίνο',
      int_name: 'London',
      name_fi: 'Lontoo',
      name: 'London',
      name_gl: 'Londres',
      level: '6',
      type: 'boundary',
      name_nl: 'Londen',
      name_hi: 'लंदन',
      name_fr: 'Londres',
      wikipedia: 'en:London',
      name_pt: 'Londres',
      name_zh: '伦敦',
      place: 'city',
      name_be: 'Лондан',
      name_ru: 'Лондон',
      name_tzl: 'Londra',
      name_vi: 'Luân Đôn',
      name_fy: 'Londen',
      wikidata: 'Q84',
      name_fa: 'لندن',
      name_es: 'Londres',
      name_ca: 'Londres',
      admin_level: '6',
      name_szl: 'Lůndůn',
      note: "This relation is for the 'county' of Greater London, which excludes the City of London",
      name_pl: 'Londyn',
      name_eo: 'Londono',
    },
    admin8: {
      wikipedia: 'en:City of Westminster',
      wikidata: 'Q179351',
      website: 'https://www.westminster.gov.uk/',
      name: 'City of Westminster',
      ISO3166_2: 'GB-WSM',
      ref_gss: 'E09000033',
      ons_code: '00BK',
      admin_level: '8',
      designation: 'inner_london_borough',
      level: '8',
      boundary: 'administrative',
      council_name: 'Westminster City Council',
      type: 'boundary',
      source_ons_code: 'OS_OpenData_CodePoint Codelist.txt',
    },
    admin5: {
      wikipedia: 'en:Greater London',
      name_de: 'Groß-London',
      name_be_tarask: 'Вялікі Лёндан',
      name_ru: 'Большой Лондон',
      name_be: 'Вялікі Лондан',
      name_lt: 'Didysis Londonas',
      name_uk: 'Великий Лондон',
      boundary: 'administrative',
      name_en: 'Greater London',
      wikidata: 'Q23306',
      ref_nuts_1: 'UKI',
      name: 'Greater London',
      official_name: 'Greater London (incl. City of London)',
      admin_level: '5',
      note: 'This region relation includes the City of London',
      level: '5',
      type: 'boundary',
      name_fr: 'Grand Londres',
    },
  },
  altgeocode: 'SYNERGY-MCRXA',
};
