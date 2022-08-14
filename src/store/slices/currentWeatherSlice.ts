import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AxiosResponse } from 'axios';
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
  weather: {},
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
        state.weather = action.payload;
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


export const {fetchCurrentWeather,fetchCurrentWeatherSuccess, fetchCurrentWeatherError} = currentWeatherSlice.actions
