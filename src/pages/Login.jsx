

import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import '../style/Login.css'; 
const Login = ({ onLogin }) => {
  const [employeeId, setEmployeeId] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  const handleLogin = async () => {
    // Check for specific dummy credentials
    if (employeeId === 'MK-3' && password === 'p') {
      try {
        const data = {
          
          employeeId: employeeId,
         
        }
        onLogin(data); // Pass the employee data to the parent component
        history.push('/profile'); // Navigate to the profile page
        
      } catch (error) {
        console.error('Error during login:', error);
      }
    } else {
      // Handle incorrect credentials (you might want to display an error message)
      console.error('Incorrect username or password');
    }
  };


  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Employee Login</h2>
        <dev >
        <label htmlFor="employeeId">Employee ID:</label>
      <input
        type="text"
        id="employeeId"
        value={employeeId}
        onChange={(e) => setEmployeeId(e.target.value)}
        required
      />
      <label htmlFor="password">Password:</label>
      <input
        type="password"
        id="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <button type="submit" onClick={handleLogin}>Login</button>
        </dev>
      </div>
    </div>
  );
};

export default Login;
