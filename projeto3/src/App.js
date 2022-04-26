import './App.css';
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import React from 'react';
import Home from './pages/Home'; 
import Contato from './pages/Contato'; 
import Empresa from './pages/Empresa'; 
import Navbar from './components/layout/Navbrar';
import Footer from './components/layout/Footer';




function App() {
   
  return (
    <Router>
     <Navbar/>
      <Routes>
        <Route exact path="/" element={<Home />} ></Route>
        <Route path="/contato" element={<Contato />} ></Route>
        <Route path="/empresa" element={<Empresa />} ></Route>
      </Routes>
      <Footer/>
    </Router>
  )
}

export default App;
