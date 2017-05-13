import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as previousPerformancesActions from '../actions/previousPerformances';
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
            to="/previous-performance-info/The-car"
            className="performance1"
          >
            <span className="previousPerformancesImageText">The Car</span>
          </Link>
          <Link
            to={'/previous-performance-info/The-Ocean'}
            className="performance2"
            onClick={() => this.handlePreviousPerformance('The-Ocean')()}
          >
            <span className="previousPerformancesImageText">The Ocean</span>
          </Link>
          <Link
            to={'/previous-performance-info/The-mountain'}
            className="performance3"
            onClick={() => this.handlePreviousPerformance('The-mountain')}
          >
            <span className="previousPerformancesImageText">The mountain</span>
          </Link>
        </div>
      </div>
    );
  }
  handlePreviousPerformance(name) {
    console.log(name, ' hvað er name í component?');
    this.props.actions.setPreviousPerformance(name);
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(previousPerformancesActions, dispatch),
  };
}

export default connect(mapDispatchToProps)(PreviousPerformances);
