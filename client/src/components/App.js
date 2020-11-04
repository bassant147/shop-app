import React from 'react';
import { BrowserRouter, Route} from 'react-router-dom';

import Header from './Header';
import ProductList from './routes/ProductList';
import Login from './routes/Login';
import PurchaseHistory from './routes/PurchaseHistory';
import Cart from './routes/Cart';
import WishList from './routes/WishList';

const App = () => {
  return (
  <div className="ui container">    
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

export default App;