import React from 'react';
import { Link } from 'react-router-dom';
import Item from './Item';

const ItemsContainer = (props) => {
  const {addToCart} = props;

  let items = [
    {
      title: 'Apples',
      price: '2.99$',
      qty: 1,
      borderStyle: '2px solid black',
    },
    {
      title: 'Bread',
      price: '4.99$',
      qty: 1,
      borderStyle: '2px solid black',
    },
    {
      title: 'Eggs',
      price: '7.99$',
      qty: 1,
      borderStyle: '2px solid black',
    },
    {
      title: 'Milk',
      price: '5.20$',
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