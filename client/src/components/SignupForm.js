import React from 'react';

class SignupForm extends React.Component {
  
  state = { fname: '', lname: '', phone: '', email: '', username: '', password: '', passwordConfirm: ''};

  onFormSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit(this.state);
  }
  
  renderEmailError() {
    let error = this.props.error;
    if(error.email) 
      return <span style={{'color': 'red', 'fontSize':'12px'}}>{error.email}</span>
    
    else return <span></span>
  }

  renderPasswordError() {
    let error = this.props.error;
    if(error.password)
      return <span style={{'color': 'red', 'fontSize':'12px'}}>{error.password}</span>
    
    else return <span></span>
  }

  render(){
       return (
      <div>
        <div className="container">
          <form onSubmit={this.onFormSubmit} className="section">
            <div className="row">
              <div className="input-field col s5">
                <input placeholder="First Name" 
                      id="first_name" 
                      type="text" 
                      required
                      className="validate" 
                      value={this.state.fname} 
                      onChange={e => this.setState({ fname: e.target.value })} />
              </div>
              <div className="input-field col s5">
                <input placeholder="Last Name" 
                      id="last_name" 
                      type="text"
                      required 
                      className="validate"
                      value={this.state.lname}
                      onChange={e => this.setState({ lname: e.target.value })} />
              </div>
            </div>
            <div className="row">
              <div className="input-field col s5">
                <input placeholder="Email" 
                      id="email" 
                      type="email" 
                      required
                      className="validate"
                      value={this.state.email}
                      onChange={e => this.setState({ email: e.target.value })} />
                {this.renderEmailError()}
              </div>
              <div className="input-field col s5">
                <input placeholder="Phone Number" 
                      id="phone-number" 
                      type="text"
                      required 
                      minLength="11"
                      className="validate" 
                      value={this.state.phone}
                      onChange={e => this.setState({ phone: e.target.value })} />
              </div>
            </div>
            <div className="row">
              <div className="input-field col s5">
                <input placeholder="Username" 
                      id="username" 
                      type="text" 
                      required
                      value={this.state.username} 
                      onChange={e => this.setState({ username: e.target.value })} />
              </div>
              <div className="input-field col s5">
                <input placeholder="Password" 
                      id="password" 
                      type="password"
                      required 
                      className="validate" 
                      value={this.state.password} 
                      onChange={e => this.setState({ password: e.target.value})}
                />
              </div>
            </div>
            <div className="row">
              <div className="input-field col s5">
                <input placeholder="Password Confirmation" 
                      id="passwordConfirm" 
                      type="password"
                      required 
                      className="validate" 
                      value={this.state.passwordConfirm} 
                      onChange={e => this.setState({ passwordConfirm: e.target.value })} />
                {this.renderPasswordError()}
              </div>
              <div className="section">
              <button className="btn waves-effect col offset-s3 waves-light" type="submit" name="action">Submit
                <i className="material-icons right">send</i>
              </button>
            </div>
            
              
            </div>
          </form>
        </div>
      </div>
    ); 
  }
}

export default SignupForm;