import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import './FrontPage.css';

class FrontPage extends Component {
  constructor() {
    super();
  }
  render() {
    const src = 'https://www.youtube.com/embed/_8dNTrNMqn8?ecver=1';
    const queryParameters =
      '&rel=0&enablejsapi=1&autoplay=1&controls=0&showinfo=0&loop=1';
    return (
      <div className="frontPageContainer">
        <a href="/" className="frontPageLogo">REAL(ITY)</a>
        <iframe
          ref={node => {
            this.iframe = node;
          }}
          id="player"
          className="video"
          src={`${src}${queryParameters}`}
          frameBorder="0"
          allowFullScreen
        />
        <div className="fontPageLinkContainer">
          <a href="/performances" className="frontPageLink">
            Performances
          </a>
          <a href="/sign-up" className="frontPageLink">SignUp</a>
          <a href="/about" className="frontPageLink">AboutUs</a>
          <a href="/contact-us" className="frontPageLink">ContactUs</a>
        </div>
        {/* <a href="/why" className="frontPageLink">Why</a> */}
      </div>
    );
  }
}

export default FrontPage;
