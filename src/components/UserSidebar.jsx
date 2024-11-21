import React from 'react';
import { FaTimes } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const UserSidebar = ({ isUserMenuOpen, toggleUserMenu }) => {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
    toggleUserMenu(); // Cierra el sidebar después de navegar
  };

  return (
    <div className={`user-sidebar ${isUserMenuOpen ? 'open' : ''}`}>
      <button
        className="close-button"
        onClick={toggleUserMenu}
      >
        <FaTimes />
      </button>
      
      <div className="user-profile">
        <img 
          src="/src/assets/user-avatar.png" 
          alt="Usuario" 
          className="user-avatar"
        />
        <h3>Nombre de Usuario</h3>
      </div>

      <ul>
        <li onClick={() => handleNavigation('/perfil')}>Mi Perfil</li>
        <li onClick={() => handleNavigation('/configuracion')}>Configuración</li>
        <li onClick={() => handleNavigation('/notificaciones')}>Notificaciones</li>
        <li onClick={() => handleNavigation('/login')}>Cerrar Sesión</li>
      </ul>
    </div>
  );
}

export default UserSidebar; 