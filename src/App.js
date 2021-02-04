import React, { useState } from 'react';
import Routes from './Routes';

function App() {
  const [cartArr, setCartArr] = useState([]);

  const addToCart = (cartItem, amount) => {
    if (cartArr.some(item => item.title === cartItem.title)) {
      let newArr = cartArr;
      newArr[newArr.findIndex(item => item.title === cartItem.title)].qty += parseInt(amount);
      setCartArr(newArr);
    } else {
      cartItem.qty = parseInt(amount);
      setCartArr((prevArr) => [...prevArr, cartItem]);
    }
  };

  const editQtyInCart = (cartItem, amount) => {
    let newArr = cartArr;
    newArr[newArr.findIndex(item => item.title === cartItem.title)].qty = parseInt(amount);
    setCartArr(newArr);
  }

  const importAllImages = (r) => {
    let images = {}; 
    r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
    return images;
  }

  return (
    <div className="app">
      <Routes cartArr={cartArr} addToCart={addToCart} importAllImages={importAllImages} editQtyInCart={editQtyInCart} />
    </div>
  );
}

export default App;
