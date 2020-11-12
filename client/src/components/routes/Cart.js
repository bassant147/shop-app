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
        <div>
          <img alt="" src={row.img_url} className="col s3"/>
          <h6 className="" style={{"fontWeight": "500"}}><br/><br/><em>{row.product_name}</em></h6>
          <a href="#!" className="secondary-content"><i className="material-icons">delete</i></a>
          <div className="secondary-content">&nbsp; &nbsp;</div>
          <a href="#!" className="secondary-content"><i className="material-icons">favorite_border</i></a>
          <p><em>{row.price} egp</em></p>            
        </div>
        </li>
      );
    })
  }

  render() {      
      if(this.props.cart) {
        return (
          <div className="container">
            <div className="section center">
              <button className="btn waves-effect waves-light" type="submit" name="action">Checkout
                <i className="material-icons right">send</i>
              </button>
            </div>
            <div className="container row">
              <ul className="collection with-header ">
                <li className="collection-header center"><h6 style={{"fontWeight":"500"}}><em>Cart Items</em></h6></li>
                {this.renderCart()}
              </ul>
            </div>            
          </div>    
        )
      } else return <div> Cart Is Empty </div>
  }
}

const mapStateToProps = (state) => {
  return {
    cart: state.user.cart
  }
}

export default connect(mapStateToProps, {getCart})(Cart);