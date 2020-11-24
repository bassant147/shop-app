import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";
import Form from '../SignupForm';
import { createUser, signIn } from '../../actions';

class Signup extends React.Component {
  // function that handles data coming from the form component
  state = {error: {}}

  onFormSubmit = async (formData) => {
    
    await this.props.createUser(formData);

    if(this.props.error) this.setState({emailError: this.props.error.email})
    //this.props.signIn(this.props.userId);
    else this.props.history.push("/");
  }

  render() {
    return (
      <div>
        <Form error={this.state.emailError} onSubmit={this.onFormSubmit}/>
      </div>
    );
  }
}

const mapStateToProps = state => {
  if(state.user.isSignedIn) {
    return {
      userId: state.user.userId
    }
  } else {
    return {
      error: state.user.error
    }
  }  
}

export default withRouter(connect(mapStateToProps , { createUser, signIn })(Signup));