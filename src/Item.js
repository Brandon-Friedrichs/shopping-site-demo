import React, { useState } from 'react';

const Item = (props) => {
  const { item, addToCart, importAllImages } = props;

  const itemStyle = {
    border: item.borderStyle,
  };

  const images = importAllImages(require.context('./assets/images', false, /\.(png|jpe?g|svg|webp)$/));

  console.log(item)

  return (
    <div className='itemShoppingPage-container'>
      <div className='itemShoppingPage'>

        <div className='itemShoppingPage-img-container'>
          <img className='itemShoppingPage-img' src={images[item.imgId + '.webp'].default} ></img>
        </div>

        <h3 className='itemShoppingPage-item-title'>{item.title}</h3>
        <span className='itemShoppingPage-item-price'>{item.price}</span>

      </div> 
    </div>
  );
};

export default Item;