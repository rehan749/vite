// App.js
// import React from 'react';
import { BrowserRouter , Route, Routes } from 'react-router-dom';
import Navbar from '../components/Navbar.jsx'
import Home from './Home';
import About from './About';
import Services from './Services';
import Contact from './Contact';

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
