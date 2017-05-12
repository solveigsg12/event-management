import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import Errors from "./Errors";

import styles from "./TextArea.css";

class TextArea extends PureComponent {
  render() {
    const { error, large, value, label } = this.props;
    const hasError = Boolean(error && error.size);
    return (
      <div className="textareaContainer">
        <label className="label" htmlFor={value}>{label}</label>
        <textarea className="textarea"
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

TextArea.propTypes = {
  value: PropTypes.any,
  onChange: PropTypes.func.isRequired,
  onBlur: PropTypes.func,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  error: PropTypes.object
};

export default TextArea;
