const SANTIAGO_DATA = {
  coord: { lon: 145.77, lat: -16.92 },
  weather: [
    { id: 802, main: 'Clouds', description: 'scattered clouds', icon: '03n' },
  ],
  base: 'stations',
  main: {
    temp: 300.15,
    pressure: 1007,
    humidity: 74,
    temp_min: 300.15,
    temp_max: 300.15,
  },
  visibility: 10000,
  wind: { speed: 3.6, deg: 160 },
  clouds: { all: 40 },
  dt: 1485790200,
  sys: {
    type: 1,
    id: 8166,
    message: 0.2064,
    country: 'CL',
    sunrise: 1485720272,
    sunset: 1485766550,
  },
  id: 3871336,
  name: 'Santiago',
  cod: 200,
};

const BUENOS_AIRES_DATA = {
  coord: { lon: 145.77, lat: -16.92 },
  weather: [
    { id: 802, main: 'Clouds', description: 'scattered clouds', icon: '03n' },
  ],
  base: 'stations',
  main: {
    temp: 300.15,
    pressure: 1007,
    humidity: 74,
    temp_min: 300.15,
    temp_max: 300.15,
  },
  visibility: 10000,
  wind: { speed: 3.6, deg: 160 },
  clouds: { all: 40 },
  dt: 1485790200,
  sys: {
    type: 1,
    id: 8166,
    message: 0.2064,
    country: 'AR',
    sunrise: 1485720272,
    sunset: 1485766550,
  },
  id: 3433955,
  name: 'Buenos Aires',
  cod: 200,
};

const LIMA_DATA = {
  coord: { lon: 145.77, lat: -16.92 },
  weather: [
    { id: 802, main: 'Clouds', description: 'scattered clouds', icon: '03n' },
  ],
  base: 'stations',
  main: {
    temp: 300.15,
    pressure: 1007,
    humidity: 74,
    temp_min: 300.15,
    temp_max: 300.15,
  },
  visibility: 10000,
  wind: { speed: 3.6, deg: 160 },
  clouds: { all: 40 },
  dt: 1485790200,
  sys: {
    type: 1,
    id: 8166,
    message: 0.2064,
    country: 'LI',
    sunrise: 1485720272,
    sunset: 1485766550,
  },
  id: 3936456,
  name: 'Lima',
  cod: 200,
};

const SAO_PAULO_DATA = {
  coord: { lon: 145.77, lat: -16.92 },
  weather: [
    { id: 802, main: 'Clouds', description: 'scattered clouds', icon: '03n' },
  ],
  base: 'stations',
  main: {
    temp: 300.15,
    pressure: 1007,
    humidity: 74,
    temp_min: 300.15,
    temp_max: 300.15,
  },
  visibility: 10000,
  wind: { speed: 3.6, deg: 160 },
  clouds: { all: 40 },
  dt: 1485790200,
  sys: {
    type: 1,
    id: 8166,
    message: 0.2064,
    country: 'BR',
    sunrise: 1485720272,
    sunset: 1485766550,
  },
  id: 3448439,
  name: 'São Paulo',
  cod: 200,
};

export const CITIES_DATA = [
  SANTIAGO_DATA,
  BUENOS_AIRES_DATA,
  LIMA_DATA,
  SAO_PAULO_DATA,
];
