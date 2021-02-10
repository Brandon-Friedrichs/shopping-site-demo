import React from 'react';
import { BrowserRouter, Switch, Route, Link, Redirect } from 'react-router-dom';
import { Cart3 } from 'react-bootstrap-icons';
import Homepage from './Homepage';
import ShoppingPage from './ShoppingPage';
import CartPage from './CartPage';
import ItemPage from './ItemPage';

const Routes = (props) => {
  const { cartArr, addToCart, importAllImages, editQtyInCart, removeFromCart, cartCount } = props;

  return (
    <BrowserRouter>
      <div>
        <nav>
          <ul>
            <li id='nav-home'>
              <Link to='/homepage'>Home</Link>
            </li>
            <li id='nav-shop'>
              <Link to='/shoppingpage'>Shopping</Link>
            </li>
            <li id='nav-cart'>
              <Link to='/cartpage'><Cart3 className='cart-icon' /> ({cartCount})</Link>
            </li>
          </ul>
        </nav>
      </div>
      <Switch>
        <Route exact path='/'>
          <Redirect to='/homepage' />
        </Route>
        <Route exact path='/homepage' component={Homepage} />
        <Route exact path='/shoppingpage' render={() => (
          <ShoppingPage cartArr={cartArr} addToCart={addToCart} importAllImages={importAllImages} />
        )} />
        <Route exact path='/cartpage' render={() => (
          <CartPage cartArr={cartArr} importAllImages={importAllImages} editQtyInCart={editQtyInCart} removeFromCart={removeFromCart} />
        )} />
        <Route exact path='/shoppingpage/:title' render={(routeProps) => (
          <ItemPage itemTitle={routeProps.match.params.title} addToCart={addToCart} importAllImages={importAllImages} />
        )} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;