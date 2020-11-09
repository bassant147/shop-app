import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchUser } from '../../actions';

class Cart extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    return (
      <div>Cart</div>
    );
  }
}

export default connect(null, {fetchUser})(Cart);