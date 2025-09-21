import React, { useState } from 'react';
import Home from '../components/Home';
import Form from '../components/Form';
import About from '../components/About';
import Navbar from '../components/Navbar';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import axios from "axios";
import Register from '../components/Register';
import Login from '../components/Login';
const App = () => {
   
  
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/form" element={<Form />} />
        <Route path="/Register" element={<Register/>} />
        <Route path='/Login' element={<Login/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
