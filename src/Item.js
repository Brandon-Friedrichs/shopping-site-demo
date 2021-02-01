import React, { useState } from 'react';

const Item = (props) => {
  const { item, addToCart, importAllImages } = props;

  const itemStyle = {
    border: item.borderStyle,
  };

  const images = importAllImages(require.context('./assets/images', false, /\.(png|jpe?g|svg|webp)$/));

  return (
    <div className='itemShoppingPage-container'>
      <div className='itemShoppingPage'>

        <div className='img-container'>
          <img className='itemShoppingPage-img' src={images[item.imgId + '.webp'].default} ></img>
        </div>

        <div className='info-container'>
          <h3 className='item-title'>{item.title}</h3>
          <h4 className='item-subtitle'>{item.subtitle}</h4>
          <span className='item-price'>${item.price}</span>
        </div>


      </div> 
    </div>
  );
};

export default Item;