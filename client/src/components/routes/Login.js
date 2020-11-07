import React from 'react';
import { connect } from 'react-redux';
import Form from './../Form';
import { createUser } from '../../actions';

class Login extends React.Component {
  // function that handles data coming from the form component
  onFormSubmit = (formData) => {
    console.log(formData);
    this.props.createUser(formData);
  }

  render() {
    return (
      <div>
        <Form onSubmit={this.onFormSubmit}/>
      </div>
    );
  }
}

export default connect(null, { createUser })(Login);