import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getCart } from '../../actions';

class Cart extends Component {
  componentDidMount() {
    this.props.getCart();
  }

  renderCart() {
    
      return this.props.cart.map((row) => {
        return (
          <li className="collection-item row">
            <img alt="" src={row.img_url} className="col s3"/>
            <h6 style={{"fontWeight": "500"}}><br/><em>{row.product_name}</em></h6>
            <p><em>{row.price} egp</em></p>
          </li>
        );
      })
  }

  render() {    
      
      if(this.props.cart) {
        return (
          <div className="container center">
          <div className="section">
            <button className="btn waves-effect waves-light" type="submit" name="action">Checkout
              <i className="material-icons right">send</i>
            </button>
          </div>
          <div className="container row">
            <ul className="collection with-header ">
              <li className="collection-header"><h6 ><em>Cart Items</em></h6></li>
              {this.renderCart()}
            </ul>
            </div>
            
          </div>    
        )
      } else return <div></div>
  }
}

const mapStateToProps = (state) => {
  return {
    cart: state.user.cart
  }
}

export default connect(mapStateToProps, {getCart})(Cart);