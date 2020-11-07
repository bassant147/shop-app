import React from 'react';

class Form extends React.Component {
  state = { fname: '', lname: '', phone: '', address: '', email: '', username: '', password: '' }

  onFormSubmit = (event) => {
    event.preventDefault();
    console.log('form submitted');
    this.props.onSubmit(this.state);
  }  

  render() {
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
                <input placeholder="Home Address" id="address" type="text" value={this.state.address} onChange={e => this.setState({ address: e.target.value })} />
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

export default Form;