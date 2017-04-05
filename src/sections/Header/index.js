import React, {Component} from 'react';
import event from '../../img/event.jpg';
import './index.css';

class Header extends Component {
  render() {
    return (
      <div className="headerContainer">
        <div className="headerBackgroundImg">
          <h2 className="headerText">Welcome to event management by Tara</h2>
        </div>
      </div>
    );
  }
}

export default Header;
