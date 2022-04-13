import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Normalize } from 'styled-normalize';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './styles/GlobalStyles';
import Router from './routes/index';
import theme from './theme';

// eslint-disable-next-line react/jsx-filename-extension
ReactDOM.render(
  <ThemeProvider theme={theme}>
    <Normalize />
    <GlobalStyles />
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  </ThemeProvider>,
  document.getElementById('root'),
);
