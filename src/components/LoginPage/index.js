import React, { useState } from 'react';
import {Link} from 'react-router-dom'
import './index.css'

const LoginPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
  
    const handleLogin = (e) => {
      e.preventDefault();
      // Add your login logic here (e.g., sending credentials to a server)
  
      // For demonstration purposes, check if username and password are both "admin"
      if (username === 'admin' && password === 'admin') {
        alert('Login successful');
        // Redirect to the dashboard or another page upon successful login
      } else {
        
      }
    };
  
    return (
      <div className="login-container">
        <form className="login-form" onSubmit={handleLogin}>
          <h2>Login</h2>
          {errorMessage && <div className="error-message">{errorMessage}</div>}
          <div className="form-group">
            <label htmlFor="username">Username:</label>
            <input type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)} />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>
          <button type="submit"><Link to="/" className='login-text'>Login</Link></button>
        </form>
      </div>
    );
  };
  
  export default LoginPage;