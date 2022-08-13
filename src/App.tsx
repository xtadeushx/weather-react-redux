import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Home } from './pges/Home/Home';
import { MonthStatistic } from './pges/MonthStatistic/MonthStatistic';
import Header from './shared/Header/Header';

function App() {
  return (
    <div className="global-container">
      <div className="container">
        
        <Header title="React weather" />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/month-statistic" element={<MonthStatistic />} />
        </Routes>

      </div>
    </div>
  );
}

export default App;
