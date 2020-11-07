import React from 'react';
import { Link } from 'react-router-dom';

class Header extends React.Component {
 render() {
  return (
    <nav>
      <div className="nav-wrapper">
        <Link to="/" className="left brand-logo">
          shop
        </Link>
        <ul className="right">
          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
}
export default Header;

