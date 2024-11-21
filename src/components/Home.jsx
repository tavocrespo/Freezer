import React, { useState } from 'react';
import MapValledupar from './MapValledupar';
import Sidebar from './Sidebar';
import UserSidebar from './UserSidebar';
import ArticlesSidebar from './ArticlesSidebar';
import BottomNavbar from './BottomNavbar';
import '../styles.css';

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const [isArticlesOpen, setIsArticlesOpen] = useState(false);
  const [selectedArticle, setSelectedArticle] = useState(null);

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

  return (
    <div className="home-container">
      <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />
      <UserSidebar isUserMenuOpen={isUserMenuOpen} toggleUserMenu={toggleUserMenu} />
      <ArticlesSidebar 
        isArticlesOpen={isArticlesOpen} 
        toggleArticles={toggleArticles}
        onArticleSelect={handleArticleSelect}
      />
      
      <div className={`main-content ${isOpen || isUserMenuOpen || isArticlesOpen ? 'shifted' : ''}`}>
        <h1>Mapa de Valledupar</h1>
        <MapValledupar selectedArticle={selectedArticle} />
      </div>
      
      <BottomNavbar toggleArticles={toggleArticles} toggleUserMenu={toggleUserMenu} />
    </div>
  );
}

export default Home;
