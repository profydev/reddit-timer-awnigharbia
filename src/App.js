import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Search from './pages/Search';
import Home from './pages/Home';
import Terms from './components/Terms';

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
