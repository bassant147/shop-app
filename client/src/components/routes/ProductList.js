import './ProductLayout.css';
import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchAllProducts } from '../../actions';
import ProductCard from './ProductCard';

class ProductList extends React.Component {
  componentDidMount() {
    this.props.fetchAllProducts();
    console.log('productlist');
  }

  renderedProducts() {
    if(this.props.products) {
      const result = Array.from(this.props.products);
      return result.map(product => {
        return <ProductCard key={product.product_id} product={product} />;
      })
    }
  }

  render() {
    return (
      <div className="product-list">
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