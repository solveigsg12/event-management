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
          <a href="/contact-us" className="headerLink">contactUs</a>
        </div>
      </div>
    );
  }
}

export default Header;
