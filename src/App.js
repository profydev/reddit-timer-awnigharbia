import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './components/header';
import Search from './pages/search';
import Home from './pages/home';
import Terms from './components/terms';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/search/:subreddit" element={<Search />} />
        <Route path="/terms" element={<Terms />} />
      </Routes>
    </div>
  );
}

export default App;
