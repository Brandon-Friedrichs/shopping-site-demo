import React, { useState } from 'react';
import Routes from './Routes';

function App() {
  const [cartArr, setCartArr] = useState([]);
  const [cartCount, setCartCount] = useState(0);

  const addToCart = (cartItem, amount) => {
    if (cartArr.some(item => item.title === cartItem.title)) {
      let newArr = cartArr;
      newArr[newArr.findIndex(item => item.title === cartItem.title)].qty += parseInt(amount);
      setCartArr(newArr);
      setCartCount(cartCount + parseInt(amount));
    } else {
      cartItem.qty = parseInt(amount);
      setCartArr((prevArr) => [...prevArr, cartItem]);
      setCartCount(cartCount + parseInt(amount));
    }
  };

  const editQtyInCart = (cartItem, amount) => {
    let newArr = cartArr;
    let prevQty = newArr[newArr.findIndex(item => item.title === cartItem.title)].qty;
    newArr[newArr.findIndex(item => item.title === cartItem.title)].qty = parseInt(amount);
    setCartArr(newArr);
    setCartCount(cartCount + (parseInt(amount) - parseInt(prevQty)));
  }

  const removeFromCart = (cartItem, amount) => {
    let newArr = cartArr;
    editQtyInCart(cartItem, 0);
    newArr.splice(newArr.findIndex(item => item.title === cartItem.title), 1);
    setCartArr(newArr);
  }

  const importAllImages = (r) => {
    let images = {}; 
    r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
    return images;
  }

  return (
    <div className="app">
      <Routes cartArr={cartArr} addToCart={addToCart} importAllImages={importAllImages} editQtyInCart={editQtyInCart} removeFromCart={removeFromCart} cartCount={cartCount} />
    </div>
  );
}

export default App;
