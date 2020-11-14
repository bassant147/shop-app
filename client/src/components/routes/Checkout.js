import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { showReceipt } from '../../actions';

class Checkout extends React.Component {
  componentDidMount() {
    this.props.showReceipt(this.props.orderId);
  }

  renderReceiptItems() {
    console.log(this.props.order)
  }

  render() 
  {return (
    <div>{this.renderReceiptItems()}</div>
  );}
}

const mapStateToProps = (state) => {
  return {
    orderId: state.product.orderId,
    order: state.product.order
  }
  
}

export default withRouter(connect(mapStateToProps, { showReceipt })(Checkout));