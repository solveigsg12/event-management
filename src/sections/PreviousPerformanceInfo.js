import React, {Component} from 'react';
import Header from './Header';
// import LogoImg from ;
import {connect} from 'react-redux';

import './PreviousPerformanceInfo.css';

class PreviousPerformanceInfo extends Component {
  render() {
    console.log(
      this.props.match.params.previousPerformance,
      ' hvað er previousPerformance',
      this.props.performanceObject
    );
    return (
      <div className="perviousPerformanceInfoContainer">
        <Header />
        <div className="previousPerformanceInfoHeader">
          {this.props.previousPerformance}
          {this.props.performanceObject.get('imgUrlOne')}
          <img
            alt="this is image from event 1"
            src={this.props.performanceObject.get('imgUrlOne')}
          />
        </div>
      </div>
    );
  }
}
function mapStateToProps(state, props) {
  console.log(state, ' hvað er state?');
  return {
    performanceObject: state.previousPerformances.get(
      props.match.params.previousPerformance
    ),
  };
}
export default connect(mapStateToProps)(PreviousPerformanceInfo);
