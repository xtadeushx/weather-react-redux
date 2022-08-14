import { createSlice } from '@reduxjs/toolkit';

type CurrentWeather = {
  weather: any;
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
    fetchCurrentWeatherSuccess(state:CurrentWeather, action:any){
        state.weather = action.payLoad;
        state.isLoading = false;
    },
  },
});
