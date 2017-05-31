import React, {Component} from 'react';
import Header from './Header';
import './Why.css';

class Contact extends Component {
  render() {
    return (
      <div className="whyContainer">
        <Header />
        <div className="backgroundImgOne">
          <div className="whyHeader">Contact Us</div>
          <div className="whyBackgroundContainer">
            <div className="backgroundImgTwo" />
            <div className="backgroundImgThree" />
            <p className="whyParagraph">
              If you have any questions, ideas or anything else, do not hesitate to take contact to
              tara@kaospilot.dk
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
