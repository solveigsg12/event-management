import React, {Component} from 'react';
import Header from './Header';
import {Link} from 'react-router-dom';
import PreviousPerformanceInfo from './PreviousPerformanceInfo.js';
import './PreviousPerformances.css';

class PreviousPerformances extends Component {
  render() {
    return (
      <div className="perviousPerformancesContainer">
        <Header />
        <div className="previousPerformancesTitle">Previous Performances</div>
        <div className="performancesImageContainer">
          <Link
            to="/previous-performance-info/the-car"
            className="performance1"
          >
            <span className="previousPerformancesImageText">The Car</span>
          </Link>
          <Link
            to={'/previous-performance-info/the-Ocean'}
            className="performance2"
          >
            <span className="previousPerformancesImageText">The Ocean</span>
          </Link>
          <Link
            to={'/previous-performance-info/the-mountain'}
            className="performance3"
          >
            <span className="previousPerformancesImageText">The mountain</span>
          </Link>
        </div>
      </div>
    );
  }
}

export default PreviousPerformances;
