import React from 'react';
import { connect } from 'react-redux';
import {logout} from '../../actions';

class Logout extends React.Component {
  componentDidUpdate() {
    console.log('inside logout comp');
    console.log(this.props.auth);
    console.log(this.props.user);
    this.props.logout(this.props.user);
  }

  render() {
    return <div></div>
  }
} 
const mapStateToProps = (state) => {
  return {
    user: state.user,
    auth: state.auth}
}

export default connect(mapStateToProps, {logout})(Logout); 