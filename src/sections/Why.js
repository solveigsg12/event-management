import React, {Component} from 'react';
import Header from './Header';
import './Why.css';

class Contact extends Component {
  render() {
    return (
      <div className="whyContainer">
        <Header />
        <div className="backgroundImgOne">
          <div className="whyHeader">Why</div>
          <div className="whyBackgroundContainer">
            <div className="backgroundImgTwo" />
            <div className="backgroundImgThree" />
            <p className="whyParagraph">
              In our daily lives we naturally fall into patterns of behaviour. This is why we for example, always pay attention to same house while walking down our street. You can make yourself change those patterns, but you will need to stay focused. If your attention wanders, you'll fall back into your accustomed pattern. We all carry so many of those patterns that we follow in our daily lives, without even noticing that we do. How can we bring attention to those patterns, because as darwin said,  Attention, if sudden and close, graduates into surprise; and this into astonishment; and this into stupefied amazement.
              We want to turn our daily lives into magic, by bringing more consciousness and awareness into our daily routines. Shakespeare suggested All the world's a stage, And all the men and women merely players. According to this, all our lives are a performance.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
