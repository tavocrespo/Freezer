import React from 'react';
import { FaBox, FaUser } from 'react-icons/fa';

const BottomNavbar = ({ toggleArticles, toggleUserMenu }) => {
  return (
    <div className="bottom-navbar">
      <div className="nav-item" onClick={toggleArticles}>
        <FaBox />
        <span>Artículos</span>
      </div>
      <div className="nav-item" onClick={toggleUserMenu}>
        <FaUser />
        <span>Tú</span>
      </div>
    </div>
  );
}

export default BottomNavbar; 