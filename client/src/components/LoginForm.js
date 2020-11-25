import React from 'react';

class LoginForm extends React.Component {
  state = { email: '', password: '' }

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

  render() {
    return (
      <div className="container">
      
      <div className="section">
      
        <div className="row">
          <form onSubmit={this.onFormSubmit} className="col offset-s1 s12">
            <div className="row">
              <div className="input-field col s6">
                <input placeholder="Email" 
                      id="email" 
                      type="email" 
                      required
                      className="validate" 
                      value={this.state.email} 
                      onChange={e => this.setState({ email: e.target.value })} />
                {this.renderEmailError()}
              </div>
            </div>
            <div className="row">
              <div className="input-field col s6">
                <input placeholder="Password" 
                      id="password" 
                      type="password" 
                      required
                      className="validate" 
                      value={this.state.password} 
                      onChange={e => this.setState({ password: e.target.value})}
                />
                {this.renderPasswordError()}
              </div>
            </div>
            <div className="row">
              
                <button className="btn waves-effect waves-light col offset-s4 center" type="submit" name="action">
                  Submit
                </button>
             
            </div>
          </form>
        </div>
        </div>
      </div>
    )
  } 
}

export default LoginForm;