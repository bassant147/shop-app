import React from 'react';
import { BrowserRouter, Route} from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';

import Header from './Header';
import ProductList from './routes/ProductList';
import Login from './routes/Login';
import PurchaseHistory from './routes/PurchaseHistory';
import Cart from './routes/Cart';
import WishList from './routes/WishList';

class App extends React.Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    return (
      <div className="container">    
        <BrowserRouter>          
          <div>
            <Header/>
            <Route path="/" exact component={ProductList}/>
            <Route path="/login" component={Login}/>
            <Route path="/purchase-history" component={PurchaseHistory}/>
            <Route path="/cart" component={Cart}/>
            <Route path="/wishlist" component={WishList}/>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {};
}

export default connect(mapStateToProps, actions)(App);