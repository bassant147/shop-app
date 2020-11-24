import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { signOut } from '../actions';

class Header extends React.Component {
  renderContent() {
    
    switch(this.props.isSignedIn) {
      case true:
        return (
          <ul className="right">
            <li>
              <Link to="/wishlist">Wishlist</Link>
            </li>
            <li>
              <Link to="/cart">Cart</Link>
            </li>
            <li>
              <Link to="/" onClick={this.props.signOut}>Logout</Link>
            </li>
          </ul>
        );
      default:
        return (
          <ul className="right">
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/signup">Signup</Link>
            </li>
          </ul>
        );
    }
  }

  render() {
    return (
      <nav>
        <div className="nav-wrapper teal lighten-2" >
          
          <Link to="/" className="brand-logo col">
            <em>&nbsp; shop</em>
          </Link>
          
          {this.renderContent()}
        </div>
      </nav>
    );
  }
  }

const mapStateToProps = (state) => {
  return { isSignedIn: state.user.isSignedIn }
}

export default connect(mapStateToProps, {signOut})(Header);

