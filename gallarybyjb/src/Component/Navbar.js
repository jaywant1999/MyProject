import React from 'react';
import '../CSS/Navbar.css';
import { Link } from 'react-router-dom';
import logo from "./logo.png";

const Navbar = () => {
  return (
    <div className='outer'>          
              <img id='logo' src={logo} alt="Logo" />  
      <ul className='navbar'>
        
        <li><Link to="/">Home</Link></li>
        <li><Link to="/gallary">Gallary</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </div>
  );
};

export default Navbar;
