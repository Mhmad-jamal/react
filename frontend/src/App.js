import { useState } from 'react';

import { Routes, Route, Link, BrowserRouter } from 'react-router-dom';
import Home from './Page/Home';
import About from './Page/About';
import Menu from './Components/Menu';
import Contact from './Page/Contact';
import Signup from './Page/signup'
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';

function App() {
  return (
    <>
      <BrowserRouter>
        <Menu />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/signup" element={<Signup />} />

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;