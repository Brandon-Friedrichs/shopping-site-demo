import React from 'react';
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
      {items.map((item) => (
        <Item item={item} key={item.title} addToCart={addToCart} />
      ))}
    </div>
  );
};

export default ItemsContainer;