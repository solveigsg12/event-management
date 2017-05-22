import React, {Component} from 'react';
import Header from './Header';
// import LogoImg from ;
import {connect} from 'react-redux';

import './PreviousPerformanceInfo.css';

class PreviousPerformanceInfo extends Component {
  render() {
    console.log('hallo pervious?');
    return (
      <div className="perviousPerformanceInfoContainer">
        <Header />
        <div className="previousPerformanceInfoHeader">
          {this.props.match.params.previousPerformance
            .replace(/([A-Z])/g, ' $1')
            .trim()}
          <img
            alt="this is image from event 1"
            src={this.props.performanceObject.get('imgUrlOne')}
            className="previousPerformanceInfoImgOne"
          />
          <img
            alt="this is image from event 2"
            src={this.props.performanceObject.get('imgUrlTwo')}
            className="previousPerformanceInfoImgTwo"
          />
          <img
            alt="this is image from event 3"
            src={this.props.performanceObject.get('imgUrlThree')}
            className="previousPerformanceInfoImgThree"
          />
        </div>
      </div>
    );
  }
}
function mapStateToProps(state, props) {
  return {
    performanceObject: state.previousPerformances.get(
      props.match.params.previousPerformance
    ),
  };
}
export default connect(mapStateToProps)(PreviousPerformanceInfo);
