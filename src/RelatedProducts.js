import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import Catalog from './Catalog.json';

const RelatedProducts = (props) => {
  const { importAllImages, currentItem, dismissNotification } = props
  const images = importAllImages(require.context('./assets/images', false, /\.(png|jpe?g|svg|webp)$/));
  const items = useRef([]);

  while (items.current.length < 4) {
    let itemId = Math.floor(Math.random() * Catalog.length) + 1;
    let item = Catalog.find((item) => item.id === itemId);
    if (items.current.indexOf(item) === -1 && item.id !== currentItem) items.current.push(item);
  }

//  while (items.length < 4) {
//    let itemOne = Catalog.find((item) => item.id == currentItem - 2);
//    let itemTwo = Catalog.find((item) => item.id == currentItem - 1);
//    let itemThree = Catalog.find((item) => item.id == currentItem + 1);
//    let itemFour = Catalog.find((item) => item.id == currentItem + 2);
//    items.push(itemOne, itemTwo, itemThree, itemFour);
//    console.log(items)
//  }

  const newRelatedProducts = (selectedProduct) => {
    items.current = [];
    while (items.current.length < 4) {
      let itemId = Math.floor(Math.random() * Catalog.length) + 1;
      let item = Catalog.find((item) => item.id === itemId);
      if (items.current.indexOf(item) === -1 && item.id !== selectedProduct) items.current.push(item);
    }
  }


  return (
    <div className='related-products'>
      {items.current.map((item) => {
        return (
          <Link className='product' 
            key={item.title} 
            to={`/shoppingpage/${item.title}`} 
            onClick={() => {
              dismissNotification();
              newRelatedProducts(item.id);
            }}
          >
            <div className='img-container'>
              <img className='itemShoppingPage-img' src={images[item.imgId + '.webp'].default} alt='The pair of eyeglasses' ></img>
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