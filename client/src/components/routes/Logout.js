import React from 'react';
import { connect } from 'react-redux';
import { signOut } from '../../actions';

class Logout extends React.Component {
  componentDidUpdate() {
    console.log('inside logout comp');
    this.props.signOut();
  }

  render() {
    return <div></div>
  }
} 

export default connect(null, {signOut})(Logout); 