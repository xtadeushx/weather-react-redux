import React from 'react';
import { days } from '../../../../data';
import { IDay } from '../../../../types/types';
import { Card } from './Card';
import s from './Days.module.scss';

type DaysProps = {};

const Days = (props: DaysProps) => {
  return (
    <>
      <div className={s.days}>
        {days.map((day: IDay, index: number) => (
          <Card key={index.toString()} day={day} />
        ))}
      </div>
    </>
  );
};

export { Days };
