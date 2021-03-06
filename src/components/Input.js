import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import Errors from "./Errors";

import styles from "./Input.css";

class Input extends PureComponent {
  render() {
    const { error, value, label, hidden } = this.props;
    const hasError = Boolean(error && error.size);
    return (
      <div className={classNames("inputContainer", {
        ["hidden"]: hidden,
      })}>
        <label className="label" htmlFor={value}>{label}</label>
        <input className="input"
          name={label}
          type="text"
          value={value}
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
  error: PropTypes.object,
  hidden: PropTypes.bool
};

export default Input;
