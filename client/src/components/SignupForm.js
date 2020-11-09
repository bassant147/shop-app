import React from 'react';
//import { Field, reduxForm } from 'redux-form';

class SignupForm extends React.Component {
  state = { fname: '', lname: '', phone: '', email: '', username: '', password: '', passwordConfirm: '' }

   onFormSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit(this.state);
  }  

  /* onFormSubmit(formValues) {
    this.props.onSubmit(formValues);
  }

  renderField({input, label}) {
    return (
      <div className="field">
        <label>{label}</label>
        <input {...input} />
      </div>
    )
  }

  render() {
    return (
      <form onSubmit={this.props.handleSubmit(this.onFormSubmit)}>
        <Field name="fname" component={this.renderField} label="First Name" className="validate" type="text"/>
        <Field name="lname" component={this.renderField} label="Last Name" className="validate" type="text"/>
        <Field name="phone" component={this.renderField} label="Phone Number" className="validate" />
        <Field name="email" component={this.renderField} label="Email" className="validate" type="email"/>
        <Field name="username" component={this.renderField} label="Username" className="validate" type="text"/>
        <Field name="password" component={this.renderField} label="Password" className="validate" type="password"/>
        <Field name="passwordConfirm" component={this.renderField} label="Password Confirmation" className="validate" type="password"/>
        <div className="row">
          <button className="btn waves-effect waves-light right" type="submit" name="action">
            Submit              
          </button>
        </div>
      </form>
    ); */
    render(){
       return (
      <div>
        <div className="row">
          <form onSubmit={this.onFormSubmit} className="col s12">
            <div className="row">
              <div className="input-field col s6">
                <input placeholder="First Name" id="first_name" type="text" className="validate" value={this.state.fname} onChange={e => this.setState({ fname: e.target.value })} />
              </div>
              <div className="input-field col s6">
                <input placeholder="Last Name" id="last_name" type="text" className="validate"
                value={this.state.lname}
                 onChange={e => this.setState({ lname: e.target.value })} />
              </div>
            </div>
            <div className="row">
              <div className="input-field col s6">
                <input placeholder="Email" id="email" type="email" className="validate"
                value={this.state.email}
                onChange={e => this.setState({ email: e.target.value })} />
              </div>
              <div className="input-field col s6">
                <input placeholder="Phone Number" id="phone-number" type="number" className="validate" value={this.state.phone} onChange={e => this.setState({ phone: e.target.value })} />
              </div>
            </div>
            <div className="row">
              <div className="input-field col s6">
                <input placeholder="Username" id="username" type="text" value={this.state.username} onChange={e => this.setState({ username: e.target.value })} />
              </div>
              <div className="input-field col s6">
                <input placeholder="Password" id="password" type="password" className="validate" value={this.state.password} 
                onChange={e => this.setState({ password: e.target.value})}
                />
              </div>
            </div>
            <div className="row">
              <div className="input-field col s6">
                <input placeholder="Password Confirmation" id="passwordConfirm" type="password" value={this.state.passwordConfirm} onChange={e => this.setState({ passwordConfirm: e.target.value })} />
              </div>
            </div>
            <div className="row">
              <button className="btn waves-effect waves-light right" type="submit" name="action">Submit
                <i className="material-icons right">send</i>
              </button>
            </div>
          </form>
        </div>
      </div>
    ); 
  }
}

/* export default reduxForm({
  form: 'signupForm'
})(SignupForm); */

export default SignupForm;