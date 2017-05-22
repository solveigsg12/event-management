import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { isFormValid } from "../selectors/form";
import * as formActions from "../actions/audienceForm";
import Input from "./Input";
import "./AudienceSignup.css";

class AudienceSignup extends Component {
  render() {
    const {
      audienceName,
      audienceAge,
      audienceSex,
      audienceAddress,
      audienceEmail,
      audienceNumber,
      isFormValid
    } = this.props;
    return (
      <div>
        <h1 className="audienceHeader">Audience signup</h1>
        <div className="description">
          7.5 Billion humans living on this earth.
          7.5 Billion people living a life as vivid and complex as your own.

          Curiosity is key, you have the chance to view one of their daily lives here.
        </div>
        <form
          method="POST" action="http://formspree.io/Taradogg210291@gmail.com"
          className="audienceForm"
        >
          <Input
            label="Signup type"
            value="Audience"
            hidden
          />
          <Input
            label="Name"
            value={audienceName.get("value")}
            onChange={event => this.onNameChange(event)}
            onBlur={() => this.handleNameBlurred()}
            error={audienceName.get("errors")}
          />
          <Input
            label="Age"
            value={audienceAge.get("value")}
            onChange={event => this.onAgeChange(event)}
            onBlur={() => this.handleAgeBlurred()}
            error={audienceAge.get("errors")}
          />
          <Input
            label="Sex"
            value={audienceSex.get("value")}
            onChange={event => this.onSexChange(event)}
            onBlur={() => this.handleSexBlurred()}
            error={audienceSex.get("errors")}
          />
          <Input
            label="Address"
            value={audienceAddress.get("value")}
            onChange={event => this.onAddressChange(event)}
            onBlur={() => this.handleAddressBlurred()}
            error={audienceAddress.get("errors")}
          />
          <Input
            label="Email"
            value={audienceEmail.get("value")}
            onChange={event => this.onEmailChange(event)}
            onBlur={() => this.handleEmailBlurred()}
            error={audienceEmail.get("errors")}
          />
          <Input
            label="Phone number"
            value={audienceNumber.get("value")}
            onChange={event => this.onNumberChange(event)}
            onBlur={() => this.handleNumberBlurred()}
            error={audienceNumber.get("errors")}
          />
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

  onAgeChange(event) {
    this.props.actions.setAudienceAge(event.target.value);
  }

  handleAgeBlurred() {
    this.props.actions.setAudienceAgeBlurred();
  }

  onSexChange(event) {
    this.props.actions.setAudienceSex(event.target.value);
  }

  handleSexBlurred() {
    this.props.actions.setAudienceSexBlurred();
  }

  onAddressChange(event) {
    this.props.actions.setAudienceAddress(event.target.value);
  }

  handleAddressBlurred() {
    this.props.actions.setAudienceAddressBlurred();
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
}

function mapStateToProps(state, props) {
  return {
    audienceName: state.audienceForm.get("audienceName"),
    audienceAge: state.audienceForm.get("audienceAge"),
    audienceSex: state.audienceForm.get("audienceSex"),
    audienceAddress: state.audienceForm.get("audienceAddress"),
    audienceEmail: state.audienceForm.get("audienceEmail"),
    audienceNumber: state.audienceForm.get("audienceNumber"),
    isFormValid: isFormValid(state)
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(formActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AudienceSignup);
