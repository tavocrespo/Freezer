import React, { useState } from 'react'
import Sidebar from '../components/Sidebar';
import '../styles.css';
import ArticlesSidebar from '../components/ArticlesSidebar';
import UserSidebar from '../components/UserSidebar';
import BottomNavbar from '../components/BottomNavbar';

const Soporte = () => {
  const [isOpen, setIsOpen] = useState('');
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const [isArticlesOpen, setIsArticlesOpen] = useState(false);

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
    <div className='"min-h-screen bg-gray-100 ' >
      <div className={`home-container ${isOpen ? 'shifted' : ''}`}>
        <h1 className="page-title">Soporte</h1>
        <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />
        <UserSidebar isUserMenuOpen={isUserMenuOpen} toggleUserMenu={toggleUserMenu} />
        <ArticlesSidebar
          isArticlesOpen={isArticlesOpen}
          toggleArticles={toggleArticles}
          onArticleSelect={handleArticleSelect}
        />
        <BottomNavbar toggleArticles={toggleArticles} toggleUserMenu={toggleUserMenu} />
      </div>
    </div>
  )
}

export default Soporte;