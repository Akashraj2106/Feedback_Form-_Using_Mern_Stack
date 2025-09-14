import React, { useState } from 'react';
import Home from '../components/Home';
import Form from '../components/Form';
import About from '../components/About';
import Navbar from '../components/Navbar';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import axios from "axios";

const App = () => {
   
  
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/form" element={<Form />} />
      </Routes>
    </Router>
  );
}

export default App;
