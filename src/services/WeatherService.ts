import axios, { AxiosResponse } from 'axios';
import { Weather } from '../types/types';

const URL = 'https://api.openweathermap.org/data/3.0/';
const API_KEY = process.env.REACT_APP_API_KEY;

export class WeatherSErvice {
  static getCurrentWeather(city: string):Promise<AxiosResponse<Weather>> {
    return axios.get(`${URL}weather?q=${city}&appid=${API_KEY}`);
  }
}
