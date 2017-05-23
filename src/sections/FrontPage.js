import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import './FrontPage.css';

class FrontPage extends Component {
  constructor() {
    super();
  }
  render() {
    const src = 'https://www.youtube.com/embed/VwxE-na_hFY?ecver=1';
    const queryParameters =
      '&rel=0&enablejsapi=1&autoplay=1&controls=0&showinfo=0&loop=1';
    return (
      <div className="frontPageContainer">
        <div class="video-background">
          <div class="video-foreground">
            <iframe
              ref={node => {
                this.iframe = node;
              }}
              id="player"
              className="video"
              src={`${src}${queryParameters}`}
              frameborder="0"
              allowfullscreen
            />
          </div>
        </div>
        <a href="/performances" className="frontPageLink">
          Performances
        </a>
        <a href="/sign-up" className="frontPageLink">Sign Up</a>
        <a href="/about" className="frontPageLink">About</a>
        {/* <a href="/why" className="frontPageLink">Why</a> */}
      </div>
    );
  }
}

export default FrontPage;
