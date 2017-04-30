import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as formActions from "../actions/form";
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
      hostInterests
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
          <label htmlFor="hostName">Name</label>
          <input
            type="text"
            value={hostName || ""}
            onChange={event => this.onNameChange(event)}
          />
          <label htmlFor="hostAge">Age</label>
          <input
            type="text"
            value={hostAge || ""}
            onChange={event => this.onAgeChange(event)}
          />
          <label htmlFor="hostSex">Sex</label>
          <input
            type="text"
            value={hostSex || ""}
            onChange={event => this.onSexChange(event)}
          />
          <label htmlFor="hostAddress">Address</label>
          <input
            type="text"
            value={hostAddress || ""}
            onChange={event => this.onAddressChange(event)}
          />
          <label htmlFor="hostEmail">Email</label>
          <input
            type="text"
            value={hostEmail || ""}
            onChange={event => this.onEmailChange(event)}
          />
          <label htmlFor="hostNumber">Phone number</label>
          <input
            type="text"
            value={hostNumber || ""}
            onChange={event => this.onNumberChange(event)}
          />
          <label htmlFor="hostDescription">Short description of yourself</label>
          <input
            type="text"
            value={hostDescription || ""}
            onChange={event => this.onDescriptionChange(event)}
          />
          <label htmlFor="hostInterests">Why are you interested?</label>
          <input
            type="text"
            value={hostInterests || ""}
            onChange={event => this.onInterestsChange(event)}
          />
        </form>
      </div>
    );
  }

  onNameChange(event) {
    this.props.actions.setHostName(event.target.value);
  }

  onAgeChange(event) {
    this.props.actions.setHostAge(event.target.value);
  }

  onSexChange(event) {
    this.props.actions.setHostSex(event.target.value);
  }

  onAddressChange(event) {
    this.props.actions.setHostAddress(event.target.value);
  }

  onEmailChange(event) {
    this.props.actions.setHostEmail(event.target.value);
  }

  onNumberChange(event) {
    this.props.actions.setHostPhoneNumber(event.target.value);
  }

  onDescriptionChange(event) {
    this.props.actions.setHostDescription(event.target.value);
  }

  onInterestsChange(event) {
    this.props.actions.setHostInterests(event.target.value);
  }
}

function mapStateToProps(state, props) {
  return {
    hostName: state.form.get("hostName"),
    hostAge: state.form.get("hostAge"),
    hostSex: state.form.get("hostSex"),
    hostAddress: state.form.get("hostAddress"),
    hostEmail: state.form.get("hostEmail"),
    hostNumber: state.form.get("hostNumber"),
    hostDescription: state.form.get("hostDescription"),
    hostInterests: state.form.get("hostInterests")
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(formActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(HostSignup);
