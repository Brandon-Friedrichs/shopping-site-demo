import React, { useState } from 'react';

const Item = (props) => {
  const { item, addToCart } = props;

  const itemStyle = {
    border: item.borderStyle,
  };

  return (
    <div className="item" >{item.title} {item.price}

    </div>
  );
};

export default Item;