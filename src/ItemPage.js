import React, { useState } from 'react';
import Catalog from './Catalog.json';

const ItemPage = (props) => {
  const { itemTitle, addToCart } = props;
  const [amount, setAmount] = useState(1);

  const item = Catalog.find((item) => item.title == itemTitle);
  console.log(item);

  const handleChange = (e) => {
    setAmount(e.target.value);
  };

  return (
    <div className='itemPage-container'>
      <div className='itemPage'>
        <div class=''>Image Here</div>
        <h1 class='itemPage-item-title'>{item.title}</h1>
        <span class='itemPage-item-price'>{item.price}</span>

        <div className='itemPage-btn-container'>
          <input type='number' class='itemPage-btn-counter' min='1' max='99' onChange={handleChange} defaultValue='1' />
          <input type='submit' class='itemPage-btn-submit' value='Add To Cart' onClick={addToCart.bind(this, item, amount)} />
        </div>
      </div>
    </div>
  );
};

export default ItemPage;