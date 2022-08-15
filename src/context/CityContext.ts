import { createContext } from 'react';

export interface ICityContext {
  city: string;
  changeCity: (city: string) => void;
}

export const CityContext = createContext<ICityContext>({
  city: 'London',
  changeCity: () => {},
});
