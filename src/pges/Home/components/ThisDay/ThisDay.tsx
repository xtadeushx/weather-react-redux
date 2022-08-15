import React from 'react'
import { GlobalSvgSelector } from '../../../../assets/icons/global/GlobalSvgSelector';
import { CurrentDate } from '../../../../services/CuurentDate';
import { Weather } from '../../../../types/types';
import s from './ThisDay.module.scss';

type ThisDayProps = {
  weather: Weather
}

const ThisDay = ({ weather }: ThisDayProps) => {
  const currentDay = new CurrentDate(new Date());
  let weekDay = currentDay.getDay();
  let time = currentDay.getTime();
  const icon = weather.weather[0]['icon']
  return (
    <div className={s.this__day}>
      <div className={s.top__block}>
        <div className={s.top__block_wrapper}>
          <div className={s.this__temp}>{Math.floor(weather.main.temp)}°</div>
          <div className={s.this__day_name}>{weekDay}</div>
        </div>
        {icon ? <img src={`http://openweathermap.org/img/wn/${icon}@2x.png`}></img> : <GlobalSvgSelector id={'sun'} />}

      </div>
      <div className={s.bottom__block}>
        <div className={s.this__time}>Time: <span>{time}</span>    </div>
        <div className={s.this__city}>City: Kiev</div>
      </div>
    </div>
  )
}

export { ThisDay };