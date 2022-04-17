import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { Normalize } from 'styled-normalize';
import Header from '../common/header/Header';
import Search from '../pages/Search';
import Home from '../pages/home/Home';
import Terms from '../components/Home/Terms';
import { GlobalStyles, theme } from '../style';
import Footer from '../common/footer/Footer';
import * as S from './App.style';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Normalize />
      <GlobalStyles />
      <Header />
      <S.ContentContainer>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/search/:subreddit" element={<Search />} />
          <Route path="/terms" element={<Terms />} />
        </Routes>
      </S.ContentContainer>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
