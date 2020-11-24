import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";
import Form from '../LoginForm';
import { checkUser, fetchUser } from '../../actions';

class Login extends React.Component {
  onFormSubmit = async (formData) => {
    await this.props.checkUser(formData)
    await this.props.fetchUser();
    this.props.history.push("/");
  }

  render() {
    return (      
      <Form onSubmit={this.onFormSubmit}/>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    userId: state.user.userId,
  }
}


export default withRouter(connect(mapStateToProps, { checkUser, fetchUser})(Login));