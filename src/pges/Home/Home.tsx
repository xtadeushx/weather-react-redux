import React from 'react';
import { ThisDay } from './components/ThisDay/ThisDay';
import { TThisDayInfo } from './components/ThisDayInfo/ThisDayInfo';
import s from './Home.module.scss';

type Props = {};

const Home = (props: Props) => {
  return (
    <>
    <div className={s.wrapper}><ThisDay />
      <TThisDayInfo /></div>
      
    </>
  );
};

export { Home };
