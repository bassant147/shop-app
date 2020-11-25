import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";
import Form from '../LoginForm';
import { checkUser } from '../../actions';

class Login extends React.Component {
  state = {error: {}}

  onFormSubmit = async (formData) => {
    await this.props.checkUser(formData)
    //await this.props.fetchUser();
    if(this.props.error) this.setState({error: {...this.props.error}})
    else this.props.history.push("/");
  }

  render() {
    return (      
      <Form error={this.state.error} onSubmit={this.onFormSubmit}/>
    );
  }
}

const mapStateToProps = (state) => {
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

export default withRouter(connect(mapStateToProps, { checkUser })(Login));