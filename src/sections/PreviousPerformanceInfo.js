import React, {Component} from 'react';
import Header from './Header';
import classNames from 'classnames';
import {connect} from 'react-redux';

import './PreviousPerformanceInfo.css';

class PreviousPerformanceInfo extends Component {
  render() {
    console.log(this.props.performanceObject.toJS(), ' hvað er þetta??');
    return (
      <div className="performanceInfoContainer">
        <Header />
        <div
          className={classNames('performanceInfoHeader', {
            ['isPrevious']: this.props.performanceObject.get('performance') ===
              'previous',
          })}
        >
          {this.props.match.params.previousPerformance
            .replace(/([A-Z])/g, ' $1')
            .trim()}
          <div className="performanceInfoImgContainer">
            {this.props.performanceObject.size &&
              this.props.performanceObject.get('images').map((image, index) => {
                return (
                  <img
                    alt={'this is image from event' + index}
                    src={image}
                    className={'performanceInfoImg'}
                  />
                );
              })}
          </div>
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
