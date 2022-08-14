import React, { ReactNode, useState } from 'react';
import { ThemeContext, Theme } from '../context/ThemeContext';
import { changeCssRootVariables } from '../models/changeCssRootVariables';
import { storage } from '../models/Storage';

type ThemeProviderProps = {
  children: ReactNode;
};

const ThemeProvider = ({ children, ...props }: ThemeProviderProps) => {
  let currentTheme = storage.getLocalStorageItem('theme');
  const [theme, setTheme] = useState<Theme>(currentTheme || Theme.LIGHT);

  changeCssRootVariables(theme);

  const changeTheme = (data: Theme) => {
    setTheme(data);
    changeCssRootVariables(theme);
    storage.setLocalStorageItem('theme', data);
  };

  return (
    <ThemeContext.Provider
      value={{
        theme,
        changeTheme,
      }}
      {...props}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeProvider };
