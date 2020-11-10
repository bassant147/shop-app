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
        console.log('product:')
        console.log("\"" + product.img_url + "\"")
        return (
          <div class="row" key={product.product_id}>
            <img class="col s2" src={product.img_url}/>
          </div> 
        );
      })[0]
    }
  }

  render() {
    return (
      <div>
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