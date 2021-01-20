import React, { useState } from 'react';

const CartPage = (props) => {
  const {cart} = props;
  console.log(cart)
  return (
    <div>
      Testdd
      {cart}
    </div>
  )
}

export default CartPage;