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
            {this.props.isSignedIn}
            <Route path="/" exact component={ProductList}/>
            <Route path="/signup" component={Signup}/>
            <Route path="/login" component={Login}/>
            <Route path="/checkout" component={Checkout}/>
            <Route path="/cart" component={Cart}/>
            <Route path="/wishlist" component={WishList}/>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isSignedIn: state.isSignedIn
  };
}

export default connect(mapStateToProps, actions)(App);