import React, {Component} from 'react';
import Header from './Header';
import './PreviousPerformanceInfo.css';

class PreviousPerformanceInfo extends Component {
  render() {
    return (
      <div className="perviousPerformanceInfoContainer">
        <Header />
        <div className="previousPerformanceInfoHeader">
          {this.props.match.params.previousPerformanceName.replace('-', ' ')}
        </div>
      </div>
    );
  }
}

export default PreviousPerformanceInfo;
