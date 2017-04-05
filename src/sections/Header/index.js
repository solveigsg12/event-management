import React, {Component} from 'react';
import event from '../../img/event.jpg';
import './index.css';

class Header extends Component {
  render() {
    return (
      <div className="headerContainer">
        <div className="header">
          <img src={event} className="headerImg" />
          <h2>Welcome to event management by Tara</h2>
        </div>
      </div>
    );
  }
}

export default Header;
