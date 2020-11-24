import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';

import Header from './Header';
import ProductList from './routes/ProductList';
import Signup from './routes/Signup';
import Login from './routes/Login';
import Checkout from './routes/Checkout';
import Cart from './routes/Cart';
import WishList from './routes/WishList';
import PurchaseHistory from './routes/PurchaseHistory';

class App extends React.Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    return (
      <div>    
        <BrowserRouter>          
          <div>            
            <Header/>
            <Route path="/" exact component={ProductList}/>
            <Route path="/signup" component={Signup}/>
            <Route path="/login" component={Login}/>
            <Route path="/checkout" component={Checkout}/>
            <Route path="/cart" component={Cart}/>
            <Route path="/wishlist" component={WishList}/>
            <Route path="/purchase-history" component={PurchaseHistory}/>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}


export default connect(null, actions)(App);