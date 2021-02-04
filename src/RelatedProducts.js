import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Catalog from './Catalog.json';

const RelatedProducts = (props) => {
  const { importAllImages, currentItem, dismissNotification } = props
  const images = importAllImages(require.context('./assets/images', false, /\.(png|jpe?g|svg|webp)$/));
  let items = [];

  while (items.length < 4) {
    let itemId = Math.floor(Math.random() * Catalog.length) + 1
    let item = Catalog.find((item) => item.id == itemId);
    if (items.indexOf(item) === -1 && item.id !== currentItem) items.push(item);
  }


  console.log(items)

  return (
    <div className='related-products'>
      {items.map((item) => {
        return (
          <Link className='product' key={item.title} to={`/shoppingpage/${item.title}`} onClick={dismissNotification}>
            <div className='img-container'>
              <img className='itemShoppingPage-img' src={images[item.imgId + '.webp'].default} ></img>
            </div>

            <div className='info-container'>
              <h3 className='item-title'>{item.title}</h3>
              <h4 className='item-subtitle'>{item.subtitle}</h4>
              <span className='item-price'>${item.price}</span>
            </div>
          </Link>
        )
      })}

    </div>
  );
};

export default RelatedProducts;