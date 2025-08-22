import React from 'react';
import '../CSS/Navbar.css';
import { Link, useNavigate } from 'react-router-dom'; 

const Navbar = () => {

  const navigate = useNavigate();
const toUpload=()=>{
  navigate('/upload');
}
  return (
    <div className='outer'>           
      <ul className='navbar'>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/gallary">Gallary</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>

      <button className='upbtn' onClick={toUpload}>Upload</button>
    </div>
  );
};

export default Navbar;
