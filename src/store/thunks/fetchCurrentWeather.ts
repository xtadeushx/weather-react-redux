import { WeatherSErvice } from '../../services/WeatherService';
import { fetchCurrentWeatherSuccess, fetchCurrentWeather, fetchCurrentWeatherError } from '../slices/currentWeatherSlice';
import { AppDispatch } from '../store';

export const fetchCurrentWeatherApi = (payload: string) => async (dispatch: AppDispatch) => {
  dispatch(fetchCurrentWeather);
  try {
    const response = await WeatherSErvice.getCurrentWeather(payload);
    if(response.status === 200) {
    dispatch(fetchCurrentWeatherSuccess(response));
    }else{
        dispatch(fetchCurrentWeatherError(response));
    }
    
  } catch (error: any) {
    throw new Error(error.message);
  }
};
