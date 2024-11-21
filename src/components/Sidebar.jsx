import React from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const Sidebar = ({ isOpen, toggleSidebar }) => {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
    toggleSidebar();
  };

  return (
    <>
      <button
        className="menu-button"
        onClick={toggleSidebar}
      >
        {isOpen ? <FaTimes /> : <FaBars />}
      </button>
      
      <div className={`sidebar ${isOpen ? 'open' : ''}`}>
        <div className="logo-container">
          <img 
            src="/src/assets/freezersinfondo.png" 
            alt="Logo" 
            className="sidebar-logo"
          />
        </div>
        <ul>
          <li onClick={() => handleNavigation('/agregar-activo')}>Agregar Activo</li>
          <li onClick={() => handleNavigation('/home')}>Mapa</li>
          <li onClick={() => handleNavigation('/cuenta')}>Cuenta</li>
          <li onClick={() => handleNavigation('/config')}>Configuración</li>
          <li onClick={() => handleNavigation('/soporte')}>Soporte</li>
          <li onClick={() => handleNavigation('/login')}>Cerrar sesión</li>
        </ul>
      </div>
    </>
  );
}

export default Sidebar;