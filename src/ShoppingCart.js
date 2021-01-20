import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ShoppingCart = (props) => {
  const {cart} = props;
  const [counts, setCounts] = useState({});

  return (
    <div className='cart'>
      <Link to='/cartpage'>
        View Cart
      </Link>
      {cart.map((item) => (
        <div key={item.title}>{item.title} - Qty: {item.qty}</div>
      ))}
    </div>
  )
}

export default ShoppingCart;