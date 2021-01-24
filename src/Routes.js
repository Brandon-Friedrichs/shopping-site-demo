import React from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import App from './App';
import Homepage from './Homepage';
import ShoppingPage from './ShoppingPage';
import CartPage from './CartPage';
import ItemPage from './ItemPage';

const Routes = (props) => {
  const { cartArr, addToCart } = props;
  return (
    <BrowserRouter>
      <div>
        <nav>
          <ul>
            <li id='nav-home'>
              <Link to='/'>Home</Link>
            </li>
            <li id='nav-shop'>
              <Link to='/shoppingpage'>Shopping</Link>
            </li>
            <li id='nav-cart'>
              <Link to='/cartpage'>Cart</Link>
            </li>
          </ul>
        </nav>
      </div>
      <Switch>
        <Route exact path='/homepage' component={Homepage} />
        <Route exact path='/shoppingpage' render={() => (
          <ShoppingPage cartArr={cartArr} addToCart={addToCart} />
        )} />
        <Route exact path='/cartpage' render={() => (
          <CartPage cartArr={cartArr} addToCart={addToCart} />
        )} />
        <Route exact path='/shoppingpage/:title' render={(routeProps) => (
          <ItemPage itemTitle={routeProps.match.params.title} addToCart={addToCart} />
        )} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;