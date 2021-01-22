import React, { useState } from 'react';
import ItemsContainer from './ItemsContainer';
import ShoppingCart from './ShoppingCart';

const ShoppingPage = (props) => {
  const { cartArr, addToCart } = props;

  const [cartStatus, setCartStatus] = useState(false);

  const showCart = () => {
    if (cartStatus === false) {
      setCartStatus(true);
    } else {
      setCartStatus(false);
    };
  };

  return (
    <div>
      <div className="shopping-banner">
        <h2>Shopping Page</h2>
        <h3 onClick={showCart}>Cart ({cartArr.length})</h3>
      </div>

      {cartStatus ? (
          <div className='cart-container'>
            <ShoppingCart cart={cartArr}></ShoppingCart>
          </div>
        ) : (
          <div></div>
        )}

      <div className='items-container'>
        <ItemsContainer addToCart={addToCart}></ItemsContainer>
      </div>
    </div>
  );
};

export default ShoppingPage;