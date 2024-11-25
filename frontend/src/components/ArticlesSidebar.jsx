import React from 'react';
import { FaTimes, FaShoppingCart } from 'react-icons/fa';

const articles = [
  {
    id: 1,
    name: 'Freezer Modelo A',
    status: 'Activo',
    location: 'Zona Norte',
    image: '/src/assets/freezer1.jpg',
    coordinates: [10.4731, -73.2532], // Coordenadas específicas para este freezer
  },
  {
    id: 2,
    name: 'Freezer Modelo B',
    status: 'Inactivo',
    location: 'Zona Sur',
    image: '/src/assets/freezer2.jpg',
    coordinates: [10.4531, -73.2432], // Coordenadas diferentes para este freezer
  },
  // Puedes agregar más artículos aquí
];

const ArticlesSidebar = ({ isArticlesOpen, toggleArticles, onArticleSelect }) => {
  return (
    <div className={`articles-sidebar ${isArticlesOpen ? 'open' : ''}`}>
      <button
        className="close-button"
        onClick={toggleArticles}
      >
        <FaTimes />
      </button>
      
      <div className="articles-header">
        <h2>Artículos</h2>
      </div>

      <div className="articles-list">
        {articles.map((article) => (
          <div 
            key={article.id}
            className="article-item"
            onClick={() => onArticleSelect(article)}
          >
            <img src={article.image} alt={article.name} />
            <div className="article-info">
              <h3>{article.name}</h3>
              <p>Estado: {article.status}</p>
              <p>Ubicación: {article.location}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ArticlesSidebar;