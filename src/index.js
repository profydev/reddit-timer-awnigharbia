import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Normalize } from 'styled-normalize';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './styles/GlobalStyles';
import theme from './theme';
import App from './App';

// eslint-disable-next-line react/jsx-filename-extension
ReactDOM.render(
  <ThemeProvider theme={theme}>
    <Normalize />
    <GlobalStyles />
    <Router>
      <App />
    </Router>
  </ThemeProvider>,
  document.getElementById('root'),
);
