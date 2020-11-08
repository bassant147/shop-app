import React from 'react';
import { connect } from 'react-redux';
import Form from '../SignupForm';
import { createUser } from '../../actions';

class Signup extends React.Component {
  // function that handles data coming from the form component
  onFormSubmit = (formData) => {
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

export default connect(null, { createUser })(Signup);