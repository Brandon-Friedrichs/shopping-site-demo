import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Catalog from './Catalog.json';
import RelatedProducts from './RelatedProducts';

const ItemPage = (props) => {
  const { itemTitle, addToCart, importAllImages } = props;
  const [amount, setAmount] = useState(1);
  const [itemAdded, setItemAdded] = useState(false);

  const images = importAllImages(require.context('./assets/images', false, /\.(png|jpe?g|svg|webp)$/));

  const item = Catalog.find((item) => item.title == itemTitle);

  const handleChange = (e) => {
    setAmount(e.target.value);
    console.log(amount)
  };

  const submitToCart = (item, amount) => {
    console.log(amount)
    addToCart(item, amount);
    setItemAdded(true);
  };

  const dismissNotification = () => {
    setItemAdded(false)
  }

  return (
    <div className='itemPage-container'>
      {itemAdded ? 
        <div className='itemAdded-container'>
          <div>Check</div>
          <p>"{item.title}, {item.subtitle}" has been added to your cart.</p>
          <div className='btn-container'>
            <Link to='/cartpage' className='viewCart-btn'>View Cart</Link>
            <button className='dismiss-btn' onClick={dismissNotification}>x</button>
          </div>
        </div>
        :
        <div></div>
      }
      <div className='itemPage'>

        <div className='img-container'>
          <img className='itemPage-img' src={images[item.imgId + '.webp'].default}></img>
        </div>

        <div className='itemPage-info-container'>
          <h1 className='itemPage-item-title'>{item.title}</h1>
          <h3 className='itemPage-item-subtitle'>{item.subtitle}</h3>
          <p className='itemPage-item-desc'>Desc</p>
          <span className='itemPage-item-price'>${item.price}</span>

          <div className='btn-container'>
            <input type='number' className='btn-counter' min='1' max='99' onChange={handleChange} defaultValue='1' />
            <input type='submit' className='btn-submit' value='Add To Cart' onClick={submitToCart.bind(this, item, amount)} />
          </div>
        </div>
        
        <div className='details-container'>
          <div className='details-header'>
            Description
          </div>
          <hr></hr>
          <div className='details-desc'>
          Glasses, also known as eyeglasses or spectacles, are vision eyewear, consisting of glass or hard
           plastic lenses mounted in a frame that holds them in front of a person's eyes, typically utilizing
           a bridge over the nose and hinged arms (known as temples or temple pieces) which rest over the ears.
          Glasses are typically used for vision correction, such as with reading glasses and glasses used for
           nearsightedness, however, without the specialized lenses, they are sometimes used for cosmetic 
           purposes. 
          </div>
        </div>

        <div className='related-products-container'>
          <div className='related-products-header'>
            Related Products
          </div>
          <RelatedProducts importAllImages={importAllImages} currentItem={item.id} dismissNotification={dismissNotification} />
        </div>

      </div>
    </div>
  );
};

export default ItemPage;