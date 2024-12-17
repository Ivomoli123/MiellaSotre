import React, { useState } from 'react';
import ProductItem from './ProductItem';
import SearchBar from './SearchBar';
import '../styles/ProductList.css';

function FilteredProducts({ products }) {
  const [searchQuery, setSearchQuery] = useState('');

  // Filter products based on the search query
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="productList">
      {/* Import SearchBar Component */}
      <SearchBar searchQuery={searchQuery} onSearch={setSearchQuery} />

      {/* Product Items */}
      <div className="productItems">
        {filteredProducts.map((product) => (
          <ProductItem
            key={product.id}
            name={product.name}
            image={product.image}
            onAddToCart={() => console.log(`Added ${product.name} to cart`)}
            onViewDetails={() => console.log(`Viewing details for ${product.name}`)}
          />
        ))}
      </div>
    </div>
  );
}

export default FilteredProducts;