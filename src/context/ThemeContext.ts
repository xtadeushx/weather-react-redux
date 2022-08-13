import { createContext } from 'react';
import { IThemeContext } from '../types/types';



export const ThemeContext = createContext<IThemeContext>({
  theme: '',
  changeTheme: () => {},
});
