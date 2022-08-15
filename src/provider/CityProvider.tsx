import React, { ReactNode, useState } from 'react';
import { CityContext } from '../context/CityContext';
import { ThemeContext, Theme } from '../context/ThemeContext';
import { changeCssRootVariables } from '../models/changeCssRootVariables';
import { storage } from '../models/Storage';

type CityProviderProps = {
  children: ReactNode;
};

const CityProvider = ({ children, ...props }: CityProviderProps) => {
  let currentCity = storage.getLocalStorageItem('city');
  const [city, setCity] = useState(currentCity || 'London');


  const changeCity = (data: string) => {
    setCity(data);
    storage.setLocalStorageItem('city', data);
  };

  return (
    <CityContext.Provider
      value={{
        city,
        changeCity,
      }}
      {...props}>
      {children}
    </CityContext.Provider>
  );
};

export { CityProvider };
