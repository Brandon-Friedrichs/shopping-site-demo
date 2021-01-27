import React, { useState } from 'react';
import Item from './Item';

const CartPage = (props) => {
  const { cartArr, addToCart, importAllImages } = props;
  console.log(cartArr)

  const images = importAllImages(require.context('./assets/images', false, /\.(png|jpe?g|svg|webp)$/));

  return (
    <div>
      
      <div className='checkout-cart-container'>
        <div className='checkout-cart'>

          <table>
            <thead>
              <tr>
                <th scope='col'>Eyeglasses</th>
                <th scope='col'>Model</th>
                <th scope='col'>Price</th>
                <th scope='col'>Quantity</th>
                <th scope='col'>Subtotal</th>
              </tr>
            </thead>
            <tbody>
              {cartArr.map((item) => {
                return (
                  <tr key={item.title} className='cart-item'>
                    <th className='item-img'>
                      <img src={images[item.imgId + '.webp'].default} ></img>
                    </th>
                    <td className='item-title'>{item.title} {item.subtitle}</td>
                    <td className='item-price'>{item.price}</td>
                    <td className='item-qty'>{item.qty}</td>
                    <td className='item-subtotal'>${item.qty * item.qty}</td>
                  </tr>
                )
              })}
            </tbody>  
          </table>

        </div>
      </div>
    </div>
  )
}

export default CartPage;