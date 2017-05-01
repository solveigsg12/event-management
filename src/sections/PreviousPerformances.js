import React, {Component} from 'react';
import './PreviousPerformances.css';

class PreviousPerformances extends Component {
  render() {
    return (
      <div className="perviousPerformancesContainer">
        <div className="previousPerformancesTitle">Previous Performances</div>
        <div className="performancesImageContainer">
          <div className="performance1">The Car</div>
          <div className="performance2">The Ocean</div>
          <div className="performance3">The mountain</div>
        </div>
      </div>
    );
  }
}

export default PreviousPerformances;
