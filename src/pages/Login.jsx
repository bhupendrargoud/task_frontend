import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import '../style/Login.css'; 

const Login = () => {
  const [employeeId, setEmployeeId] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();
  const handleLogin = () => {
    
    history.push('/profile/userId/'+2);
    window.location.reload();
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
            name="employeeId"
            value={employeeId}
            onChange={(e) => setEmployeeId(e.target.value)}
            required
          />

          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
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
