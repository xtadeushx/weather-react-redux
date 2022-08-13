import React, { ReactNode, useState } from 'react'
import { ThemeContext } from '../context/ThemeContext'

type ThemeProviderProps = {
    children: ReactNode;
}

const ThemeProvider = ({children, ...props}: ThemeProviderProps) => {
    const [theme, setTheme] = useState('light');

    const changeTheme = (data:string) => {
        setTheme(data);
      };

  return (
   <ThemeContext.Provider value={{
    theme,
    changeTheme
    }}
    {...props}
    >
    { children}
   </ThemeContext.Provider>
  
   
  )
}

export {ThemeProvider};