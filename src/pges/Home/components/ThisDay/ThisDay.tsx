import React from 'react'
import { GlobalSvgSelector } from '../../../../assets/icons/global/GlobalSvgSelector';
import { Weather } from '../../../../types/types';
import s from './ThisDay.module.scss';

type ThisDayProps = {
  weather : Weather
}

const ThisDay = ({weather}: ThisDayProps) => {
  return (
    <div className={s.this__day}>
      <div className={s.top__block}>
        <div className={s.top__block_wrapper}>
           <div className={s.this__temp}>{Math.floor(weather.main.temp)}°</div>
        <div className={s.this__day_name}>Today</div>
        </div>
       <GlobalSvgSelector id={'sun'}/>
      </div>
      <div className={s.bottom__block}>
      <div className={s.this__time}>Time: <span>20:54</span>    </div>
      <div className={s.this__city}>City: Kiev</div>
      </div>
    </div>
  )
}

export {ThisDay};