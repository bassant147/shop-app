import React from 'react';
import { connect } from 'react-redux';
import Form from '../LoginForm';
import { checkUser } from '../../actions';

class Login extends React.Component {
  onFormSubmit = (formData) => {
    this.props.checkUser(formData);
  }

  render() {
    return (
      <div>
        <Form onSubmit={this.onFormSubmit}/>
      </div>
    );
  }
}

const mapStateToProps = (state) => {

}

export default connect(null, {checkUser})(Login);