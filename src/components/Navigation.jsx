import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/dashboard">Dashboard</Link></li>
        <li><Link to="/employee-management">Employee Management</Link></li>
        <li><Link to="/profile-settings">Profile Settings</Link></li>
        <li><Link to="/system-settings">System Settings</Link></li>
      </ul>
    </nav>
  );
};

export default Navigation;
