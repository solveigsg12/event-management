import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as previousPerformancesActions from '../actions/previousPerformances';
import Header from './Header';
import {Link} from 'react-router-dom';
import './PreviousPerformances.css';

class PreviousPerformances extends Component {
  render() {
    return (
      <div className="perviousPerformancesContainer">
        <Header />
        <div className="previousPerformancesTitle">Previous Performances</div>
        <div className="performancesImageContainer">
          <Link
            to={'/previous-performance-info/TheCar'}
            className="performance1"
          >
            <span className="previousPerformancesImageText">The Car</span>
          </Link>
          <Link
            to={'/previous-performance-info/TheOcean'}
            className="performance2"
          >
            <span className="previousPerformancesImageText">The Ocean</span>
          </Link>
          <Link
            to={'/previous-performance-info/?TheMountain'}
            className="performance3"
            onClick={() => {
              console.log('hallo onclick?');
              return this.handlePreviousPerformance('The-mountain');
            }}
          >
            <span className="previousPerformancesImageText">The mountain</span>
          </Link>
        </div>
      </div>
    );
  }
  handlePreviousPerformance(name) {
    console.log(name, ' hvað er name???');
    this.props.actions.setPreviousPerformance(name);
  }
}

function mapStateToProps(state, props) {
  return {
    state,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(previousPerformancesActions, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(
  PreviousPerformances
);
