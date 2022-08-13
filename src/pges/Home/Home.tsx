import React from 'react';
import { Days } from './components/Days/Days';
import { Tabs } from './components/Days/Tabs';
import { ThisDay } from './components/ThisDay/ThisDay';
import { TThisDayInfo } from './components/ThisDayInfo/ThisDayInfo';
import s from './Home.module.scss';

type Props = {};

const Home = (props: Props) => {
  return (
    <>
      <div className={s.home}>
        <div className={s.wrapper}>
          <ThisDay />
          <TThisDayInfo />
        </div>
        <Tabs/>
        <Days />
      </div>
    </>
  );
};

export { Home };
