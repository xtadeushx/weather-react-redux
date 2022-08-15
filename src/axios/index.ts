import axios from 'axios';

const APP_API_URL = 'https://api.openweathermap.org/data/2.5';
const APP_API_KEY = '50fad5b58b8cccf380bdb22d2d14584d';

const api = axios.create({
  baseURL: APP_API_URL,
});

api.interceptors.request.use(config => {
  config.url =
    config.url + '&units=metric' + '&appid=' + APP_API_KEY;
  return config;
});

export default api;