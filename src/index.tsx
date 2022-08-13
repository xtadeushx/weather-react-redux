import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { ThemeProvider } from './provider/ThemeProvider';
import './styles/index.scss';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <BrowserRouter>
   <React.StrictMode>
   <ThemeProvider>
     <App />
   </ThemeProvider>
   
  </React.StrictMode>
  </BrowserRouter>
);

