import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AxiosResponse } from 'axios';
import { Days } from '../../pges/Home/components/Days/Days';
import { Weather } from '../../types/types';

type CurrentWeather = {
  weather: Weather;
  isLoading: boolean;
  response: Response;
};

type Response = {
  status: number;
  message: string;
};

 const initialState: CurrentWeather = {
  weather: {
    main:{
      temp: 0,
      humidity: 0,
      pressure: 0,
      temp_max: 0,
      temp_min: 0,
      feels_like: 0,
    },
    wind:{
      deg: 90,
      speed: 0,
    },
    weather:[
        {
          icon: '',
          description: ''
        },
      ]
    
  },
  isLoading: false,
  response: {
    status: 0,
    message: '',
  },
};

export const currentWeatherSlice = createSlice({
  name: 'current_weather',
  initialState,
  reducers: {
    fetchCurrentWeather(state:CurrentWeather){
        state.isLoading = true;
    },
    fetchCurrentWeatherSuccess(state:CurrentWeather, action:PayloadAction<AxiosResponse<Weather>>){
        state.weather = action.payload.data;
        state.isLoading = false;
        state.response = {
            status: action.payload.status,
            message: action.payload.statusText
        }
    },
    fetchCurrentWeatherError(state:CurrentWeather, action:PayloadAction<AxiosResponse<Weather>>){
        state.isLoading = false;
        state.response = {
            status: action.payload.status,
            message: action.payload.statusText
        }
    },
  },
});


export const {fetchCurrentWeather,fetchCurrentWeatherSuccess, fetchCurrentWeatherError} = currentWeatherSlice.actions;

export default currentWeatherSlice.reducer;
