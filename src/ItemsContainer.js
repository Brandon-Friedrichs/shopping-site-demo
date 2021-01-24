import React from 'react';
import { Link } from 'react-router-dom';
import Item from './Item';

const ItemsContainer = (props) => {
  const {addToCart} = props;

  let items = [
    {
      title: 'Ray-Ban Eyeglasses',
      price: '$180.00',
      id: 1,
      qty: 1,
      borderStyle: '2px solid black',
    },
    {
      title: 'Oakley Eyeglasses',
      price: '$135.00',
      id: 2,
      qty: 1,
      borderStyle: '2px solid black',
    },
    {
      title: 'Persol Eyeglasses',
      price: '$294.00',
      id: 3,
      qty: 1,
      borderStyle: '2px solid black',
    },
    {
      title: 'Versace Eyeglasses',
      price: '$277.00',
      id: 4,
      qty: 1,
      borderStyle: '2px solid black',
    },
  ];

  return (
    <div className="item-map">
      {items.map((item) => {
        return (
          <Link key={item.title} to={`/shoppingpage/${item.title}`}>
            <Item item={item} key={item.title} addToCart={addToCart} />
          </Link>
        );
      })}
    </div>
  );
};

export default ItemsContainer;