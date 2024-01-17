// Header.js
import React from 'react';

import { Link } from 'react-router-dom'; // Assuming you're using react-router-dom for navigation

const Header = ({ onLogout }) => {
  const handleLogout = () => {
    
          window.location.reload();
    onLogout();
  };

  return (
    <header>
      <div className="logo">
        <Link to="/">
          <img src="src/Images/gavika_logo.png" alt="Logo" />
        </Link>
      </div>
     
      <div className="logout">
        <button onClick={handleLogout}>Logout</button>
      </div>
    </header>
  );
};

export default Header;
