import React from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import App from './App';
import Homepage from './Homepage';
import ShoppingPage from './ShoppingPage';
import CartPage from './CartPage';

const Routes = () => {
  return (
    <BrowserRouter>
      <div>
        <nav>
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/shoppingpage'>Shopping</Link>
            </li>
          </ul>
        </nav>
      </div>
      <Switch>
        <Route exact path='/' component={App} />
        <Route exact path='/homepage' component={Homepage} />
        <Route exact path='/shoppingpage' component={ShoppingPage} />
        <Route exact path='/cartpage' component={CartPage} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;