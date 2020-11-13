import React from 'react';
import { connect } from 'react-redux';
import { getWishList, addToCart } from '../../actions';

class WishList extends React.Component { 
  componentDidMount() {
    this.props.getWishList();
  }

  //add to cart
  //remove from wishlist

  renderWishList() {
    return this.props.wishlist.map((row) => {
      return (
        <li className="collection-item row">
        <div>
          <img alt="" src={row.img_url} className="col s3"/>
          <h6 className="" style={{"fontWeight": "500"}}><br/><br/><em>{row.product_name}</em></h6>
          <a href="#!" className="secondary-content"><i className="material-icons">delete</i></a>
          <div className="secondary-content">&nbsp; &nbsp;</div>
          <a href="#!" onClick={() => this.props.addToCart(this.props.userId, row.product_id)} className="secondary-content"><i className="material-icons">shopping_cart</i></a>
          <p><em>{row.price} egp</em></p>            
        </div>
        </li>
      );
    })
  }

  render() {
    if(this.props.wishlist) {
      return (
        <div className="container">
          <div className="container row">
              <ul className="collection with-header ">
                <li className="collection-header center"><h6 style={{"fontWeight":"500"}}><em>Wishlist Items</em></h6></li>
                {this.renderWishList()}
              </ul>
          </div>
        </div>
      );
    } 
    else return <div>WishList Is Empty</div>
  }
}

const mapStateToProps = (state) => {
  return {
    userId: state.auth.userId,
    wishlist: state.product.wishlist
  }
}

export default connect(mapStateToProps, {getWishList, addToCart})(WishList);