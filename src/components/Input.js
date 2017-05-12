import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import Errors from "./Errors";

import styles from "./Input.css";

class Input extends PureComponent {
  render() {
    const { error, large } = this.props;
    const hasError = Boolean(error && error.size);
    return (
      <div className={classNames("inputContainer", {
        ["inputContainer--large"]: large,
      })}>
        <label className="label" htmlFor={this.props.value}>{this.props.label}</label>
        <input className="input"
          type="text"
          value={this.props.value}
          onChange={event => this.props.onChange(event)}
          onBlur={() => this.props.onBlur()}
        />
        <Errors error={this.props.error} />
      </div>
    );
  }
}

Input.propTypes = {
  value: PropTypes.any,
  onChange: PropTypes.func.isRequired,
  onBlur: PropTypes.func,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  error: PropTypes.object
};

export default Input;
