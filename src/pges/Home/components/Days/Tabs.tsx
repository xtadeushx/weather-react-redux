import React from 'react'
import { tabs } from '../../../../data';
import { ITab } from '../../../../types/types';
import s from './Days.module.scss';


type TabsProps = {}

const Tabs = (props: TabsProps) => {
  return (
    <div className={s.tabs}>
        <div className={s.tabs__wrapper}>
{tabs.map((tab:ITab, index:number) => (
          <div className={s.tab} key={index.toString() + tab.value}>
            {tab.value}
          </div>
        ))}</div>
          <div className={s.tab}>cancel</div>
        
    </div>
  )
}

export {Tabs};