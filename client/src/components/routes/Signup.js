import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";
import Form from '../SignupForm';
import { createUser, signIn } from '../../actions';

class Signup extends React.Component {
  // function that handles data coming from the form component
  onFormSubmit = async (formData) => {
    await this.props.createUser(formData);
    this.props.signIn(this.props.userId);
    this.props.history.push("/");
  }

  render() {
    return (
      <div>
        <Form onSubmit={this.onFormSubmit}/>
      </div>
    );
  }
}

export default withRouter(connect(null, { createUser, signIn })(Signup));