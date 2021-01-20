import React, { useState } from 'react';
import ItemsContainer from './ItemsContainer';
import ShoppingCart from './ShoppingCart';

const ShoppingPage = () => {
  const [cartArr, setCartArr] = useState([]);
  const [cartStatus, setCartStatus] = useState(false);

  const addToCart = (cartItem, amount) => {
    console.log(amount)
    console.log(cartItem);
    if (cartArr.some(item => item.title === cartItem.title)) {
      cartArr[cartArr.findIndex(item => item.title === cartItem.title)].qty += parseInt(amount);
    } else {
      cartItem.qty = parseInt(amount);
      setCartArr((prevArr) => [...prevArr, cartItem]);
    }
    console.log(cartArr);
  };

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