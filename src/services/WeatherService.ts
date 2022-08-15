import axios, { AxiosResponse } from 'axios';
import api from '../axios';
import { Weather } from '../types/types';

// const URL = 'https://api.openweathermap.org/data/3.0/';
// const API_KEY = process.env.REACT_APP_API_KEY;

export class WeatherSErvice {
  static getCurrentWeather(city: string, lang:string = 'ua'):Promise<AxiosResponse<Weather>> {
    return api.get(`/weather?q=${city}&lang=${lang}`);
  }
}
