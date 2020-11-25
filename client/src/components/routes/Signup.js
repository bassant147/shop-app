import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";
import Form from '../SignupForm';
import { createUser} from '../../actions';

class Signup extends React.Component {
  state = {error: {}}

  // function that handles data coming from the form component
  onFormSubmit = async (formData) => {
    
    await this.props.createUser(formData);

    if(this.props.error) this.setState({error: {...this.props.error}})
    else this.props.history.push("/");
  }

  render() {
    return (
      <div>
        <Form error={this.state.error} onSubmit={this.onFormSubmit}/>
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

export default withRouter(connect(mapStateToProps , { createUser})(Signup));