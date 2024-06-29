import React from 'react';
import homelogo from '../Images/UpperLogo.png';
import { useNavigate } from "react-router-dom";
import '../css/Home.css';


const Home=()=>{
    const navigate = useNavigate();

  const handkleClickOut = () => {
    alert('Successfully Logout');
    navigate('/');
  };
    return(
        <>
            <div className='homediv'>
                <button id='logbtn' onClick={handkleClickOut}>Log Out</button>

                <img id='homelogo' alt='homelogo' src={homelogo}></img>    
                 
                 
            <p id='para'>Welcome to Digitalflake Admin</p>
            </div>
        </>
    );
}

export default Home;