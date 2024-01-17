// Dashboard.jsx

import React from 'react';
import { useHistory } from 'react-router-dom';
import '../style/Dashboard.css';

const Dashboard = () => {
  const history = useHistory();

  const handleLoginClick = () => {
    history.push('/login');
    window.location.reload();
  };

  const handleAdminLoginClick = () => {
    history.push('/employeem');
    window.location.reload();
  };

  return (
    <div>
      <button onClick={handleLoginClick}>Login</button>
      <button onClick={handleAdminLoginClick}>Admin Login</button>
    </div>
  );
};

export default Dashboard;
