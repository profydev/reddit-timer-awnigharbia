import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './styles/normalize.css';
import GlobalStyles from './styles/GlobalStyles';
import Router from './routes/index';

// eslint-disable-next-line react/jsx-filename-extension
ReactDOM.render(
  <React.StrictMode>
    <GlobalStyles />
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'),
);
