
import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Login from './components/login';
import Client from './components/client';
import Register from './components/Form';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/Navbar" element={<Navbar/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/Form" element={<Register/>}/>
        <Route path="/" element={<Client/>}/>
      </Routes>
    </Router>
  );
}
  
export default App;