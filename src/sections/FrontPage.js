import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import './FrontPage.css';

class FrontPage extends Component {
  constructor() {
    super();
  }
  render() {
    const src = 'https://www.youtube.com/embed/9P7cXySkxCc?ecver=1';
    const queryParameters =
      '&rel=0&enablejsapi=1&autoplay=1&controls=0&showinfo=0&loop=1';
    return (
      <div className="frontPageContainer">
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
            performances
          </a>
          <a href="/sign-up" className="frontPageLink">signUp</a>
          <a href="/about" className="frontPageLink">aboutUs</a>
        </div>
        {/* <a href="/why" className="frontPageLink">Why</a> */}
      </div>
    );
  }
}

export default FrontPage;
