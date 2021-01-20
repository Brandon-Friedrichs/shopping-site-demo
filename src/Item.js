import React, { useState } from 'react';

const Item = (props) => {
  const { item, addToCart } = props;
  const [amount, setAmount] = useState(1);

  const itemStyle = {
    border: item.borderStyle,
  };

  const handleChange = (e) => {
    setAmount(e.target.value);
  }

  return (
    <div className="item" >{item.title} {item.price}
      <input type='number' id='item-counter' min='1' max='99' onChange={handleChange} defaultValue='1' />

      <input type='submit' onClick={addToCart.bind(this, item, amount)} />
    </div>
  );
};

export default Item;