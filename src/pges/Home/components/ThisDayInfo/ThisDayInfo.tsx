import React from 'react'
import s from './ThisDayInfo.module.scss';
import clouds from '../../../../assets/images/cloud.png'
import ThisDayItem from './ThisDayItem';
import { items } from '../../../../data';
import { Weather } from '../../../../types/types';


type TThisDayInfoProps = {
  weather : Weather
}

const TThisDayInfo = ({weather}: TThisDayInfoProps) => {


  
  return (
    <div className={s.this__day_info}>
    <div className={s.this__day_info_items}>
{/* {items.map((item) => <ThisDayItem key={item.icon_id} {...item}/>)} */}
      </div>
      <img className={s.cloud__img} src={clouds} alt="clouds" />
    </div>
  )
}

export {TThisDayInfo};