import React from 'react';
import { getHistory } from '../../actions';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class PurchaseHistory extends React.Component {
  componentDidMount(){
    this.props.getHistory();
  }

  renderItems = () => {
      return this.props.purchasedItems.map(item => {
        return (
          <div key={item.product_name} className="white-text" style={{"fontFamily": "lato"}}>
            <span>&bull; &nbsp; {item.product_name} &mdash; {item.price}</span> egp<br/>
          </div>
      )
    })
  }

  render() {
    if(this.props.purchasedItems) {
      return (
        <div className="row">
          <div className="col s4 offset-s4">
            <div className="card-panel teal lighten-2">
              <h5 className="card-panel white center" style={{"fontFamily": "lato", "color": "teal"}}><em>Purchased Items</em></h5>
              <div className="center-align white-text">
                <em>Order No.</em>:&nbsp; {this.props.purchasedItems.orderId}<br/>
                {this.renderItems()}
              </div>
          </div>
        </div>
        </div>
      )
    }
    else return <div>Purchase History</div>
  }
}

const mapStateToProps = (state) => {
  return {
    purchasedItems: state.product.purchaseHistory
  }
}

export default withRouter(connect(mapStateToProps, { getHistory })(PurchaseHistory));