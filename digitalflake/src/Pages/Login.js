import React from "react";
import homelogo from "../Images/UpperLogo.png";
import { useState } from "react";
import "../css/Login.css";
import { useNavigate } from "react-router-dom";

const Login = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();
  
    const handleLogin = (e) => {
      e.preventDefault();

      if (username === 'user' && password === 'password') {
        alert('Login successful!');
        navigate('/App/Home')

      } else {
        setErrorMessage('Invalid username or password.');
      }
    };

  return (
    <>
        <div className="l-main">

            <form className="loginform" onSubmit={handleLogin}>

            <div id="logodiv">
                <img id="homelogo" alt="homelogo" src={homelogo}></img>
                <h2>Welcome to DigitalFlake Admin</h2>
            </div>

            <div className="inputdiv">
                <label className="inputlabel">Username</label>
                <input className="linput" type="text" value={username} onChange={(e) => setUsername(e.target.value)}></input>
            </div>  

            <div className="inputdiv">
                <label className="inputlabel">Password</label>
                <input className="linput" type="password" value={password} onChange={(e)=>setPassword(e.target.value)} required></input>
                <h5 id="forgot">Forgot Password?</h5>
            </div>

            <button id="loginbtn" type="submit">Log In</button>
            {errorMessage && <p className="errorMsg">*{errorMessage}*</p>}

            </form>
            
        </div>
    </>
  );
};

export default Login;
