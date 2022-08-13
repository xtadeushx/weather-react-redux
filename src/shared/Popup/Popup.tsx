import React from 'react';
import ThisDayItem from '../../pges/Home/components/ThisDayInfo/ThisDayItem';
import s from './Popup.module.scss';
import { IDay, Iitem } from '../../types/types';
import { GlobalSvgSelector } from '../../assets/icons/global/GlobalSvgSelector';
import { items } from '../../data';

type PopupProps = {
  items: Iitem[];
};

const Popup = ({items}: PopupProps) => {

  return (
    <> 
    
      <div className={s.blur}></div>
      <div className={s.popup}>
        <div className={s.day}>
          <div className={s.day__temp}>20°</div>
          <div className={s.day__name}>Среда</div>
          <div className={s.img}>
            <GlobalSvgSelector id="sun" />
          </div>
          <div className={s.day__time}>
            Время: <span>21:54</span>
          </div>
          <div className={s.day__city}>
            Время: <span>Kiev</span>
          </div>
        </div>
        <div className={s.this__day_info_items}>
          {items.map((item: Iitem) => {
            return  <ThisDayItem key={item.icon_id}  icon_id={item.icon_id}  name={item.name} value = {item.value}/>
          }
          
          )}
        </div>
        <div className={s.close}>
          <GlobalSvgSelector id="close" />
        </div>
      </div>
    
    </>
   
  );
};

export default Popup;
