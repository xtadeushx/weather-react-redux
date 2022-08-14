import { createContext } from 'react';
import { IThemeContext } from '../types/types';

export enum Theme {
  LIGHT = 'light',
  DARK = 'dark',
}

export const ThemeContext = createContext<IThemeContext>({
  theme: Theme.LIGHT,
  changeTheme: () => {},
});
