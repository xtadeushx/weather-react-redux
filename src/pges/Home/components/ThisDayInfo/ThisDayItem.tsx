import React from 'react'
import { IndicatorSvgSelector } from '../../../../assets/icons/indicators/IndicatorSvgSelector';
import { Iitem } from '../../../../types/types';
import s from './ThisDayInfo.module.scss';

interface ThisDayItemProps {
  icon_id: string;
  name: string;
  value: string;
}

const ThisDayItem = ({icon_id,name,value}:ThisDayItemProps) => {
  return (
    <div className={s.item}>
      <div className={s.indicator}>
        <IndicatorSvgSelector id={icon_id} />
      </div>
      <div className={s.indicator__name}>{name}</div>
      <div className={s.indicator__value}>{value}</div>
    </div>
  )
}

export default ThisDayItem