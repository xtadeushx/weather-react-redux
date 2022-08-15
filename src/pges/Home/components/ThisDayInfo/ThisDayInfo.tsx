import React from 'react'
import s from './ThisDayInfo.module.scss';
import clouds from '../../../../assets/images/cloud.png'
import ThisDayItem from './ThisDayItem';
// import { items } from '../../../../data';
import { Iitem, Weather } from '../../../../types/types';
import { windDirection, windStrength } from '../../../../services/windDirection';


type TThisDayInfoProps = {
  weather : Weather
}

const TThisDayInfo = ({weather}: TThisDayInfoProps) => {
  const {feels_like,humidity,pressure,temp} = weather.main;
  const dascription  = weather.weather[0]['description']
  const {deg,speed} = weather.wind;

   const items: Iitem[] = [
    {
      icon_id: 'temp',
      name: 'Температура',
      value: `${Math.floor(temp)}° - ощущается как ${Math.floor(feels_like)}°`,
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
    <div className={s.this__day_info}>
    <div className={s.this__day_info_items}>
{items.map((item) => <ThisDayItem key={item.icon_id} {...item}/>)}
      </div>
      <img className={s.cloud__img} src={clouds} alt="clouds" />
    </div>
  )
}

export {TThisDayInfo};