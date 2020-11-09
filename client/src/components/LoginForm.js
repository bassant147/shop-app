import React from 'react';
//import { Field, reduxForm } from 'redux-form';

class LoginForm extends React.Component {
  state = { email: '', password: '' }

  onFormSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit(this.state);
  }  

  /* renderInput({ input, label}) {
    return (
      <div className="field">
        <label>{label}</label>
        <input {...input}/>
      </div>
    )
  }

  render() {
    return (
      <form>
        <Field name="email" component={this.renderInput} label="Email" className="validate" type="email"/>
        <Field name="password" component={this.renderInput} label="Password" className="validate" type="password"/>
      </form>
    )
  } */

  render() {
    return (
        <div className="row">
          <form onSubmit={this.onFormSubmit} className="col s12">
            <div className="row">
              <div className="input-field col s6">
                <input placeholder="Email" id="email" type="email" className="validate" value={this.state.email} onChange={e => this.setState({ email: e.target.value })} />
              </div>
            </div>
            <div className="row">
              <div className="input-field col s6">
                <input placeholder="Password" id="password" type="password" className="validate" value={this.state.password} 
                onChange={e => this.setState({ password: e.target.value})}
                />
              </div>
            </div>
            <div className="row">
              
                <button className="btn waves-effect waves-light right" type="submit" name="action">
                  Submit
                </button>
             
            </div>
          </form>
        </div>
    )
  } 
}

/* export default reduxForm({
  form: 'loginForm'
})(LoginForm); */

export default LoginForm;