import React from 'react';
import { TrashFill } from 'react-bootstrap-icons';
 

const CartPage = (props) => {
  const { cartArr, importAllImages, editQtyInCart, removeFromCart } = props;
  const images = importAllImages(require.context('./assets/images', false, /\.(png|jpe?g|svg|webp)$/));

  const handleChange = (item, e) => {
    editQtyInCart(item, e.target.value);
  };

  const deleteFromCart  = (item) => {
    removeFromCart(item);
  }

  const subtotalCalc = (item) => {
    let prod = item.qty * item.price;
    if (prod === NaN) return 0;
    return prod.toFixed(2);
  }

  const enforceQtyLimit = (e) => {
    console.log(e.keyCode)
    if(!((e.keyCode > 95 && e.keyCode < 106)
      || (e.keyCode > 47 && e.keyCode < 58) 
      || e.keyCode == 8)) {
        return false;
    }
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
                    <img src={images[item.imgId + '.webp'].default} alt='The pair of eyeglasses' ></img>
                  </th>
                  <td className='item-title'>{item.title} {item.subtitle}</td>
                  <td className='item-price'>${item.price}</td>
                  <td className='item-qty'>
                    <input type='number' className='btn-counter' min='1' max='99' 
                      onChange={handleChange.bind(this, item)} 
                      defaultValue={item.qty} 
                      onKeyDown={enforceQtyLimit}
                    />
                  </td>
                  <td className='item-subtotal'>${subtotalCalc(item)}</td>
                  <td className='item-remove' onClick={deleteFromCart.bind(this, item)}>
                    <button className='item-remove-btn'>
                      <TrashFill className='trash-icon' />
                    </button>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>

        <div className='checkout-total'>
          <h4>Cart Total</h4>
          <div className='total-figure'>
            <p>Total</p>
            <p>${cartArr.reduce((a,b) => a + (b.qty * b.price), 0).toFixed(2)}</p>
          </div>
          <hr></hr>
          <button>Proceed To Checkout</button>
        </div>

      </div>
    </div>
  )
}

export default CartPage;