import React from 'react';

class LoginForm extends React.Component {
  state = { email: '', password: '' }

  onFormSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit(this.state);
  }  

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
              <button className="btn waves-effect waves-light right" type="submit" name="action">Submit
                <i className="material-icons right">send</i>
              </button>
            </div>
          </form>
        </div>
    )
  }
}

export default LoginForm;