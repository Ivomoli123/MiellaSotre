import React from 'react';
import '../styles/ProductItem.css';

function ProductItem({ name, image, onAddToCart, onViewDetails }) {
  return (
    <div className="productItem">
      <img src={image} alt={name} className="productImage" width={150} />
      <h2 className="productName">{name}</h2>
      <button className="btn addToCart" onClick={onAddToCart}>
        Ajouter au panier
      </button>
      <button className="btn viewDetails" onClick={onViewDetails}>
        Voir le produit
      </button>
    </div>
  );
}

export default ProductItem;

