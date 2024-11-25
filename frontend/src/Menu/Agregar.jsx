import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import '../styles.css';
import ArticlesSidebar from '../components/ArticlesSidebar';
import UserSidebar from '../components/UserSidebar';
import BottomNavbar from '../components/BottomNavbar';

const Agregar = () => {
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const [isArticlesOpen, setIsArticlesOpen] = useState(false);
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [isOpen, setIsOpen] = useState('');
  const [assetName, setAssetName] = useState('');
  const [assetDescription, setAssetDescription] = useState('');
  const [identificador, setIdentificador] = useState('');
  const [marca, setMarca] = useState('');
  const [modelo, setModelo] = useState('');
  const [anioFabricacion, setAnioFabricacion] = useState('');
  const [tipoNevera, setTipoNevera] = useState('');

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
    if (isUserMenuOpen) setIsUserMenuOpen(false);
    if (isArticlesOpen) setIsArticlesOpen(false);
  };

  const toggleUserMenu = () => {
    setIsUserMenuOpen(!isUserMenuOpen);
    if (isOpen) setIsOpen(false);
    if (isArticlesOpen) setIsArticlesOpen(false);
  };

  const toggleArticles = () => {
    setIsArticlesOpen(!isArticlesOpen);
    if (isOpen) setIsOpen(false);
    if (isUserMenuOpen) setIsUserMenuOpen(false);
  };
  const handleArticleSelect = (article) => {
    setSelectedArticle(article);
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Activo agregado:', { assetName, assetDescription, identificador, marca, modelo, anioFabricacion, tipoNevera });
    setAssetName('');
    setAssetDescription('');
    setIdentificador('');
    setMarca('');
    setModelo('');
    setAnioFabricacion('');
    setTipoNevera('');
  };

  return (
    <div className='"min-h-screen bg-gray-100 '>
      <div className={`home-container ${isOpen ? 'shifted' : ''}`}>
        <h1 className="page-title">Agregar Activo</h1>
        <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />
        <UserSidebar isUserMenuOpen={isUserMenuOpen} toggleUserMenu={toggleUserMenu} />
        <ArticlesSidebar
          isArticlesOpen={isArticlesOpen}
          toggleArticles={toggleArticles}
          onArticleSelect={handleArticleSelect}
        />
        <div className={`main-content ${isOpen ? 'shifted' : ''}`}>
            <form className="add-asset-form scroll-container" onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Nombre del activo"
                className="form-input"
                value={assetName}
                onChange={(e) => setAssetName(e.target.value)}
                required
              />
              <input
                type="text"
                placeholder="Descripción"
                className="form-input"
                value={assetDescription}
                onChange={(e) => setAssetDescription(e.target.value)}
                required
              />
              <input
                type="text"
                placeholder="Identificador"
                className="form-input"
                value={identificador}
                onChange={(e) => setIdentificador(e.target.value)}
                required
              />
              <input
                type="text"
                placeholder="Marca"
                className="form-input"
                value={marca}
                onChange={(e) => setMarca(e.target.value)}
                required
              />
              <input
                type="text"
                placeholder="Modelo"
                className="form-input"
                value={modelo}
                onChange={(e) => setModelo(e.target.value)}
                required
              />
              <input
                type="number"
                placeholder="Año de Fabricación"
                className="form-input"
                value={anioFabricacion}
                onChange={(e) => setAnioFabricacion(e.target.value)}
                required
              />
              <select
                placeholder="Tipo de Nevera"
                className="form-input"
                value={tipoNevera}
                onChange={(e) => setTipoNevera(e.target.value)}
                required
              >
                <option value="">Seleccione un tipo</option>
                <option value="convencional">Exhibicion</option>
                <option value="doblePuerta">Almacenamiento</option>
                <option value="sideBySide">Dispensador</option>
                <option value="miniNevera">Mini Nevera</option>
              </select>
              <button type="submit" className="submit-button">Agregar Activo</button>
            </form>
          </div>

          <BottomNavbar toggleArticles={toggleArticles} toggleUserMenu={toggleUserMenu} />

        </div>
      </div>
  );
}

export default Agregar;