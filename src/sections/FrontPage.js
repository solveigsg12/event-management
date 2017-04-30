import React, {Component} from 'react';
import './FrontPage.css';

class FrontPage extends Component {
  render() {
    return (
      <div className="frontPageContainer">
        <a href="/previous-performances" className="frontPageLink">
          Previous Performances
        </a>
        <a href="/sign-up" className="frontPageLink">Sign Up</a>
        <a href="/about" className="frontPageLink">About</a>
        <a href="/contact" className="frontPageLink">Contact</a>
      </div>
    );
  }
}

export default FrontPage;
