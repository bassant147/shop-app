import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

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
              <Link to="/logout">Logout</Link>
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
        <div className="nav-wrapper">
          <Link to="/" className="left brand-logo">
            shop
          </Link>
          {this.renderContent()}
        </div>
      </nav>
    );
  }
  }

const mapStateToProps = (state) => {
  console.log(state.auth.isSignedIn)
  return { isSignedIn: state.auth.isSignedIn }
}

export default connect(mapStateToProps)(Header);

