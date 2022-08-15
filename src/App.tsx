import React, { createContext, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Home } from './pges/Home/Home';
import { MonthStatistic } from './pges/MonthStatistic/MonthStatistic';
import Header from './shared/Header/Header';
import { items } from './data';
import Popup from './shared/Popup/Popup';
import { ThemeProvider } from './provider/ThemeProvider';
import { useLocalStorage } from './hooks/useLocalStorage';
export const cityContext = createContext({});

function App() {
// add city to localStorage
  // const [city, setCity] = useLocalStorage([], 'city')



 
  return (
    <div className="global-container">
        {/* <Popup items={items}/> */}
      <div className="container">
    
         <Header title="React weather"/>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/month-statistic" element={<MonthStatistic />} />
        </Routes>
      
       
     
      </div>
    </div>
  );
}

export default App;
