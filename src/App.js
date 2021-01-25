import React, { useState } from 'react';
import Routes from './Routes';

function App() {
  const [cartArr, setCartArr] = useState([]);

  const addToCart = (cartItem, amount) => {
    console.log(amount)
    console.log(cartItem);
    if (cartArr.some(item => item.title === cartItem.title)) {
      cartArr[cartArr.findIndex(item => item.title === cartItem.title)].qty += parseInt(amount);
    } else {
      cartItem.qty = parseInt(amount);
      setCartArr((prevArr) => [...prevArr, cartItem]);
    }
    console.log(cartArr);
  };

  const importAllImages = (r) => {
    let images = {}; 
    r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
    return images;
  }

  return (
    <div className="App">
      <Routes cartArr={cartArr} addToCart={addToCart} importAllImages={importAllImages} />
    </div>
  );
}

export default App;
