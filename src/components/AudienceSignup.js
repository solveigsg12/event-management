import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as formActions from "../actions/form";
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
      audienceNumber
    } = this.props;
    return (
      <div>
        <h1>Audience signup</h1>
        <div>
          7.5 Billion humans living on this earth.
          7.5 Billion people living a life as vivid and complex as your own.

          Curiosity is key, you have the chance to view one of their daily lives here.
        </div>
        <form className="audienceForm">
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
        </form>
      </div>
    );
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
    audienceName: state.form.get("audienceName"),
    audienceAge: state.form.get("audienceAge"),
    audienceSex: state.form.get("audienceSex"),
    audienceAddress: state.form.get("audienceAddress"),
    audienceEmail: state.form.get("audienceEmail"),
    audienceNumber: state.form.get("audienceNumber")
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(formActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AudienceSignup);
