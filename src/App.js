import React from 'react';
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import Details from './pages/Details';
import SchoolDetails from './components/SchoolDetails';

import './assets/item.css';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/details" element={<Details />}>
        <Route path=":movieId" element={<SchoolDetails />} />
      </Route>
    </Routes>
  );
}

export default App;