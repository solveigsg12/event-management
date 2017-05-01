import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as formActions from "../actions/form";
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
          <label htmlFor="audienceName">Name</label>
          <input
            type="text"
            value={audienceName || ""}
            onChange={event => this.onNameChange(event)}
          />
          <label htmlFor="audienceAge">Age</label>
          <input
            type="text"
            value={audienceAge || ""}
            onChange={event => this.onAgeChange(event)}
          />
          <label htmlFor="audienceSex">Sex</label>
          <input
            type="text"
            value={audienceSex || ""}
            onChange={event => this.onSexChange(event)}
          />
          <label htmlFor="audienceAddress">Address</label>
          <input
            type="text"
            value={audienceAddress || ""}
            onChange={event => this.onAddressChange(event)}
          />
          <label htmlFor="audienceEmail">Email</label>
          <input
            type="text"
            value={audienceEmail || ""}
            onChange={event => this.onEmailChange(event)}
          />
          <label htmlFor="audienceNumber">Phone number</label>
          <input
            type="text"
            value={audienceNumber || ""}
            onChange={event => this.onNumberChange(event)}
          />
        </form>
      </div>
    );
  }

  onNameChange(event) {
    this.props.actions.setAudienceName(event.target.value);
  }

  onAgeChange(event) {
    this.props.actions.setAudienceAge(event.target.value);
  }

  onSexChange(event) {
    this.props.actions.setAudienceSex(event.target.value);
  }

  onAddressChange(event) {
    this.props.actions.setAudienceAddress(event.target.value);
  }

  onEmailChange(event) {
    this.props.actions.setAudienceEmail(event.target.value);
  }

  onNumberChange(event) {
    this.props.actions.setAudiencePhoneNumber(event.target.value);
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
