import React, { useState } from 'react';
import Catalog from './Catalog.json';

const ItemPage = (props) => {
  const { itemTitle, addToCart, importAllImages } = props;
  const [amount, setAmount] = useState(1);

  const images = importAllImages(require.context('./assets/images', false, /\.(png|jpe?g|svg|webp)$/));

  const item = Catalog.find((item) => item.title == itemTitle);

  const handleChange = (e) => {
    setAmount(e.target.value);
  };

  return (
    <div className='itemPage-container'>
      <div className='itemPage'>

        <h1 className='itemPage-item-title'>{item.title}</h1>

        <div className='itemPage-img-container'>
          <img className='itemPage-img' src={images[item.imgId + '.webp'].default}></img>
        </div>
        
        <span className='itemPage-item-price'>{item.price}</span>

        <div className='itemPage-btn-container'>
          <input type='number' className='itemPage-btn-counter' min='1' max='99' onChange={handleChange} defaultValue='1' />
          <input type='submit' className='itemPage-btn-submit' value='Add To Cart' onClick={addToCart.bind(this, item, amount)} />
        </div>
        
      </div>
    </div>
  );
};

export default ItemPage;