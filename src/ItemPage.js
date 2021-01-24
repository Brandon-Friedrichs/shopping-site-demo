import React, { useState } from 'react';
import Catalog from './Catalog.json';
import Images from './Images';

const ItemPage = (props) => {
  const { itemTitle, addToCart } = props;
  const [amount, setAmount] = useState(1);

  const item = Catalog.find((item) => item.title == itemTitle);
  const image = Images.find((img) => img.id == item.id);

  const images = require.context('./assets');
  console.log(images);

  console.log(item);
  console.log(image.src);

  const handleChange = (e) => {
    setAmount(e.target.value);
  };

  return (
    <div className='itemPage-container'>
      <div className='itemPage'>

        <h1 className='itemPage-item-title'>{item.title}</h1>

        <div className='itemPage-img-container'>
          <img className='itemPage-img' src='./assets/oakley.webp'></img>
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