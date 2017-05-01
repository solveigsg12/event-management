import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import styles from "./Errors.css";

class Errors extends PureComponent {
  render() {
    const { error } = this.props;
    console.log("Error", error);
    const hasError = Boolean(error && error.size);
    return (
      <div
        className={classNames("errors", {
          ["errors--active"]: hasError
        })}
      >
        {hasError &&
          error.map(errorMessage => {
            return (
              <div key={errorMessage} className="errorMessage">
                {errorMessage.get("error")}
              </div>
            );
          })}
      </div>
    );
  }
}

Errors.propTypes = {
  error: PropTypes.object
};

export default Errors;
