import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {isFormValid} from '../selectors/form';
import * as formActions from '../actions/audienceForm';
import Input from './Input';
import './AudienceSignup.css';

class AudienceSignup extends Component {
  render() {
    const {
      audienceName,
      audienceAge,
      audienceSex,
      audienceAddress,
      audienceEmail,
      audienceNumber,
      isFormValid,
    } = this.props;
    return (
      <div>
        <h1 className="audienceHeader">Audience signup</h1>
        <div className="description">
          Seven Billion people living a life as vivid and complex as your own,
          you have the chance to view one of these peoples daily lives here.
        </div>
        <form
          method="POST"
          action="http://formspree.io/Taradogg210291@gmail.com"
          className="audienceForm"
        >
          <Input label="Signup type" value="Audience" hidden />
          <Input
            label="Name"
            value={audienceName.get('value')}
            onChange={event => this.onNameChange(event)}
            onBlur={() => this.handleNameBlurred()}
            error={audienceName.get('errors')}
          />
          <Input
            label="Email"
            value={audienceEmail.get('value')}
            onChange={event => this.onEmailChange(event)}
            onBlur={() => this.handleEmailBlurred()}
            error={audienceEmail.get('errors')}
          />
          <Input
            label="Phone number"
            value={audienceNumber.get('value')}
            onChange={event => this.onNumberChange(event)}
            onBlur={() => this.handleNumberBlurred()}
            error={audienceNumber.get('errors')}
          />
          <label>
            <div>I would like to see a performance in:</div>
            <label htmlFor="copenhagen"> Copenhagen</label>
            <input
              className="radioSelect"
              type="radio"
              name="audianceCountry"
              value="copenhagen"
              onChange={event => this.onRadioButtonChange(event)}
            />
            <label htmlFor="berlin">Berlin</label>
            <input
              className="radioSelect"
              type="radio"
              name="audianceCountry"
              value="beriln"
              onChange={event => this.onRadioButtonChange(event)}
            />
          </label>
          <button
            type="submit"
            className="button"
            onClick={() => this.onSubmit()}
            disabled={!isFormValid}
          >
            Sign up
          </button>
        </form>
      </div>
    );
  }

  onSubmit(event) {
    //TODO send email to Tara
  }

  onNameChange(event) {
    this.props.actions.setAudienceName(event.target.value);
  }

  handleNameBlurred() {
    this.props.actions.setAudienceNameBlurred();
  }
  onEmailChange(event) {
    this.props.actions.setAudienceEmail(event.target.value);
  }

  handleEmailBlurred() {
    this.props.actions.setAudienceEmailBlurred();
  }

  onNumberChange(event) {
    this.props.actions.setAudiencePhoneNumber(event.target.value);
  }

  handleNumberBlurred() {
    this.props.actions.setAudiencePhoneNumberBlurred();
  }
  onRadioButtonChange(event) {
    this.props.actions.setAudienceCountry(event.target.value);
  }
}

function mapStateToProps(state, props) {
  return {
    audienceName: state.audienceForm.get('audienceName'),
    audienceEmail: state.audienceForm.get('audienceEmail'),
    audienceNumber: state.audienceForm.get('audienceNumber'),
    audienceCountry: state.audienceForm.get('audienceCountry'),
    isFormValid: isFormValid(state),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(formActions, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AudienceSignup);
