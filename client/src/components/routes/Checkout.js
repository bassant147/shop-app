import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { showReceipt } from '../../actions';

class Checkout extends React.Component {
  componentDidMount() {
    if(this.props.orderId) {
      this.props.showReceipt(this.props.orderId);
    }    
  }

  renderReceiptItems = () => {
    if(this.props.order) {
      console.log(this.props.order)
      return this.props.order.map(item => {
        return (
          <div class="white-text" style={{"fontFamily": "lato"}}>
            <span>&bull; &nbsp; {item.product_name} &mdash; {item.price}</span> egp<br/>
          </div>
      )
    })
    }    
  }

  render() 
  {
    if(this.props.order) {
      return (
        <div className="row">
          <div className="col s4 offset-s4">
            <div className="card-panel teal lighten-2">
              <h5 className="card-panel white center" style={{"fontFamily": "lato", "color": "teal"}}><em>Purchased Items</em></h5>
            <div className="center-align white-text">
              <em>Order No.</em>:&nbsp; {this.props.orderId}<br/>
              <em>Total</em>:&nbsp; {this.props.order[0].amount} egp</div> <br/>
              {this.renderReceiptItems()}
            </div>
          </div>
        </div>
      )
    }
    else return <div></div>
  }
}

const mapStateToProps = (state) => {
  return {
    orderId: state.product.orderId,
    order: state.product.order
  }
  
}

export default withRouter(connect(mapStateToProps, { showReceipt })(Checkout));