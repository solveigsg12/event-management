import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {isFormValid} from '../selectors/form';
import * as formActions from "../actions/hostForm";
import Input from "./Input";
import "./HostSignup.css";

class HostSignup extends Component {
  render() {
    const {
      hostName,
      hostAge,
      hostSex,
      hostAddress,
      hostEmail,
      hostNumber,
      hostDescription,
      hostInterests,
      isFormValid,
    } = this.props;
    return (
      <div>
        <h1>Host signup</h1>
        <div>
          Signing up here means that you in collaboration with us dress up your daily life(s) as a
          performance for X amount of time, Inviting yourself and audience to view your life as a
          performance.

          This is for anyone, anyone at all. Both individuals or groups.
        </div>
        <form className="hostForm">
          <Input
            label="Name"
            value={hostName.get("value")}
            onChange={event => this.onNameChange(event)}
            onBlur={() => this.handleNameBlurred()}
            error={hostName.get("errors")}
          />
          <Input
            label="Age"
            value={hostAge.get("value")}
            onChange={event => this.onAgeChange(event)}
            onBlur={() => this.handleAgeBlurred()}
            error={hostAge.get("errors")}
          />
          <Input
            label="Sex"
            value={hostSex.get("value")}
            onChange={event => this.onSexChange(event)}
            onBlur={() => this.handleSexBlurred()}
            error={hostSex.get("errors")}
          />
          <Input
            label="Address"
            value={hostAddress.get("value")}
            onChange={event => this.onAddressChange(event)}
            onBlur={() => this.handleAddressBlurred()}
            error={hostAddress.get("errors")}
          />
          <Input
            label="Email"
            value={hostEmail.get("value")}
            onChange={event => this.onEmailChange(event)}
            onBlur={() => this.handleEmailBlurred()}
            error={hostEmail.get("errors")}
          />
          <Input
            label="Phone number"
            value={hostNumber.get("value")}
            onChange={event => this.onNumberChange(event)}
            onBlur={() => this.handleNumberBlurred()}
            error={hostNumber.get("errors")}
          />
          <Input
            label="Short description of yourself"
            value={hostDescription.get("value")}
            onChange={event => this.onDescriptionChange(event)}
            onBlur={() => this.handleDescriptionBlurred()}
            error={hostDescription.get("errors")}
          />
          <Input
            label="Why are you interested?"
            value={hostInterests.get("value")}
            onChange={event => this.onInterestsChange(event)}
            onBlur={() => this.handleInterestsBlurred()}
            error={hostInterests.get("errors")}
          />
        </form>
        //TODO button disabled instead of hidden
        {isFormValid &&
          <button onClick={() => this.onSubmit()}>
            Sign up
          </button>}
      </div>
    );
  }

  onSubmit(event) {
    //TODO send email to Tara
  }

  onNameChange(event) {
    this.props.actions.setHostName(event.target.value);
  }

  handleNameBlurred() {
    this.props.actions.setHostNameBlurred();
  }

  onAgeChange(event) {
    this.props.actions.setHostAge(event.target.value);
  }

  handleAgeBlurred() {
    this.props.actions.setHostAgeBlurred();
  }

  onSexChange(event) {
    this.props.actions.setHostSex(event.target.value);
  }

  handleSexBlurred() {
    this.props.actions.setHostSexBlurred();
  }

  onAddressChange(event) {
    this.props.actions.setHostAddress(event.target.value);
  }

  handleAddressBlurred() {
    this.props.actions.setHostAddressBlurred();
  }

  onEmailChange(event) {
    this.props.actions.setHostEmail(event.target.value);
  }

  handleEmailBlurred() {
    this.props.actions.setHostEmailBlurred();
  }

  onNumberChange(event) {
    this.props.actions.setHostPhoneNumber(event.target.value);
  }

  handleNumberBlurred() {
    this.props.actions.setHostPhoneNumberBlurred();
  }

  onDescriptionChange(event) {
    this.props.actions.setHostDescription(event.target.value);
  }

  handleDescriptionBlurred() {
    this.props.actions.setHostDescriptionBlurred();
  }

  onInterestsChange(event) {
    this.props.actions.setHostInterests(event.target.value);
  }

  handleInterestsBlurred() {
    this.props.actions.setHostInterestsBlurred();
  }
}

function mapStateToProps(state, props) {
  return {
    hostName: state.hostForm.get("hostName"),
    hostAge: state.hostForm.get("hostAge"),
    hostSex: state.hostForm.get("hostSex"),
    hostAddress: state.hostForm.get("hostAddress"),
    hostEmail: state.hostForm.get("hostEmail"),
    hostNumber: state.hostForm.get("hostNumber"),
    hostDescription: state.hostForm.get("hostDescription"),
    hostInterests: state.hostForm.get("hostInterests"),
    isFormValid: isFormValid(state),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(formActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(HostSignup);
