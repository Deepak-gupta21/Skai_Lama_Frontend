import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Login.css';


const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [error, setError] = useState('');
  const [isUserFound, setIsUserFound] = useState(null);
  const navigate = useNavigate();


 const hoisted_api="https://skai-lama-backend.vercel.app";

  const handleLogin = async (e) => {
    e.preventDefault();


    try {
      // Make API call to check if username exists
      const response = await axios.post(`${hoisted_api}/api/login`, { username });
       console.log("response",response);
      if (response.data.usernameExists) {
        setIsUserFound(true);
        navigate('/home'); 
      } else {
        setIsUserFound(false);
        setError('Username not found. Please register.');
      }
    } catch (err) {
      setError('Something went wrong. Please try again.');
      console.error('Axios error:', err.response || err.message || err);
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      // Make API call to register a new user
      const response = await axios.post(`${hoisted_api}/api/register`, { username });

      if (response.status === 201) {
        alert('Registration successful! Please log in.');
        setIsUserFound(true);
        setError(''); 
      }
    } catch (err) {
      setError(err.response ? err.response.data.message : 'Registration failed. Try again.');
      console.error('Register error:', err.response ? err.response.data : err.message);
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <div className="input-container">
          <label htmlFor="username">Enter your username</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        {error && <p className="error-message">{error}</p>}
        {isUserFound === false || (
        <div className="register-section">
          <button type="submit">Login</button>
        </div>
      )}
        
      </form>

      {isUserFound === false && (
        <div className="register-section">
          {/* <p>Username not found. You can register below:</p> */}
          <button onClick={handleRegister}>Register</button>
        </div>
      )}
    </div>
  );
};

export default LoginPage;
