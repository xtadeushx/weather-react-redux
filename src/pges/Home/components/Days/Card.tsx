import React from 'react';
import s from './Days.module.scss';
import { IDay } from '../../../../types/types';
import { GlobalSvgSelector } from '../../../../assets/icons/global/GlobalSvgSelector';

type CardProps = {
  day: IDay;
};

const Card = ({ day }: CardProps) => {
  const { day_info, icon_id, temp_day, temp_night, info } = day;
  return (
    <div className={s.card}>
      <div className={s.day}>{day.day}</div>
      <div className={s.day__info}>{day_info}</div>
      <div className={s.img}>
        <GlobalSvgSelector id={icon_id}/>
      </div>
      <div className={s.temp__day }>{temp_day}</div>
      <div className={s.temp__night }>{temp_night}</div>
      <div className={s.info }>{info}</div>
    </div>
  );
};

export { Card };
