import React, { useState } from 'react';
import { useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';
import Image from '../../assets/9148063_4077407-removebg.png';
import Logo from '../../assets/logo.png';
import GoogleSvg from '../../assets/icons8-google.svg';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './login.css';
import './responsive.css';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({ email: '', password: '' });
  
  const handleGoogleLogin = useGoogleLogin({
    onSuccess: tokenResponse => {
        // console.log('Google Login Success:', tokenResponse);
        localStorage.setItem('google_token', tokenResponse.access_token);
        window.location.href = '/contacts';
    },
    onError: (error) => {
        // console.error('Google login failed', error);
    },
});


  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8080/api/v1/auth/authentication', formData);
      // console.log('Login Success:', response.data);
      localStorage.setItem('token', response.data.token);
      window.location.href = '/contacts';
    } catch (error) {
      // console.error('Login Error:', error.response ? error.response.data : error.message);
    }
  };

  return (
    <div className="login-main">
      <div className="login-left">
        <img src={Image} alt="" />
      </div>
      <div className="login-right">
        <div className="login-right-container">
          <div className="login-logo">
            <img src={Logo} alt="Logo" />
          </div>
          <div className="login-center">
            <h2>Welcome back!</h2>
            <p>Please enter your details</p>
            <form onSubmit={handleSubmit}>
              <input type="email" placeholder="Email" name="email" value={formData.email} onChange={handleChange} required />
              <div className="pass-input-div">
                <input type={showPassword ? "text" : "password"} placeholder="Password" name="password" value={formData.password} onChange={handleChange} required />
                {showPassword ? <FaEyeSlash onClick={() => setShowPassword(!showPassword)} /> : <FaEye onClick={() => setShowPassword(!showPassword)} />}
              </div>
              <div className="login-center-buttons">
                <button className="form-button" type="submit">Log In</button>
                <button className="form-button" type="button" onClick={handleGoogleLogin}>
                  <img src={GoogleSvg} alt="Google Icon" />
                  Continue with Google
                </button>
              </div>
            </form>
          </div>
          <p className="login-bottom-p">
            Don't have an account? <Link to={"/signup"}>Sign Up</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
