import React, { useState } from 'react';
import Item from './Item';

const CartPage = (props) => {
  const { cartArr, addToCart } = props;
  console.log(cartArr)
  return (
    <div>
      Shopping Cart Contents: 
      
      <div className='checkout-cart-container'>
        {cartArr.map((item) => {
          return (
            <div key={item.title}>{item.title} - Qty: {item.qty}</div>
          )
        })}
      </div>

    </div>
  )
}

export default CartPage;