import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import '../styles.css';
import ArticlesSidebar from '../components/ArticlesSidebar';
import UserSidebar from '../components/UserSidebar';
import BottomNavbar from '../components/BottomNavbar';

const Config = () => {
  const [isOpen, setIsOpen] = useState('');
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const [isArticlesOpen, setIsArticlesOpen] = useState(false);
  const [enableGeolocation, setEnableGeolocation] = useState(false);
  const [geolocationAccuracy, setGeolocationAccuracy] = useState('high');

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

  const toggleGeolocation = () => {
    setEnableGeolocation(!enableGeolocation);
  };

  const handleAccuracyChange = (e) => {
    setGeolocationAccuracy(e.target.value);
  };

  return (
    <div className='"min-h-screen bg-gray-100 '>
      <div className={`home-container ${isOpen ? 'shifted' : ''}`} >
        <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />
        <UserSidebar isUserMenuOpen={isUserMenuOpen} toggleUserMenu={toggleUserMenu} />
        <ArticlesSidebar
          isArticlesOpen={isArticlesOpen}
          toggleArticles={toggleArticles}
          onArticleSelect={handleArticleSelect}
        />

        <h1 className="page-title">Configuraciones de Geolocalización</h1>
        <div className="config-scroll-container">
          <div className="config-item">
            <label>
              <input
                type="checkbox"
                checked={enableGeolocation}
                onChange={toggleGeolocation}
              />
              Habilitar Geolocalización
            </label>
          </div>
          <div className="config-item">
            <label htmlFor="accuracy">Precisión de Geolocalización:</label>
            <select
              id="accuracy"
              value={geolocationAccuracy}
              onChange={handleAccuracyChange}
            >
              <option value="high">Alta</option>
              <option value="medium">Media</option>
              <option value="low">Baja</option>
            </select>
          </div>
        </div>
        <BottomNavbar toggleArticles={toggleArticles} toggleUserMenu={toggleUserMenu} />
      </div>
    </div>
  );
}

export default Config;