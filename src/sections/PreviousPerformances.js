import React, {Component} from 'react';
import Header from './Header';
import classNames from 'classnames';
import {Link} from 'react-router-dom';
import './PreviousPerformances.css';

class PreviousPerformances extends Component {
  render() {
    return (
      <div className="perviousPerformancesContainer">
        <Header />
        <div className="performancesHeader">Performances</div>
        <div className="upcomingPerformanceTitle">Upcoming</div>
        <div className="upcomingPerformancesImageContainer">
          <Link
            to={'/previous-performance-info/Asanda'}
            className={classNames('performance', 'asanda')}
          >
            <span className="upcomingPerformanceImageText">Asanda</span>
          </Link>
          <Link
            to={'/previous-performance-info/NastasiaAndStephen'}
            className={classNames('performance', 'nastasiaAndStephen')}
          >
            <span className="upcomingPerformanceImageText">
              Nastasia And Stephen
            </span>
          </Link>
          <Link
            to={'/previous-performance-info/Niels'}
            className={classNames('performance', 'niels')}
          >
            <span className="upcomingPerformanceImageText">Niels</span>
          </Link>
          <Link
            to={'/previous-performance-info/Pauli'}
            className={classNames('performance', 'pauli')}
          >
            <span className="upcomingPerformanceImageText">
              Pauli
            </span>
          </Link>
        </div>
        <div className="previousPerformancesTitle">Previous</div>
        <div className="performancesImageContainer">
          <Link
            to={'/previous-performance-info/Tara'}
            className={classNames('performance', 'tara')}
          >
            <span className="previousPerformancesImageText">Tara</span>
          </Link>
          <Link
            to={'/previous-performance-info/TheOcean'}
            className={classNames('performance', 'test')}
          >
            <span className="previousPerformancesImageText">Test</span>
          </Link>
        </div>
      </div>
    );
  }
}

export default PreviousPerformances;
