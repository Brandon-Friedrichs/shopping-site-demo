import React from 'react';
import ItemsContainer from './ItemsContainer';

const ShoppingPage = (props) => {
  const {importAllImages} = props;

  return (
    <div className='shoppingPage'>
      <div className="shopping-banner">
        <h2>Shopping Page</h2>
      </div>

      <div className='items-container'>
        <ItemsContainer importAllImages={importAllImages} ></ItemsContainer>
      </div>
    </div>
  );
};

export default ShoppingPage;