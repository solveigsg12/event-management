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
        <form id="gform" method="POST"
 action="https://script.google.com/macros/s/AKfycbwMxYDrufp73bKdU8gMvxFDdHRuzcR4IKQUB33B7GqwyfyZS04/exec">

   <fieldset>
     <label htmlFor="name">Name: </label>
     <input id="name" name="name" placeholder="What your Mom calls you" />
   </fieldset>

   <fieldset>
     <label htmlFor="message">Message: </label>
     <textarea id="message" name="message" rows="10"
     placeholder="Tell us what's on your mind..."></textarea>
   </fieldset>

   <fieldset>
     <label htmlFor="email"><em>Your</em> Email Address:</label>
     <input id="email" name="email" type="email" value="evadogg@wow.is"
     required placeholder="your.name@email.com"/>
     <span id="email-invalid">
       Must be a valid email address</span>
   </fieldset>

   <fieldset>
     <label htmlFor="color">Favourite Color: </label>
     <input id="color" name="color" placeholder="green" />
   </fieldset>

   <button>
     <i></i>&nbsp;Send</button>

 </form>

 <div id="thankyou_message">
   <h2><em>Thanks</em> for contacting us!
     We will get back to you soon!</h2>
 </div>

 <script data-cfasync="false" type="text/javascript"
 src="https://script.google.com/macros/s/AKfycbwdjGdDsTH1TwQMb5rfn2UPvUzXgAWazcXOAhJnY5tVkPNfVQ/exec"></script>
 <script data-cfasync="false" type="text/javascript"
 src="/form-submission-handler.js"></script>
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
