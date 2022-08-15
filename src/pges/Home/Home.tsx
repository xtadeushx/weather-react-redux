import React, { useEffect } from 'react';
import { days, items } from '../../data';
import { useCustomDispatch, useCustomSelector } from '../../hooks/storeHooks';
import Popup from '../../shared/Popup/Popup';
import { fetchCurrentWeatherApi } from '../../store/thunks/fetchCurrentWeather';
import { Days } from './components/Days/Days';
import { Tabs } from './components/Days/Tabs';
import { ThisDay } from './components/ThisDay/ThisDay';
import { TThisDayInfo } from './components/ThisDayInfo/ThisDayInfo';
import s from './Home.module.scss';

type Props = {};

const Home = (props: Props) => {
  const {weather} = useCustomSelector(state=> state.currentWeatherSlice);
const dispatch = useCustomDispatch();

useEffect(() => {
  dispatch(fetchCurrentWeatherApi('Paris'));
  console.log(weather);
}, [])


  return (
    <>
      <div className={s.home}>
        <div className={s.wrapper}>
          <ThisDay weather={weather}/>
          <TThisDayInfo  weather={weather}/>
        </div>
        <Tabs/>
        <Days />
      
      </div>
    </>
  );
};

export { Home };
