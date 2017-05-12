import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as formActions from "../actions/form";
import HostSignup from "../components/HostSignup";
import AudienceSignup from "../components/AudienceSignup";
import "./Signup.css";

class Signup extends Component {
  render() {
    const { signupType, isFormValid } = this.props;

    return (
      <div className="container">
        <div className="innerContainer">
          <h1 className="signupHeader">Sign up</h1>
          <form className="signupTypeSelect">
            <label htmlFor="host">Host</label>
            <input
              className="radioSelect"
              type="radio"
              name="signupType"
              value="host"
              checked={signupType==="host"}
              onChange={event => this.onChange(event)}
            />
            <label htmlFor="audience">Audience</label>
            <input
              className="radioSelect"
              type="radio"
              name="signupType"
              value="audience"
              onChange={event => this.onChange(event)}
            />
          </form>
          {signupType && signupType === "host" && <HostSignup />}
          {signupType && signupType === "audience" && <AudienceSignup />}
        </div>
      </div>
    );
  }

  onChange(event) {
    this.props.actions.setSignupType(event.target.value);
  }
}

function mapStateToProps(state, props) {
  return {
    signupType: state.form.get("signupType"),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(formActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Signup);
