import React, {Component} from 'react';
import './PreviousPerformances.css';

class PreviousPerformanceInfo extends Component {
  render() {
    console.log(this.props.match.params.previousPerformanceName, ' params? ');
    return (
      <div className="perviousPerformancesContainer">
        {this.props.match.params.previousPerformanceName.replace('-', ' ')}
      </div>
    );
  }
}

export default PreviousPerformanceInfo;
