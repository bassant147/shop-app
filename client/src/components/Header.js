import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="ui pointing secondary menu">
      <Link to="/" className="item">Home</Link>
      <div className="right menu">
        <Link to="/login" className="item">
          login
        </Link>
      </div>

    </div>
  );
}

export default Header;

