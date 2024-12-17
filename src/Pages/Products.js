import React from 'react';
import { productList } from '../Helpers/ProductList';
import ProductItem from '../Components/ProductItem';


function Products() {
  return (
    <div className='product'>
      <h1 className='productTitle'>Nos produits </h1>

      <div className='productLis'>
        {productList.map((product, key) => { 
          return(
            <ProductItem
              key={key}
              name={product.name} 
              image={product.image} 
              description={product.description} 
            />
          );
        })}

      </div>
    </div>
  );
}

export default Products;




