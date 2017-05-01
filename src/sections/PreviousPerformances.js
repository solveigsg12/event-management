import React, {Component} from 'react';
import './PreviousPerformances.css';

class PreviousPerformances extends Component {
  render() {
    return (
      <div className="perviousPerformancesContainer">
        <div className="previousPerformancesTitle">Previous Performances</div>
        <div className="performancesImageContainer">
          <div className="performance1">
            <span className="previousPerformancesImageText">The Car</span>
          </div>
          <div className="performance2">
            <span className="previousPerformancesImageText">The Ocean</span>
          </div>
          <div className="performance3">
            <span className="previousPerformancesImageText">The mountain</span>
          </div>
        </div>
      </div>
    );
  }
}

export default PreviousPerformances;
