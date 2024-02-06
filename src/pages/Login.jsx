
import React, { useState , useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import '../style/Login.css'; 
const Login = () => {
  const url="http://192.168.49.2:30001/"
  const [employeeId, setEmployeeId] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();
  const [result, setResult] = useState('');

  useEffect(() => {
    
    fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error(`Server Not Found: ${response.statusText}`);
        }
        return response.text();
      })
      .then(data => {
        setResult(data);
      })
      .catch(error => {
        setResult(`Error: ${error.message}`);
      });
  }, []);

  const handleLogin = async () => {
    try {
      const response = await fetch(url+`api/employees/login/${employeeId}/${password}`);
      
      if (response.ok) {
        const data = await response.json();
        if(data.employeeId==="AD-01")
        {
          history.push(`/employeemanagement`);
          window.location.reload();
        }
        else{
       
        const employeeId = data.employeeId;
        history.push(`/profile/${employeeId}`); 
        window.location.reload();
      }
      } else if (response.status === 401) {
        alert('Incorrect password');
      } else if (response.status === 404) {
        alert('Employee not found');
      } else {
        console.error('Error during login:', response.statusText);
      }
    } catch (error) {
      console.error('Error during login:', error);
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
