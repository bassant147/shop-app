import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchAllProducts } from '../../actions';

class ProductList extends React.Component {
  componentDidMount() {
    this.props.fetchAllProducts();
    console.log('productlist');
  }

  renderedProducts() {
    if(this.props.products) {
      const result = Array.from(this.props.products);
      return result.map(product => {
        return (
          <div class="col s12 m4">
            <div class="card">
              <div class="card-image">
                <img src={product.img_url}/>
                <span class="card-title">{product.product_name} - {product.price} egp</span>
              </div>
              <div class="card-action">
                <a href="#">This is a link</a>
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
    products: state.product
  }
}

//export default withRouter(connect(null, { fetchAllProducts })(ProductList));
export default withRouter(connect(mapStateToProps, { fetchAllProducts })(ProductList));