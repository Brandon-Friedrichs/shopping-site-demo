import React, { useState } from 'react';
import Item from './Item';

const CartPage = (props) => {
  const { cartArr, addToCart, importAllImages, editQtyInCart } = props;
  const [subTotal, setSubTotal] = useState(0);
  const images = importAllImages(require.context('./assets/images', false, /\.(png|jpe?g|svg|webp)$/));

  const addZeroes = (num) => {
    const dec = num.split('.')[1];
    const len = dec && dec.length > 2 ? dec.length : 2;
    return Number(num).toFixed(len);
  }

  const handleChange = (item, e) => {
    console.log(item)
    console.log(e.target.value)

    
    editQtyInCart(item, e.target.value);

    //element will update because useState is being called, find a way to work it
    console.log(e.target.value * item.price)
    let product = (e.target.value * item.price)
    setSubTotal(e.target.value * item.price);
    console.log(subTotal)
  };

  const subtotalCalc = (item) => {
    let prod = item.qty * item.price;
    return prod
  }

  return (
    <div className='checkout-cart-container'>
      <div className='checkout-cart'>
        <h1>Cart</h1>

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
                  <td className='item-price'>${item.price}</td>
                  <td className='item-qty'>
                    <input type='number' className='btn-counter' min='1' max='99' onChange={handleChange.bind(this, item)} defaultValue={item.qty} />
                  </td>
                  <td className='item-subtotal'>${subtotalCalc(item)}</td>
                </tr>
              )
            })}
          </tbody>
        </table>

        <div className='checkout-total'>
          <h4>Cart Total</h4>
          <div className='total-figure'>
            <p>Total</p>
            <p>${cartArr.reduce((a,b) => a + (b.qty * b.price), 0)}</p>
          </div>
          <hr></hr>
          <button>Proceed To Checkout</button>
        </div>

      </div>
    </div>
  )
}

export default CartPage;