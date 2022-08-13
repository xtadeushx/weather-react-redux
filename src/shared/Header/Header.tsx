import React, { useEffect, useState } from 'react';
import Select from 'react-select';
import { GlobalSvgSelector } from '../../assets/icons/global/GlobalSvgSelector';
import s from './Header.module.scss';
import useContext from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import { useTheme } from '../../hooks/useTheme';

type HeaderProps = {
  title: string;
};

const Header = ({ title }: HeaderProps) => {

const {theme, changeTheme} = useTheme();

  const options = [
    { value: 'city-1', label: 'London' },
    { value: 'city-2', label: 'Dnipro' },
    { value: 'city-3', label: 'Kiev' },
  ];

  const colourStyles = {
    control: (styles: any) => ({
      ...styles,
      backgroundColor: 'rgba(71, 147, 255, 0.2)',
      width: '194px',
      height: '37px',
      border: 'none',
      borderRadius: '10px',
      zIndex: 100,
    }),
    singleValue: (styles: any) => ({
      ...styles,
      color: '#000',
    }),
  };

  useEffect(() => {
    const root = document.querySelector(':root') as HTMLElement;
    const components = [
      'body-background',
      'components-background',
      'card-background',
      'card-shadow',
      'text-color',
    ];
    components.forEach(component => {
      root.style.setProperty(`--${component}-default`, `var(--${component}-${theme})`);
    });
  }, [theme]);
 
  return (
    <header className={s.header}>
      <div className={s.wrapper}>
        <div className={s.logo}>
          <GlobalSvgSelector id="header-logo" />
        </div>
        <div className={s.title}>{title}</div>
      </div>
      <div className={s.wrapper}>
        <div className={s.change_theme} onClick={()=>changeTheme(theme=== 'light'?'dark':'light')}>
          <GlobalSvgSelector id="change-theme" />
        </div>
        <Select styles={colourStyles} placeholder="select city" options={options} />
      </div>
    </header>
  );
};

export default Header;
