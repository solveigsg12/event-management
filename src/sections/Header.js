import React, {Component} from 'react';
import './Header.css';

class Header extends Component {
  render() {
    return (
      <div className="headerContainer">
        <a href="/" className="headerLogo">Reality</a>
        <div className="headerLinks">
          <a href="/performances" className="headerLink">
            Performances
          </a>
          <a href="/sign-up" className="headerLink">Sign Up</a>
          <a href="/about" className="headerLink">About</a>
          <a href="/why" className="headerLink">Why</a>
        </div>
      </div>
    );
  }
}

export default Header;
