import Select, { ActionMeta, GroupBase, OptionsOrGroups } from 'react-select';
import { GlobalSvgSelector } from '../../assets/icons/global/GlobalSvgSelector';
import s from './Header.module.scss';
import { Theme } from '../../context/ThemeContext';
import { useTheme } from '../../hooks/useTheme';
import { useState } from 'react';
import { useCity } from '../../hooks/useCity';

type HeaderProps = {
  title: string;
  onOpen: () => void;
};

const Header = ({ title,onOpen}: HeaderProps) => {
  const [value, setValue] = useState({ value: 'city-1', label: 'London' });
  const { theme, changeTheme } = useTheme();

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
  const {changeCity} = useCity();
  const onChange = (event: any): void => {
    setValue(event);
   changeCity(event.label);
  }

  return (
    <header className={s.header}>
      <div className={s.wrapper}>
        <div className={s.logo} onClick={onOpen}>
          <GlobalSvgSelector id="header-logo" />
        </div>
        <div className={s.title}>{title}</div>
      </div>
      <div className={s.wrapper}>
        <div className={s.change_theme} onClick={() => changeTheme(theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT)}>
          <GlobalSvgSelector id="change-theme" />
        </div>
        <Select
          styles={colourStyles}
          placeholder="select city"
          options={options}
          onChange={onChange}
          value={value} />
      </div>
    </header>
  );
};

export default Header;
