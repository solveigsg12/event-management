import React, {Component} from 'react';
import Header from './Header';
import classNames from 'classnames';
import {connect} from 'react-redux';

import './PreviousPerformanceInfo.css';

class PreviousPerformanceInfo extends Component {
  render() {
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
        </div>
        <div className="performanceInfoText">
          {this.props.performanceObject.get('text', null)}
        </div>
        <div className="videoContainer">
          {this.props.performanceObject.get('video', null) &&
            <iframe
              width="640"
              height="360"
              src={this.props.performanceObject.get('video')}
              frameBorder="0"
              allowFullScreen
            />}
        </div>
        <div className="performanceInfoImgContainer">
          {this.props.performanceObject.get('images', null) &&
            this.props.performanceObject
              .get('images', null)
              .map((image, index) => {
                return (
                  <img
                    key={index}
                    alt={'this is image from event' + index}
                    src={image}
                    className={'performanceInfoImg'}
                  />
                );
              })}
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
