import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { ThemeProvider } from './provider/ThemeProvider';
import './styles/index.scss';
import { store } from './store/store';
import { CityProvider } from './provider/CityProvider';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <React.StrictMode>
        <ThemeProvider>
          <CityProvider>
          <App />
          </CityProvider>
        </ThemeProvider>
      </React.StrictMode>
    </BrowserRouter>
  </Provider>,
);
