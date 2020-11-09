import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";
import Form from '../LoginForm';
import { signIn, checkUser, fetchUser } from '../../actions';

class Login extends React.Component {
  onFormSubmit = async (formData) => {
    console.log('Login Comp: before checkUser')
    await this.props.checkUser(formData)
    console.log('Login Comp: returned from checkUser')
    console.log(this.props.userId)
    await this.props.fetchUser();
    console.log('Login Comp: returned from fetchUser')
    this.props.signIn(this.props.userId);
    console.log('Login Comp: returned from signIn')
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


export default withRouter(connect(mapStateToProps, {signIn, checkUser, fetchUser})(Login));