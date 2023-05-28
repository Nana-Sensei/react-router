import React from 'react';
import { BrowserRouter as AppRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import ServiceDetails from './components/ServiceDetails';

const Router = () => {
  return (
    <AppRouter>
      <nav style={{marginTop:"2rem", marginLeft:"3rem"}}>
        <Link style={{marginRight:"1rem", color:"black", textDecoration:"none"}}  to="/">Home</Link>
        <Link style={{marginRight:"1rem", color:"black", textDecoration:"none"}} to="/About">About</Link>
        <Link style={{marginRight:"1rem", color:"black", textDecoration:"none"}} to="/Services">Services</Link>
        <Link style={{color:"black", textDecoration:"none"}} to="/Contact">Contact</Link>
      </nav>
      <hr />

      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/About" element={<About/>} />
        <Route path="/Services" element={<Services/>} />
        <Route path="/Services/:id" element={<ServiceDetails/>} />
        <Route path="/Contact" element={<Contact/>} />
      </Routes>

    </AppRouter>
  )
}

export default Router