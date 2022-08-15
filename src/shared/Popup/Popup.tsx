import React from 'react';
import ThisDayItem from '../../pges/Home/components/ThisDayInfo/ThisDayItem';
import s from './Popup.module.scss';
import { IDay, Iitem } from '../../types/types';
import { GlobalSvgSelector } from '../../assets/icons/global/GlobalSvgSelector';
import { items } from '../../data';
import { useCity } from '../../hooks/useCity';
import { CurrentDate } from '../../services/CuurentDate';
import { useCustomSelector } from '../../hooks/storeHooks';
import { windDirection, windStrength } from '../../services/windDirection';

type PopupProps = {
  onClose:()=>void;
};

const Popup = ({onClose}:PopupProps) => {
const {weather} = useCustomSelector(state=> state.currentWeatherSlice)

  const {city} = useCity();

  const currentDay = new CurrentDate(new Date());
  const weekDay = currentDay.getDay();
  const time = currentDay.getTime();
  const icon = weather.weather[0]['icon']

  const {feels_like,humidity,pressure,temp} = weather.main;
  const dascription  = weather.weather[0]['description']
  const {deg,speed} = weather.wind;

   const items: Iitem[] = [
    {
      icon_id: 'temp',
      name: 'Температура',
      value: `${Math.floor(temp)}° - відчувається як ${Math.floor(feels_like)}°`,
    },
    {
      icon_id: 'pressure',
      name: 'Тиск',
      value: `${pressure} мм ртутного стовпця - нормальне`,
    },
    {
      icon_id: 'precipitation',
      name: 'Опади',
      value: `${dascription}`,
    },
    {
      icon_id: 'wind',
      name: 'Вітер',
      value: `${speed} м/с 🧭 ${windDirection(deg)} - ${windStrength(speed)} вітер`,
    },
  ];

  return (
    <> 
      <div className={s.blur}></div>
      <div className={s.popup}>
        <div className={s.day}>
          <div className={s.day__temp}>{Math.floor(weather.main.temp)}°</div>
          <div className={s.day__name}>{weekDay}</div>
          <div className={s.img}>
          {icon ? <img src={`http://openweathermap.org/img/wn/${icon}@2x.png`}></img> : <GlobalSvgSelector id={'sun'} />}
          </div>
          <div className={s.day__time}>
            Time: <span>{time}</span>
          </div>
          <div className={s.day__city}>
            City: <span>{city}</span>
          </div>
        </div>
        <div className={s.this__day_info_items}>
          {items.map((item: Iitem) => {
            return  <ThisDayItem key={item.icon_id}  icon_id={item.icon_id}  name={item.name} value = {item.value}/>
          }
          
          )}
        </div>
        <div className={s.close} onClick={onClose}>
          <GlobalSvgSelector id="close" />
        </div>
      </div>
    
    </>
   
  );
};

export default Popup;
