import React from 'react';
import '../styles/SearchBar.css';

function SearchBar({ searchQuery, onSearch }) {
  return (
    <div className="searchBar">
      <input
        type="text"
        placeholder="Rechercher un produit..."
        value={searchQuery}
        onChange={(e) => onSearch(e.target.value)}
        className="searchInput"
      />
    </div>
  );
}

export default SearchBar;

