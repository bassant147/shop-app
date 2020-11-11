import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchAllProducts, addToCart } from '../../actions';

class ProductList extends React.Component {
  componentDidMount() {
    this.props.fetchAllProducts();
  }  

  renderedProducts() {
    if(this.props.products) {
      const result = Array.from(this.props.products);
      return result.map(product => {
        return (
          <div className="col s12 m4" key={product.product_id}>
            <div className="card">
              <div className="card-image" >
                <img alt='' src={product.img_url}/>
                <span className="card-title" style={{"fontFamily": "lato" , "textShadow": "2px 2px 2px #000"}}>{product.product_name}</span>
              </div>
              <div className="card-action">
                <a href='#' onClick={() => {
                  if(this.props.userId)
                    this.props.addToCart(this.props.userId.data, product.product_id)
                  else 
                    this.props.history.push("/login");
                }
                 }><i className="material-icons">add_shopping_cart</i></a>
                <a href='#'><i className="material-icons">favorite_border</i></a>
                <span className="right grey-text text-darken-2">{product.price} egp</span>
              </div>
            </div>
          </div>
      );
    })
  }
}

  render() {
    return (
      <div className="row">
        {this.renderedProducts()}
      </div>
    );
  }
  
}

const mapStateToProps = (state) => {
  return {
    products: state.product,
    userId: state.auth.userId
  }
}

export default withRouter(connect(mapStateToProps, { fetchAllProducts, addToCart })(ProductList));