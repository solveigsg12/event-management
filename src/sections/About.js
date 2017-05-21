import React, {Component} from 'react';
import Header from './Header';
import './About.css';

class AboutUs extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="aboutContent">
          <div className="aboutHeader">About Us</div>
          <div className="aboutText">
            This is a web platform portraying ongoing series of performances that dress different people's daily live up as a performances for 24 hours. You are both able to see those performances through a live stream on this webpage, or physically attend the performances, entering the performers home as audience to, what we for now call reality theater. You can then sign up as a performer/host, as you are performing your life, in your own home, or audience to someone else's life.
            By these performances the hope is to bring awareness back to our daily routines, and encourage people reconnect to their curiosity towards our fellow human beings.
          </div>
        </div>
      </div>
    );
  }
}

export default AboutUs;
