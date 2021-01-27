import React, { useState } from 'react';
import ItemsContainer from './ItemsContainer';
import ShoppingCart from './ShoppingCart';

const ShoppingPage = (props) => {
  const { cartArr, addToCart, importAllImages } = props;

  return (
    <div className='shoppingPage'>
      <div className="shopping-banner">
        <h2>Shopping Page</h2>
      </div>

      <div className='items-container'>
        <ItemsContainer addToCart={addToCart} importAllImages={importAllImages} ></ItemsContainer>
      </div>
    </div>
  );
};

export default ShoppingPage;